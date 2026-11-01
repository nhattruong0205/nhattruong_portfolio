// Image for Axxess Sentinel project
import axxessSentinelLogin from '../components/Projects/Axxess Sentinel Login.png';
import axxessSentinelFeature1 from '../components/Projects/Axxess Sentinel Cover.png';
import axxessSentinelFeature2 from '../components/Projects/Axxess Sentinel Cover-2.png';

// Image for Iris project
import irisPage from '../components/Projects/Iris-Page.png';
import irisFeature1 from '../components/Projects/Feature1-EyeDiseaseDetection.png';
import irisFeature2 from '../components/Projects/Feature2-EyeExam.png';
import irisFeature3 from '../components/Projects/Feature3-IrisPersonalizeReport.png';

// Image for Thematic Risk Monitor project
import riskMonitorPipeline from '../components/Projects/Risk Monitor Pipeline.png';
import riskMonitorDashboard from '../components/Projects/Risk Monitor Dashboard.png';

export const projects = [
  {
    slug: 'thematic-risk-monitor',
    name: 'Thematic Risk Monitor',
    year: '2026',
    category: 'AI in Finance',
    coverImages: [
      {
        src: riskMonitorPipeline,
        alt: 'Thematic Risk Monitor pipeline: collect, signals, normalize, score, act',
      },
      {
        src: riskMonitorDashboard,
        alt: 'Live Thematic Risk Monitor dashboard with risk score, signals, holdings and news feed',
      },
    ],
    coverAlt: 'Thematic Risk Monitor preview',
    summary: 'A daily early-warning score that tells a leveraged AI-infrastructure fund when to cut risk.',
    description:
      'Built around the Situational Awareness LP case: a concentrated, leveraged AI-infrastructure fund that lost about two-thirds of its value when AI stocks sold off in 2026. Shocks can’t be predicted, but fragility can be measured. The monitor reads free public data each day and outputs a 0–100 risk score, a regime (NORMAL, ELEVATED or DE-RISK), and an action: hold, reduce leverage, or reduce leverage and close call positions.',
    detail:
      'Twelve signals are computed on the fund’s holdings basket in two layers. Fragility signals (stretch above the 200-day average, pairwise correlation, realized volatility) build slowly and say how much a selloff would hurt. Trigger signals (trend break, breadth, drawdown, divergence from the S&P 500, VIX spike and term structure, leader churn, and news sentiment) move fast and say that one is starting.\n\n' +
      'Each signal is ranked against the theme’s own trailing two years with no look-ahead, then blended (35% fragility, 65% trigger), smoothed, and floored by circuit breakers. For the news layer, Claude reads up to 150 recent headlines and tags each with relevance, tone, severity and risk driver (AI capex, data-center debt, memory prices, Taiwan, bubble, macro).\n\n' +
      'In a 2017–2026 backtest on price signals alone, 18 of 25 alarms were followed by a 10%+ drop, the score warned 3 trading days before the June 2026 selloff, and following the actions improved Sharpe from 1.12 to 1.19 while cutting max drawdown from −83.5% to −72.3% versus staying 2x levered. It runs daily, as a live terminal monitor, or as a live browser dashboard with charts and a news feed.',
    tech: ['Python', 'pandas', 'NumPy', 'SciPy', 'yfinance', 'Claude API', 'VADER',
      'feedparser', 'Matplotlib', 'Chart.js', 'HTML/CSS/JavaScript'],
      videoEmbedUrl: 'https://youtu.be/aQi-5O8ehfM',

  },
  {
    slug: 'axxess-sentinel',
    name: 'Axxess Sentinel',
    year: '2026',
    category: 'Axxess Hackathon',
    coverImages: [
      {
        src: axxessSentinelLogin,
        alt: 'Axxess Sentinel login page preview',
      },
      {
        src: axxessSentinelFeature1,
        alt: 'Feature 1: Show current and predicted vitals',
      },
      {
        src: axxessSentinelFeature2,
        alt: 'Feature 2: Chatbot',
      },
    ],
    coverAlt: 'Axxess Sentinel dashboard preview',
    summary: 'Wearable vitals to early risk alerts for patients and caregivers.',
    description:
      'Axxess Sentinel turns live wearable vitals into early risk alerts and clear forecasts, helping patients and caregivers intervene sooner with secure, role-based care workflows.',
    detail: `We built a baseline approach for wearable health data analysis. 
    We use a mock API to simulate realistic heart rate, sleep, and activity data that we can collect from user's Apple Watch of Fitbit. 
    We then apply Google’s TimesFM time-series model to predict the next-interval values for these specific parameters. 
    In addition, we developed separate detection models for each parameter to identify potential diseases. 
    The current values help diagnose the user’s present condition, while the predicted values enable early detection of possible health risks.`,
    tech: ['TypeScript', 'JavaScript','Python','React','Next.js','Node.js','Express.js',
      'Flask','SQLite','Prisma','JWT','WebSockets','TimesFM','Recharts','bcrypt','dotenv','Git'],
    videoEmbedUrl: 'https://www.youtube.com/embed/3Aw_9TBehsI',
    devpostUrl: 'https://devpost.com/software/axxess-sentinel?ref_content=my-projects-tab&ref_feature=my_projects',
  },
  {
    slug: 'HACKAI',
    name: 'Iris',
    year: '2026',
    category: 'HackAI',
      coverImages: [
      {
        src: irisPage,
        alt: 'Iris project page preview',
      },
      {
        src: irisFeature1,
        alt: 'Feature 1: Eye disease detection',
      },
      {
        src: irisFeature2,
        alt: 'Feature 2: Eye exam',
      },
      {
        src: irisFeature3,
        alt: 'Feature 3: Personalized report',
      },
      ],
    coverAlt: 'Iris project preview',
    summary: 'Personalized AI-powered tools suggest people care about their eyes',
    description: `We built an application with three main features: 
    1) Classified external eye disease that one might have by uploading a photo of their eye. The Gemini 2.5 Flask multi-modal model is used for this classification task. Suggest user nearby eye clinic to go to.
    2) Using computer vision with mediapipe and 2 different models to detect eyes and calculate its position to the camera. Conducting different exams based on a published research paper to estimate hypermetropic and myopia.
    3) Iris chatbot will use those user data collected so far to provide user with a better personalized experience.
    We use MongoDB to store user data and ElevenLab to read those user health report and to interact with user to provide them a better experience.`,
    tech: ['cheerio','css', 'eslint','framer-motion','google-maps', 'javacript', 'mediapipe', 'mongodb', 'next.js', 'react', 'react-hook-form', 'recharts', 'tailwindcss', 'typescript','flask','gemini 2.5','elevenlab'],
    videoEmbedUrl: 'https://youtu.be/hgrZmG0O7mU',
    devpostUrl: 'https://devpost.com/software/iris-8sod3k?ref_content=my-projects-tab&ref_feature=my_projects',
  },

];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}
