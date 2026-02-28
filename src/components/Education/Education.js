import { useState } from 'react';
import evangelLogo from './Evangel Logo.png';
import adelphiLogo from './Adelphi.jpg';
import utdallasLogo from './UT dallas.jpg';

const schools = [
  {
    name: 'Evangel Christian Highschool',
    location: 'Long Island City, New York',
    period: '2017-2020 • GPA: 4.0',
    logo: evangelLogo,  
    courses: ["Biology", "Chemistry", "Physics", "Calculus", "Statistics", "Global", "US History", "Bible"],
  },
  {
    name: 'Adelphi University, Honor College',
    location: 'Garden City, New York',
    period: '2020-2024 • GPA: 3.97',
    logo: adelphiLogo,
    courses: ['Introduction to Machine Learning','Survey of Programming Languages','Data Structures','Operating System Practicum', 'Algorithms and Complexity', 'Software Engineering', 'Computer Architecture and Organization', 'Web Programming','Computer Networks', 'Operating Systems'],
  },
  {
    name: 'University of Texas at Dallas',
    location: 'Richardson, Texas',
    period: '2024-Present • GPA: 3.8',
    logo: utdallasLogo,
    courses: ['Machine Learning', 'Design and Analysis of Computer Algorithms', 'Web Programming Languages','Artificial Intelligence', 'Database Design', 'Data Representation', 'Statistical Methods of Data Science', 'Natural Language Processing', 'Computer Vision'],
  },
];

function Education() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="education" className="px-6 py-12 space-y-6 max-w-4xl mx-auto">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Education</h2>
        <p className="text-gray-600">Academic background and highlights.</p>
      </div>

      {schools.map((school, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={school.name}
            className="rounded-xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <div
              className="flex cursor-pointer items-center justify-between p-5"
              role="button"
              tabIndex={0}
              onClick={() => setOpenIndex(isOpen ? null : index)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  setOpenIndex(isOpen ? null : index);
                }
              }}
            >
              <div className="flex flex-col gap-1">
                <p className="text-lg font-semibold">{school.name}</p>
                <p className="text-gray-600">{school.location}</p>
                <p className="text-gray-600">{school.period}</p>
              </div>
              <img src={school.logo} alt={`${school.name} logo`} className="h-14 w-14 object-contain" />
            </div>

            {isOpen && (
              <div className="border-t border-gray-200 bg-gray-50 px-5 py-4">
                <p className="text-sm font-semibold text-gray-700">Courses</p>
                <ul className="mt-2 grid grid-cols-1 gap-x-6 gap-y-1 list-disc list-inside text-sm text-gray-600 sm:grid-cols-2">
                  {school.courses.map((course) => (
                    <li key={course}>{course}</li>
                  ))}
                </ul>
              </div>
            )}
            <div className="flex justify-center pb-4">
              <span
                className={`inline-flex h-6 w-6 items-center justify-center rounded-full border border-gray-300 bg-white text-2xl text-gray-500 shadow-sm transition-transform ${isOpen ? 'rotate-180' : ''}`}
                aria-hidden="true"
              >
                ▾
              </span>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default Education;
