import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '../.env') });
dotenv.config({ path: path.join(__dirname, '.env'), override: true });

const app = express();
const port = Number.parseInt(process.env.PORT ?? '4000', 10);
const mongoUri = process.env.MONGODB_URI;
const frontendOrigin = process.env.FRONTEND_ORIGIN ?? 'http://localhost:3000';

if (!mongoUri) {
  throw new Error('MONGODB_URI is required');
}

const counterSchema = new mongoose.Schema(
  {
    key: {
      type: String,
      required: true,
      unique: true,
    },
    count: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const VisitCounter = mongoose.model('VisitCounter', counterSchema);

app.use(
  cors({
    origin: frontendOrigin,
  })
);
app.use(express.json());

app.get('/api/health', (_request, response) => {
  response.json({ ok: true });
});

app.post('/api/visits', async (_request, response, next) => {
  try {
    const counter = await VisitCounter.findOneAndUpdate(
      { key: 'portfolio-visits' },
      { $inc: { count: 1 } },
      {
        new: true,
        upsert: true,
        setDefaultsOnInsert: true,
      }
    );

    response.json({ count: counter.count });
  } catch (error) {
    next(error);
  }
});

app.use((error, _request, response, _next) => {
  response.status(500).json({
    error: 'Failed to update visit counter',
    details: error.message,
  });
});

async function start() {
  await mongoose.connect(mongoUri);
  console.log('Connected to MongoDB cluster');
  app.listen(port, () => {
    console.log(`Visit counter API listening on http://localhost:${port}`);
  });
}

start().catch((error) => {
  console.error('Failed to start visit counter API', error);
  process.exit(1);
});
