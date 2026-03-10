import { Link, useParams } from 'react-router-dom';
import { getCourseBySlug } from '../../data/education';

function formatMultilineText(value) {
  if (typeof value !== 'string') {
    return value;
  }

  const lines = value.replace(/\r\n/g, '\n').split('\n');

  while (lines.length > 0 && lines[0].trim() === '') {
    lines.shift();
  }

  while (lines.length > 0 && lines[lines.length - 1].trim() === '') {
    lines.pop();
  }

  const indentationLevels = lines
    .filter((line) => line.trim().length > 0)
    .map((line) => line.match(/^ */)[0].length);

  const minIndent = indentationLevels.length > 0 ? Math.min(...indentationLevels) : 0;

  return lines.map((line) => line.slice(minIndent)).join('\n');
}

function renderTable(table, keyPrefix) {
  return (
    <div className="mt-4 overflow-x-auto rounded-xl border border-gray-200">
      <table className="min-w-full divide-y divide-gray-200 text-left text-sm text-gray-700">
        <thead className="bg-gray-50">
          <tr>
            {table.columns.map((column) => (
              <th key={`${keyPrefix}-${column}`} scope="col" className="px-4 py-3 font-semibold text-gray-900">
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {table.rows.map((row, rowIndex) => (
            <tr key={`${keyPrefix}-row-${rowIndex}`}>
              {row.map((cell, cellIndex) => (
                <td key={`${keyPrefix}-${rowIndex}-${cellIndex}`} className="px-4 py-3 align-top">
                  <span className="whitespace-pre-line">{formatMultilineText(cell)}</span>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function renderItems(items, keyPrefix) {
  return (
    <ul className="mt-3 space-y-2 text-gray-700">
      {items.map((item, index) => (
        <li key={`${keyPrefix}-${index}`} className="flex gap-2">
          <span className="mt-[7px] h-2 w-2 shrink-0 rounded-full bg-blue-500" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function renderSectionBlocks(section) {
  if (section.blocks) {
    return section.blocks.map((block, index) => {
      const keyPrefix = `${section.heading}-${index}`;

      if (block.type === 'table') {
        return <div key={keyPrefix}>{renderTable(block.table, keyPrefix)}</div>;
      }

      if (block.type === 'list') {
        return <div key={keyPrefix}>{renderItems(block.items, keyPrefix)}</div>;
      }

      return (
        <p key={keyPrefix} className="mt-3 whitespace-pre-line text-gray-700">
          {formatMultilineText(block.content)}
        </p>
      );
    });
  }

  return (
    <>
      {section.content ? (
        <p className="mt-3 whitespace-pre-line text-gray-700">
          {formatMultilineText(section.content)}
        </p>
      ) : null}
      {section.items ? renderItems(section.items, section.heading) : null}
      {section.table ? renderTable(section.table, section.heading) : null}
    </>
  );
}

function CourseNotesDetail() {
  const { courseSlug } = useParams();
  const course = getCourseBySlug(courseSlug);

  if (!course) {
    return (
      <main className="max-w-4xl mx-auto space-y-4 px-6 py-20">
        <h1 className="text-2xl font-bold">Course not found</h1>
        <p className="text-gray-600">The notes page you requested does not exist.</p>
        <Link
          to="/#education"
          className="inline-flex rounded-md bg-gray-900 px-4 py-2 text-sm font-semibold text-white"
        >
          Back to Education
        </Link>
      </main>
    );
  }

  return (
    <main className="max-w-4xl mx-auto space-y-8 px-6 py-20">
      <div className="space-y-3">
        <Link to="/#education" className="text-sm font-medium text-blue-600 hover:text-blue-700">
          ← Back to Education
        </Link>
        <div className="flex flex-wrap items-center gap-3">
          <h1 className="text-3xl font-bold">{course.title}</h1>
          <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
            {course.school.degree} • {course.school.year}
          </span>
        </div>
        <p className="text-lg text-gray-700">{course.school.name}</p>
        <p className="text-gray-600">{course.summary}</p>
      </div>

      <div className="space-y-4">
        {course.sections.map((section) => (
          <section key={section.heading} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900">{section.heading}</h2>
            {renderSectionBlocks(section)}
          </section>
        ))}
      </div>
    </main>
  );
}

export default CourseNotesDetail;
