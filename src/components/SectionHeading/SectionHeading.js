function SectionHeading({ eyebrow, title, description, children }) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-4">
      <div className="space-y-2">
        {eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-600">{eyebrow}</p>
        ) : null}
        <h2 className="text-3xl font-bold tracking-tight text-gray-900">{title}</h2>
        {description ? <p className="max-w-2xl text-gray-600">{description}</p> : null}
      </div>
      {children}
    </div>
  );
}

export default SectionHeading;
