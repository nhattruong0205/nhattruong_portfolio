import { useState } from 'react';
import evangelLogo from './Evangel Logo.png';
import adelphiLogo from './Adelphi.jpg';
import utdallasLogo from './UT dallas.jpg';

const schools = [
  {
    year: '2017-2020',
    degree: 'High School Diploma',
    name: 'Evangel Christian High School',
    description: 'Long Island City, New York • GPA: 4.0 • Rank: 4',
    logo: evangelLogo,  
    courses: ["Biology", "Chemistry", "Physics", "Calculus", "Statistics", "Global", "US History", "Bible"],
  },
  {
    year: '2020-2024',
    degree: 'B.S. Computer Science',
    name: 'Adelphi University, Honor College',
    description: 'Garden City, New York • GPA: 3.97 • Summa Cum Laude',
    logo: adelphiLogo,
    courses: ['Introduction to Machine Learning','Survey of Programming Languages','Data Structures','Operating System Practicum', 'Algorithms and Complexity', 'Software Engineering', 'Computer Architecture and Organization', 'Web Programming','Computer Networks', 'Operating Systems'],
  },
  {
    year: '2024-Present',
    degree: 'Ph.D. Computer Science',
    name: 'University of Texas at Dallas',
    description: 'Richardson, Texas • GPA: 3.8',
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

      <div className="space-y-6">
        {schools.map((school, index) => {
          const isOpen = openIndex === index;
          const isLastItem = index === schools.length - 1;
          return (
            <div key={school.name} className="grid grid-cols-1 gap-3 md:grid-cols-[190px_1fr] md:gap-6">
              <div className="space-y-1 md:pt-5 md:text-right">
                <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">{school.year}</p>
                <p className="text-sm text-gray-700">{school.degree}</p>
              </div>

              <div className={`relative border-l-2 border-gray-200 pl-8 ${isLastItem ? '' : 'pb-2'}`}>
                <span
                  className="absolute -left-[9px] top-6 inline-flex h-4 w-4 items-center justify-center rounded-full border-2 border-white bg-blue-500 shadow"
                  aria-hidden="true"
                />
                <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                  <div className="flex items-start justify-between gap-3 p-5 text-left">
                    <div className="space-y-1">
                      <p className="text-lg font-semibold">{school.name}</p>
                      <p className="text-sm text-gray-600">{school.description}</p>
                    </div>
                    <div className="flex shrink-0 items-center">
                      <img src={school.logo} alt={`${school.name} logo`} className="h-14 w-14 object-contain" />
                    </div>
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

                  <div className="border-t border-gray-200 bg-white px-5 py-3">
                    <div className="flex justify-center">
                      <button
                        type="button"
                        onClick={() => setOpenIndex(isOpen ? null : index)}
                        aria-expanded={isOpen}
                        className="inline-flex rounded-md border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700 hover:bg-blue-100"
                      >
                        {isOpen ? 'Hide courses' : 'View courses'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Education;
