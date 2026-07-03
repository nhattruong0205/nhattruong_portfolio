import evangelLogo from '../components/Education/Evangel Logo.png';
import adelphiLogo from '../components/Education/Adelphi.jpg';
import utdallasLogo from '../components/Education/UT dallas.jpg';

export const schools = [
  {
    year: '2017-2020',
    degree: 'High School Diploma',
    name: 'Evangel Christian High School',
    description: 'Long Island City, New York • GPA: 4.0 • Rank: 4',
    logo: evangelLogo,
    courses: ['Biology', 'Chemistry', 'Physics', 'Calculus', 'Statistics', 'Global', 'US History', 'Bible'],
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
    ],
  },
  {
    year: '2024-Present',
    degree: 'Ph.D. Computer Science',
    name: 'University of Texas at Dallas',
    description: 'Richardson, Texas • GPA: 3.8',
    logo: utdallasLogo,
    courses: [
      'Natural Language Processing',
      'Design and Analysis of Computer Algorithms',
      'Web Programming Languages',
      'Artificial Intelligence',
      'Database Design',
      'Data Representation',
      'Statistical Methods of Data Science',
      'Computer Vision',
    ],
  },
];
