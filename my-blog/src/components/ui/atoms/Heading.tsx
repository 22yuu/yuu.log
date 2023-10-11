import cn from '@/utils/cn';
import { cva, VariantProps } from 'class-variance-authority';
import { HTMLAttributes } from 'react';

const variants = cva(
  `font-semibold smooth duration-300 transition-all text-theme-text`,
  {
    variants: {
      size: {
        default: 'text-base',
        sm: 'text-sm',
        md: 'text-lg',
        lg: 'text-xl',
        xl: 'text-2xl',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  }
);

interface HeadingProps
  extends HTMLAttributes<HTMLHeadElement>,
    VariantProps<typeof variants> {
  children: React.ReactNode;
  className?: string;
}

export default function Heading({
  children,
  size,
  className,
  ...attributes
}: HeadingProps) {
  return (
    <h2 className={cn(variants({ size }), className)} {...attributes}>
      {children}
    </h2>
  );
}
