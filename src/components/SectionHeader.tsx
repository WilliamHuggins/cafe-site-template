import { ReactNode } from 'react';

type SectionHeaderProps = {
  label?: string;
  title: ReactNode;
  emphasis?: string;
  description?: ReactNode;
  align?: 'left' | 'center';
  className?: string;
  labelClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
};

export default function SectionHeader({
  label,
  title,
  emphasis,
  description,
  align = 'left',
  className = '',
  labelClassName = '',
  titleClassName = '',
  descriptionClassName = ''
}: SectionHeaderProps) {
  const alignmentClass = align === 'center' ? 'text-center' : 'text-left';

  return (
    <div className={`${alignmentClass} ${className}`.trim()}>
      {label && (
        <span className={`uppercase tracking-[0.2em] text-xs font-bold text-accent-brown dark:text-accent-green mb-6 block ${labelClassName}`.trim()}>
          {label}
        </span>
      )}
      <h2 className={`font-serif font-normal text-4xl md:text-5xl lg:text-6xl text-black dark:text-white leading-[1.1] mb-8 ${titleClassName}`.trim()}>
        {title}
        {emphasis && <em className="italic text-accent-green"> {emphasis}</em>}
      </h2>
      {description && (
        <p className={`text-secondary-text dark:text-dark-secondary-text text-lg leading-relaxed ${descriptionClassName}`.trim()}>
          {description}
        </p>
      )}
    </div>
  );
}
