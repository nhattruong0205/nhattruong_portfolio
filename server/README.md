## Visit Counter Server

This server provides the MongoDB-backed visit counter used by the React portfolio frontend.

### Setup

1. Copy `.env.example` to `.env`.
2. Set `MONGODB_URI` to your MongoDB connection string.
3. Set `FRONTEND_ORIGIN` to your frontend URL.
4. Install dependencies with `npm install`.
5. Run the API with `npm run dev`.

### Frontend

In the React app, set:

`REACT_APP_API_BASE_URL=http://localhost:4000`

For production, point `REACT_APP_API_BASE_URL` at the deployed backend URL.

### API

- `GET /api/health`
- `POST /api/visits` increments the shared visit counter and returns `{ count }`
