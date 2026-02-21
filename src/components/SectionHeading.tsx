interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeading({ label, title, description, centered = false, className = "" }: SectionHeadingProps) {
  return (
    <div className={`${centered ? "text-center" : ""} ${className}`}>
      {label && (
        <span className="block text-sm font-sans font-medium text-slate tracking-widest uppercase mb-3">
          {label}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl font-serif font-semibold text-navy ${centered ? "line-accent-center" : "line-accent"}`}>
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-gray-600 text-lg leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}
