// News & updates shown at the top of the portfolio.
//
// To post an update, add a new object anywhere in this list (it is sorted by
// date automatically, newest first). Fields:
//   date  - 'YYYY-MM-DD' or 'YYYY-MM'
//   endDate - optional last day for multi-day events, shown as a range
//   type  - one of: 'paper', 'award', 'teaching', 'competition', 'talk', 'milestone'
//   title - short headline
//   venue - optional label shown next to the tag (e.g. 'CALDAM 2026')
//   status - optional amber label after the venue (e.g. 'Ongoing')
//   text  - optional one or two sentence description
//   pinned - optional, keeps an item at the top regardless of date

export const news = [
  {
    date: '2026-11-07',
    endDate: '2026-11-08',
    type: 'competition',
    venue: 'HackUTD 2026',
    status: 'Upcoming',
    title: 'Competing at HackUTD 2026',
  },
  {
    date: '2026-11-04',
    endDate: '2026-11-05',
    type: 'competition',
    venue: 'NoCode Hackathon 2026',
    status: 'Upcoming',
    title: 'Competing at NoCode Hack',
  },
  {
    date: '2026-10-28',
    type: 'competition',
    venue: 'Top 8 Finalist',
    title: 'AI in Finance: Situational Awareness LP',
    text: 'A daily early-warning score that tells a leveraged AI-infrastructure fund when to cut risk, built around the Situational Awareness LP case.',
  },
  {
    date: '2026-10-24',
    type: 'competition',
    venue: 'UTD HackEdge 2026',
    status: 'Ongoing',
    title: 'BreathBreak: an edge-powered wearable for real-time fatigue detection',
    text: 'ECG and PPG signals scored on-device against each worker’s baseline to prompt breathing breaks before fatigue causes accidents.',
  },
    {
    date: '2026-10',
    type: 'paper',
    venue: 'npj Parkinson’s Disease (Nature Portfolio)',
    title: 'Published "Resting state fMRI network topographies in preclinical and early Parkinson’s disease stages" in npj Parkinson’s Disease (Nature Portfolio)',
    text: 'Explainable-AI pipeline (ICA + SVM + LIME) deriving fMRI motor and cognitive Parkinson’s networks, tracked from genetic risk carriers to early disease.',
  },
    {
    date: '2026-08',
    type: 'teaching',
    title: 'TA for Programming Language Paradigms (CS 4337)',
  },
  {
    date: '2026-06',
    type: 'teaching',
    title: 'Teaching CS Outreach: Deep Dive AI at UT Dallas',
    text: 'Taught high school students machine learning fundamentals through hands-on Python projects, from linear regression to LLMs.',
  },
  {
    date: '2026-04',
    type: 'competition',
    title: 'Built Iris at HackAI',
    text: 'An AI-powered eye health assistant with disease detection, at-home vision exams, and personalized reports.',
  },
  {
    date: '2026-02',
    type: 'competition',
    title: 'Built Axxess Sentinel at the Axxess Hackathon',
    text: 'Turning live wearable vitals into early risk alerts and forecasts with TimesFM.',
  },
  {
    date: '2026-01',
    type: 'teaching',
    title: 'TA for Programming Language Paradigms (CS 4337)',
  },
  {
    date: '2025-12',
    type: 'paper',
    venue: 'CALDAM 2026',
    title: 'Published "Permutation codes under the generalized Kendall-τ metric" published in CALDAM 2026',
    text: 'Exact bounds and construction algorithms for permutation arrays, with an efficient (n, 2)-PA testing procedure.',
  },
  {
    date: '2025-05',
    type: 'paper',
    venue: 'Brain Communications 2025', 
    title: 'Alzheimer’s Psychosis Network published in Brain Communications',
    text: 'An AI-derived metabolic network that predicts psychosis in Alzheimer’s disease with 77% accuracy.',
  },
  {
    date: '2024-08',
    type: 'milestone',
    title: 'Started Ph.D. in Computer Science at UT Dallas',
  },
  {
    date: '2024-05',
    type: 'milestone',
    title: 'Graduated Summa Cum Laude from Adelphi University',
    text: 'B.S. in Computer Science, Honors College.',
  },
];
