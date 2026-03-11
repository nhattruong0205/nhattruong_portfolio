export const projects = [
  {
    slug: 'axxess-sentinel',
    name: 'Axxess Sentinel',
    year: '2026',
    category: 'Axxess Hackathon',
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
    category: 'HACKAI 2026',
    summary: 'Personalized AI-powered tools suggest people care about their eyes',
    description: `We built an application with three main features: 
    1) Classified external eye disease that one might have by uploading a photo of their eye. The Gemini 2.5 Flask multi-modal model is used for this classification task. 
    ,
  },

];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}
