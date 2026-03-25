interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  eyebrowClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  className = '',
  eyebrowClassName = '',
  titleClassName = '',
  descriptionClassName = '',
}: SectionHeadingProps) {
  return (
    <div className={`text-center ${className}`.trim()}>
      {eyebrow ? (
        <span
          className={`inline-block rounded-full px-4 py-1 text-sm font-bold uppercase tracking-widest shadow-sm ${eyebrowClassName}`.trim()}
        >
          {eyebrow}
        </span>
      ) : null}
      <h2 className={`text-brand-text font-extrabold tracking-tight ${titleClassName}`.trim()}>{title}</h2>
      {description ? (
        <p className={`text-brand-text/70 ${descriptionClassName}`.trim()}>{description}</p>
      ) : null}
    </div>
  );
}
