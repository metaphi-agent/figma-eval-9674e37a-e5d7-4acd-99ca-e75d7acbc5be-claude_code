import { clsx } from 'clsx';
import { ArrowRight, Phone } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'filled' | 'outline' | 'link';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'amber' | 'purple' | 'white' | 'dark';
  iconLeft?: 'phone' | 'none';
  iconRight?: 'arrow' | 'none';
  className?: string;
  onClick?: () => void;
  href?: string;
}

export function Button({
  children,
  variant = 'filled',
  size = 'md',
  color = 'amber',
  iconLeft = 'none',
  iconRight = 'none',
  className,
  onClick,
  href,
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center font-bold rounded-full transition-all duration-150';

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm gap-2',
    md: 'px-4 py-3 text-base gap-2',
    lg: 'px-6 py-4 text-lg gap-2',
    xl: 'px-8 py-5 text-xl gap-3',
  };

  const variantClasses = {
    filled: {
      amber: 'bg-amber-300 text-gray-900 hover:bg-amber-400 shadow-sm hover:shadow-md',
      purple: 'bg-purple-700 text-white hover:bg-purple-800 shadow-sm hover:shadow-md',
      white: 'bg-white text-gray-900 hover:bg-gray-100 shadow-sm hover:shadow-md',
      dark: 'bg-gray-900 text-white hover:bg-gray-800 shadow-sm hover:shadow-md',
    },
    outline: {
      amber: 'border-2 border-amber-300 text-amber-600 hover:bg-amber-50',
      purple: 'border-2 border-purple-700 text-purple-700 hover:bg-purple-50',
      white: 'border-2 border-white text-white hover:bg-white/10',
      dark: 'border-2 border-gray-900 text-gray-900 hover:bg-gray-100',
    },
    link: {
      amber: 'text-amber-600 hover:text-amber-700',
      purple: 'text-purple-700 hover:text-purple-800',
      white: 'text-white hover:text-gray-200',
      dark: 'text-gray-900 hover:text-gray-700',
    },
  };

  const iconSize = {
    sm: 16,
    md: 20,
    lg: 24,
    xl: 28,
  };

  const classes = clsx(
    baseClasses,
    sizeClasses[size],
    variantClasses[variant][color],
    className
  );

  const content = (
    <>
      {iconLeft === 'phone' && <Phone size={iconSize[size]} />}
      {children}
      {iconRight === 'arrow' && <ArrowRight size={iconSize[size]} />}
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
