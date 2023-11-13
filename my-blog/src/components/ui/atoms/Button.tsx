import cn from '@/utils/cn';
import { cva, VariantProps } from 'class-variance-authority';
import { HTMLAttributes } from 'react';

const ButtonVariants = cva(
  `w-full flex items-center justify-center gap-2 border border-zinc-500 rounded-xl bg-theme-secondary dark:bg-theme-primary text-white dark:text-theme-text py-2`,
  {
    variants: {
      color: {
        default: 'text-base',
      },
    },
    defaultVariants: {
      color: 'default',
    },
  }
);

interface ButtonProps
  extends HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ButtonVariants> {
  children: React.ReactNode;
}
export default function Button({
  children,
  className,
  color,
  ...attributes
}: ButtonProps) {
  return (
    <button
      className={cn(ButtonVariants({ color }), className)}
      {...attributes}
    ></button>
  );
}
