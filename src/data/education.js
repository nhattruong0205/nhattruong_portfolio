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
              {
                type: 'text',
                content:'Language and Classification Models',
              },
              {
                type: 'table',
                table:{
                  columns: ['Model', 'Brief Description', 'Pros and Cons', 'Usage and Avoid', 'Examples'],
                  rows: [
                    [
                      'N-gram Language Models',
                      'Uses the Markov assumption to predict the probability of a word based on the previous n−1 words',
                      `Pros: Simple to implement and captures local fluency effectively; can be improved with smoothing techniques
                      Cons: Fails to capture long-range dependencies; larger n-grams suffer from sparsity and overfitting`,
                      `Usage: Autocomplete, spelling correction, and as a component in Noisy Channel models for Machine Translation
                      Avoid: When the task requires understanding context beyond a few words or when training data is extremely limited`,
                      'Autocomplete: Predicting the next word in a sequence like "I love computer..."'
                    ],
                    [
                      'Naive Bayes (Generative)',
                      'Calculates class probability by assuming all features are independent given the class',
                      `Pros: Very fast and easy to train; serves as a strong, simple baseline for many tasks
                      Cons: Makes a "naive" independence assumption between features that is often untrue in real-world language`,
                      `Usage: Quick baselines for sentiment analysis, topic modeling, or spam detection
                      Avoid: When high accuracy is the priority and features are likely to be highly dependent on one another`,
                      'Sentiment Analysis: Deciding if a movie review is positive or negative based on a "bag of words" (unigram counts)'
                    ],
                    [
                      'Logistic Regression (Discriminative)',
                      'Directly estimates $p(c|d)$ using a sigmoid (binary) or softmax (multi-class) function over a weighted sum of features',
                      `Pros: Often more accurate than Naive Bayes; handles feature dependencies better by directly estimating p(c∣d)
                      Cons: Slower to train (requires iterative gradient descent); performance is heavily dependent on manual feature engineering`,
                      `Usage: Sentiment analysis, sarcasm detection, and subjectivity classification
                      Avoid: When you need an "instant" training time or a model that doesn't require complex parameter tuning`,
                      'Subjectivity Classification: determining if a document is "neutral" versus "subjective" (positive or negative)'
                    ]
                  ],
                },  
              },
              {
                type: 'text',
                content: 'Sequence Labeling Models',
              },
              {
                type: 'table',
                table: {
                  columns: ['Model', 'Brief Description', 'Pros and Cons', 'Usage and Avoid', 'Examples'],
                  rows: [
                    [
                      'Hidden Markov Models (HMMs)',
                      'A generative model that uses a hidden sequence of states to "emit" observed words; decoded via the Viterbi algorithm',
                      `Pros: Simple to train using maximum likelihood estimation and efficient to decode
                      Cons: Hard to add rich features (like suffixes) and assumes word/tag probabilities are independent`,
                      `Usage: Simple sequence labeling tasks like Part-of-Speech (POS) tagging or speech recognition
                      Avoid: When you need to include multiple overlapping features like context words, capitalization, and suffixes`,
                      'Part-of-Speech (POS) Tagging: Identifying that "back" is a verb in "Senators back the bill" but a noun in "the back yard"',
                    ],
                    [
                      'Maximum Entropy Markov Model (MEMM)',
                      'A discriminative sequence model (sequence version of logistic regression) that predicts tags based on current words and previous tags',
                      `Pros: Easy to include rich features (suffixes, prefixes, context)
                      Cons: Can suffer from label bias due to its left-to-right nature`,
                      `Usage: Feature-rich sequence tagging, such as Named Entity Recognition (NER)
                      Avoid: When bidirectional influence is critical for disambiguation (e.g., words like "will" in "will to fight")`,
                      'IOB Tagging: Named Entity Recognition (NER) to identify "Wall Street" as a location using word/tag features'
                    ],
                    [
                      'Cyclic Dependency Network',
                      'A bidirectional model that explicitly models influence from both preceding and following tags in a sequence',
                      `Pros: Bidirectional; explicitly models influence from both preceding and following tags for higher accuracy
                      Cons: Exact decoding is not possible; relies on approximation or finding the highest scoring sequence`,
                      `Usage: Achieving state-of-the-art results in POS tagging where context is ambiguous
                      Priority: When speed and exact mathematical probability are prioritized over maximum accuracy`,
                      'Disambiguation: Correctly tagging "will" in "will to fight" by looking at the following "to"'
                    ]
                  ],     
                },
              },
              {
                type: 'text',
                content: 'Parsing Models',
              },
              {
                type: 'table',
                table: {
                  columns: ['Model', 'Brief Description', 'Pros and Cons', 'Usage and Avoid', 'Examples'],
                  rows: [
                    [
                      'Probabilistic CFG (PCFG)',
                      'Assigns probabilities to Context-Free Grammar rules; uses the CKY algorithm for decoding',
                      `Pros: Resolves structural ambiguity by finding the most probable parse tree; relatively fast (O(n ^3))
                      Cons: Assumes rule independence; ignores specific words, leading to poor attachment decisions`,
                      `Usage: Basic constituent parsing where identifying overall phrase structure is the main goal
                      Avoid: Tasks requiring high accuracy on prepositional phrase (PP) attachments or coordination (CC)`,
                      'PP Attachment: Deciding if "in my pajamas" refers to "I" or "elephant" in "I shot an elephant in my pajamas"'
                    ],
                    [
                      'Lexicalized PCFG',
                      'Annotates non-terminals with lexical heads (the main meaning-bearing word) to make parsing word-dependent',
                      `Pros: Significantly higher accuracy (88% vs 74%) by using "lexical heads" to inform parsing decisions
                      Cons: Massive increase in rules; significantly slower runtime (O(n^5) vs O(n^3))`,
                      `Usage: Use when high parsing accuracy is required for complex structures like prepositional phrases and coordination
                      Avoid: Avoid in real-time or high-throughput systems; runtime increases from O(n^3) to O(n^5) due to the explosion of rules`,
                      'Complex Attachment: Recognizing that "dumped" is a more likely head for "into a bin" than the noun "sacks"'
                    ],
                    [
                      'Transition-Based Dependency Parsing',
                      'Uses a shift-reduce mechanism with a classifier to build dependency trees step-by-step',
                      `Pros: Fast and greedy; builds trees step-by-step using a shift-reduce mechanism (O(n) runtime)
                      Cons: Usually limited to projective trees; makes locally optimal choices that can lead to early errors`,
                      `Usage: When parsing speed is critical and the language is mostly projective, such as English
                      Avoid: Morphologically rich languages with flexible word orders (non-projective), like Czech or Hindi`,
                      'Speed-Prioritized Parsing: Quickly identifying that "the" is a dependent of "cat" in "the cat sat"'
                    ],
                    [
                      'Graph-Based Dependency Parsing',
                      'Searches for the globally optimal parse by finding the Maximum Spanning Tree (MST) using the Chu-Liu-Edmonds algorithm',
                      `Pros: Finds the globally optimal parse; effectively handles non-projective trees (crossing arcs)
                      Cons: Slow and exhaustive search compared to transition-based methods (O(n^3) runtime)`,
                      `Usage: High-accuracy requirements or for non-projective languages where crossing dependencies are common
                      Avoid: High-throughput systems where processing speed is more important than global optimality`,
                      'Non-projective Languages: Parsing languages with flexible word order, such as Czech, Hindi, or Finnish'
                    ]

                  ]
                }
              }
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
