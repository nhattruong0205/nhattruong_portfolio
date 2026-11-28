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

// Image for FutureMe project
import futureMeHome from '../components/Projects/FutureMe Home.png';

// Image for Oilgorithm project
import oilgorithmHomepage from '../components/Projects/Oilgorithm Homepage.png';
import oilgorithmSystemMap from '../components/Projects/Oilgorithm System Map.png';
import oilgorithmLeakageError from '../components/Projects/Oilgorithm Leakage Error.png';
import oilgorithmIncidentReport from '../components/Projects/Oilgorithm Incident Report.png';
import oilgorithmIncidentLog from '../components/Projects/Oilgorithm Incident Log.png';

export const projects = [
  {
    slug: 'page-one-builder',
    name: 'Page One Builder',
    year: '2026',
    category: 'UT Dallas Hackathon',
    summary: 'Win the restaurant searches that matter, from the customers who actually come.',
    description:
      'Built for LLMSoftware’s challenge at the UT Dallas Hackathon (Nov 14, 2026). When someone nearby searches “biryani near me”, the top 3 restaurants on Google Maps get most of the calls and orders, and more people now ask AI assistants like ChatGPT and Google’s AI Overviews where to eat. Most small restaurants don’t know which searches they should win, or what to fix to get there.',
    detail:
      'The challenge was to build a tool that, for one restaurant, finds 10 keywords it should rank for (by dish, cuisine plus area, and need), checks where it stands today on Google Maps (local SEO), Google’s first page (SEO) and AI answers (AEO), compares its Google Business Profile with whoever is winning each keyword, and generates ready-to-paste fixes: a better business description, weekly Google posts, keyword-rich menu descriptions, web pages, FAQ answers, schema markup and a review request for real customers.\n\n' +
      'We solved the keyword problem, and also raised a bigger question: what is the point of ranking high for a keyword if the people searching it aren’t your customers? So we built a customer heatmap that shows where the restaurant’s real customers come from. It focuses keyword choices on the people who actually come, and points to areas with no customers yet, where the restaurant can advertise with flyers or coupons. Since social media algorithms suggest the same content to people in the same area, reaching a few customers in a new neighborhood helps reach their neighbors too.',
    tech: ['Python', 'Google Colab', 'Gemini API', 'Local SEO', 'AEO', 'Schema Markup', 'Heatmap'],
  },
  {
    slug: 'oilgorithm',
    name: 'Oilgorithm',
    year: '2026',
    category: 'HackUTD',
    coverImages: [
      { src: oilgorithmHomepage, alt: 'Oilgorithm homepage' },
      { src: oilgorithmSystemMap, alt: 'System map of the water disposal network' },
      { src: oilgorithmLeakageError, alt: 'Facility map with a detected pipeline leak' },
      { src: oilgorithmIncidentReport, alt: 'Incident report' },
      { src: oilgorithmIncidentLog, alt: 'Incident log and crew directory' },
    ],
    coverAlt: 'Oilgorithm dashboard preview',
    summary: 'Find failures early, where they are, and act at the lowest cost.',
    description:
      'Built for EOG Resources’ challenge at HackUTD 2026: ZeroDay. Their salt-water disposal system only reports a failure once a sensor crosses a hard limit, and by then the damage is already growing. Oilgorithm is a dashboard that reads the network’s sensor telemetry, locates the problem on a live map, catches it at its early stage, and suggests the cheapest response. Built with Ky Anh Vo and Anh Phan.',
    detail:
      'Oilgorithm pinpoints where a failure is happening (the facility, the pump or the pipeline) and catches pipeline leaks at their first pressure drop, before they grow into a spill. For pumps, it holds the inspector until several signals agree the pump is really wearing out, so every trip finds a real problem. It then ranks the possible responses by cost and reaches the right people, with the level of control matched to the risk.\n\n' +
      'We built heuristics on the sensor readings, and for early detection trained an offline clustering model on each facility’s data from before past errors to find warning patterns. Replaying a full week of telemetry, it warned of 3 pump failures 34 hours ahead on average and caught 5 leaks about 2 minutes after they started, flagging all 5 before the standard check confirmed them. The hardest parts were interpreting the data from scratch and tuning early detection with clustering alone.',
    tech: ['Python', 'FastAPI', 'React', 'TypeScript', 'Clustering', 'Sensor Telemetry'],
    videoEmbedUrl: 'https://www.youtube.com/embed/s4u-c1MKe0w',
    devpostUrl: 'https://devpost.com/software/oil-er-rithm',
  },
  {
    slug: 'futureme',
    name: 'FutureMe',
    year: '2026',
    category: 'UTD No-Code Hackathon',
    coverImages: [
      { src: futureMeHome, alt: 'FutureMe landing page: “Who do you want to become?”' },
    ],
    summary: 'Meet the person you’re becoming: type a dream job and get a clear, game-style path to get there.',
    description:
      'Students know the job they want, but not what it takes to get there. Comparing courses, certificates and study resources takes weeks, and every option leads to more options, so motivation runs out before studying even starts. FutureMe turns a dream job into a clear path in minutes and builds both the skills and the mindset the job needs.',
    detail:
      'FutureMe searches real job postings for the role you want and pulls out the skills, courses and certificates employers ask for. It shows the rewards and challenges of the job, told by people who did it, so you know what to expect before you commit. It then lays out a roadmap of courses, YouTube videos and certificates in order, with why each step matters and how long it takes.\n\n' +
      'Learning is game-style: five-minute lessons, practice quizzes with instant feedback after each lesson, XP, streaks, and daily reminders that keep you on schedule for your target date. A counselor view shows each student’s goal, current step and streak, and flags anyone inactive for 3+ days as “Needs a nudge.”\n\n' +
      'It starts with individual students and is designed to grow to schools, where counselors assign courses and milestones to a class, and to employers training new hires on the skills and certificates each role needs. Built without code using Lovable.',
    tech: ['Lovable', 'No-Code', 'AI', 'Job Posting Search', 'Gamified Learning'],
    demoUrl: 'https://nhat-truong-futureme-nocode.lovable.app',
  },
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
    slug: 'breathbreak',
    name: 'BreathBreak',
    year: '2026',
    category: 'UTD HackEdge',
    award: '2nd Place',
    summary: 'An edge-powered wearable that detects worker fatigue in real time and prompts short breathing breaks.',
    description:
      'Employees working long shifts often experience fatigue, which reduces alertness, harms their health, and increases the risk of workplace accidents. BreathBreak is a non-invasive wearable that monitors and detects signs of fatigue during long shifts. It sends real-time fatigue alerts that prompt workers to take short breathing breaks, and gives HR weekly and monthly fatigue trend reports to help balance workloads and shift schedules. Built with Dung Anh Nguyen and Anthony Tran, and won 2nd place at UTD HackEdge 2026.',
    detail:
      'A TI AFE4950 acquires synchronized ECG and PPG signals, and a TI SK-AM62 compares each worker’s signals to their personal baseline and computes a fatigue score on the device. A 2-minute rest at the start of each shift sets that baseline, and each 60-second window is classified as alert or fatigued.\n\n' +
      'We compared two models on the public WESAD (stress) and DROZY (sleep deprivation) datasets. Model A is a logistic regression on HRV features from DROZY. Model B uses transfer learning: pretrain on WESAD, then fine-tune the final layers on DROZY, since fatigue-labeled data is scarce. Transfer is not guaranteed to help, because stress is not fatigue and raw waveforms differ across sensors, so both models are evaluated on unseen people and the better one runs on BreathBreak.\n\n' +
      'BreathBreak doesn’t change workers’ regular hours. It offers short breaks only when their body signals show they need one, which applies to long-shift work across industries, from nurses to truck drivers and factory workers. A small pause is better than a big accident.',
    tech: ['TI AFE4950', 'TI SK-AM62', 'ECG', 'PPG', 'HRV features', 'Logistic Regression',
      'Transfer Learning', 'WESAD', 'DROZY', 'Edge AI'],
    videoEmbedUrl: 'https://youtu.be/BHNbs6xWSkY',

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

export function getProjectCoverImages(project) {
  if (Array.isArray(project.coverImages) && project.coverImages.length > 0) {
    return project.coverImages;
  }

  if (project.coverImageUrl) {
    return [
      {
        src: project.coverImageUrl,
        alt: project.coverAlt ?? `${project.name} cover`,
      },
    ];
  }

  if (!project.videoEmbedUrl) {
    return [];
  }

  try {
    const parsed = new URL(project.videoEmbedUrl);
    const host = parsed.hostname.replace(/^www\./, '');

    if (host === 'youtu.be') {
      const videoId = parsed.pathname.replace('/', '');
      return videoId
        ? [{ src: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`, alt: project.coverAlt ?? `${project.name} cover` }]
        : [];
    }

    if (host === 'youtube.com' || host === 'm.youtube.com') {
      if (parsed.pathname.startsWith('/embed/')) {
        const videoId = parsed.pathname.split('/')[2];
        return videoId
          ? [{ src: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`, alt: project.coverAlt ?? `${project.name} cover` }]
          : [];
      }

      if (parsed.pathname === '/watch') {
        const videoId = parsed.searchParams.get('v');
        return videoId
          ? [{ src: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`, alt: project.coverAlt ?? `${project.name} cover` }]
          : [];
      }
    }
  } catch (error) {
    return [];
  }

  return [];
}
