import React from 'react';

type Props = {
  tagName: string;
};

export default function Tag({ tagName }: Props) {
  return (
    <div className="flex justify-center items-center text-sm h-3 text-white dark:text-theme-text bg-theme-secondary rounded-lg px-4 py-3">
      {tagName}
    </div>
  );
}
