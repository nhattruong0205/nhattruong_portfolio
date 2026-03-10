import evangelLogo from '../components/Education/Evangel Logo.png';
import adelphiLogo from '../components/Education/Adelphi.jpg';
import utdallasLogo from '../components/Education/UT dallas.jpg';

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function createCourse(title, options = {}) {
  return {
    title,
    slug: options.slug ?? slugify(title),
    summary: options.summary ?? `Notes and key takeaways for ${title}.`,
    sections: options.sections ?? [
      {
        heading: 'Overview',
        content: `This page is ready for your ${title} notes. Use it to organize lecture takeaways, review material, and anything you want to remember from the course.`,
      },
      {
        heading: 'What to keep here',
        items: [
          `Important concepts and definitions from ${title}`,
          'Homework, labs, or project takeaways',
          'Quiz and exam review points',
        ],
      },
      {
        heading: 'Next step',
        content: 'Replace this starter text with your actual notes whenever you are ready.',
      },
    ],
  };
}

export const schools = [
  {
    year: '2017-2020',
    degree: 'High School Diploma',
    name: 'Evangel Christian High School',
    description: 'Long Island City, New York • GPA: 4.0 • Rank: 4',
    logo: evangelLogo,
    courses: [
      'Biology',
      'Chemistry',
      'Physics',
      'Calculus',
      'Statistics',
      'Global',
      'US History',
      'Bible',
    ].map((course) => createCourse(course)),
  },
  {
    year: '2020-2024',
    degree: 'B.S. Computer Science',
    name: 'Adelphi University, Honor College',
    description: 'Garden City, New York • GPA: 3.97 • Summa Cum Laude',
    logo: adelphiLogo,
    courses: [
      'Introduction to Machine Learning',
      'Survey of Programming Languages',
      'Data Structures',
      'Operating System Practicum',
      'Algorithms and Complexity',
      'Software Engineering',
      'Computer Architecture and Organization',
      'Web Programming',
      'Computer Networks',
      'Operating Systems',
    ].map((course) => createCourse(course)),
  },
  {
    year: '2024-Present',
    degree: 'Ph.D. Computer Science',
    name: 'University of Texas at Dallas',
    description: 'Richardson, Texas • GPA: 3.8',
    logo: utdallasLogo,
    courses: [
      createCourse('Natural Language Processing', {
        summary: 'This course is taken under Dr. Jessica Ouyang in Spring 2026.',
        sections: [
          {
            heading: 'Overview',
            blocks: [
              {
                type: 'text',
                content: `Models and approaches that are being taught in this course.

Broad NLP Approaches:`,
              },
              {
                type: 'table',
                table: {
                  columns: ['Approach', 'Algorithms Brief', 'Pros and Cons', 'Usage and Avoid', 'Examples'],
                  rows: [
                    [
                      'Rule-based',
                      'Encodes human knowledge using ontologies, lexicons, and hand-written rules',
                      `Pros: Easily interpretable and do not require much training data. Highly effective for specific, well-defined tasks.
                      Cons: Not robust; poor on open-domain tasks; manual resource intensive`,
                      `Usage: When domain knowledge is high but data is scarce, or for highly rigid tasks.
                      Avoid: For general-purpose or open-domain applications where statistical or neural models excel.`,
                      'Monolingual word alignment: identifying identical word sequences of length ≥ 2 using hand-written rules'
                    ],
                    [
                      'Statistical',
                      'Learns a decision process from large amounts of data instead of manual encoding',
                      `Pros: Reasonably interpretable (via feature weights); combines human knowledge with data-driven learning
                      Cons: Requires data to learn; supervised training is time-consuming; success depends on manual feature choice`,
                      `Usage: When you have a moderate amount of data and need some level of explainability.
                      Avoid: When you have massive datasets and compute power where neural models perform better.`,
                      'Sarcasm detection: identifying sarcasm in tweets using word counts, emoticons, and hashtags as features'
                    ],
                    [
                      'Neural',
                      'A type of statistical approach using end-to-end learning via neural networks to discover intermediate representations',
                      `Pros: State-of-the-art performance; enables tasks previously thought impossible; utilizes end-to-end learning
                      Cons: Black box" nature (not interpretable); requires massive data, time, and compute power`,
                      `Usage: For complex tasks like machine translation where performance is the priority and resources are high
                      Avoid: When you need to explain why a specific decision was made or when compute is limited`,
                      'Neural Machine Translation (NMT): Directly transforming a French sentence like "j’ai faim" into the English "I’m hungry"'
                    ],
                  ],
                },
              },
            ],
          },
          {
            heading: 'Key topics',
            items: ['Linear regression', 'Logistic regression', 'Neural networks'],
          },
        ],
      }),
      createCourse('Design and Analysis of Computer Algorithms'),
      createCourse('Web Programming Languages'),
      createCourse('Artificial Intelligence'),
      createCourse('Database Design'),
      createCourse('Data Representation'),
      createCourse('Statistical Methods of Data Science'),
      createCourse('Computer Vision'),
    ],
  },
];

export function getCourseBySlug(courseSlug) {
  for (const school of schools) {
    const course = school.courses.find((entry) => entry.slug === courseSlug);

    if (course) {
      return {
        ...course,
        school: {
          year: school.year,
          degree: school.degree,
          name: school.name,
          description: school.description,
        },
      };
    }
  }

  return null;
}
