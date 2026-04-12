import { type AnchorHTMLAttributes, type ButtonHTMLAttributes, type ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

type ButtonVariant = 'primary' | 'outline' | 'text';

type ButtonProps = {
  variant?: ButtonVariant;
  children: ReactNode;
  className?: string;
  showArrow?: boolean;
  to?: string;
} & ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorHTMLAttributes<HTMLAnchorElement>;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-accent-green text-white px-8 py-4 font-bold text-sm tracking-wide rounded-sm hover:bg-accent-green-hover transition-colors',
  outline:
    'inline-flex items-center rounded-full border px-6 py-2 text-sm font-semibold tracking-wide transition-colors border-foreground/20 text-foreground dark:text-dark-foreground dark:border-dark-foreground/20 hover:border-foreground hover:bg-foreground hover:text-dark-foreground dark:hover:border-dark-foreground dark:hover:bg-dark-foreground dark:hover:text-foreground',
  text:
    'inline-flex items-center gap-2 font-bold border-b pb-1 transition-colors border-black text-black dark:text-white dark:border-white hover:text-accent-brown hover:border-accent-brown dark:hover:text-accent-brown dark:hover:border-accent-brown'
};

export default function Button({
  variant = 'primary',
  children,
  className = '',
  showArrow,
  to,
  href,
  ...props
}: ButtonProps) {
  const withArrow = showArrow ?? variant === 'text';
  const classes = `${variantStyles[variant]} ${className}`.trim();

  if (to) {
    return (
      <Link className={classes} to={to} {...props}>
        {children}
        {withArrow && <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />}
      </Link>
    );
  }

  if (href) {
    return (
      <a className={classes} href={href} {...props}>
        {children}
        {withArrow && <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
      {withArrow && <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />}
    </button>
  );
}
