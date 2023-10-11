import React from 'react';
import CalendarIcon from '../ui/icons/CalendarIcon';
import CategoryIcon from '../ui/icons/CategoryIcon';
import Link from 'next/link';

export default function PostCard() {
  return (
    <div className="w-full h-40 pt-6 pb-4 text-theme-text mb-4">
      <h2 className="font-semibold text-xl">
        <Link href="#">This is title...!</Link>
      </h2>
      <p className="my-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ipsam
        earum, ab cupiditate voluptatum, eligendi beatae suscipit provident
        commodi quisquam voluptas consequuntur eum doloremque repellendus, quo
        ducimus quis asperiores aspernatur?
      </p>
      <div className="flex flex-wrap gap-2 mb-2">
        <div className="flex justify-center items-center text-sm h-3 text-theme-text bg-theme-primary rounded-lg px-4 py-3">
          JavaScript
        </div>
        <div className="flex justify-center items-center text-sm h-3 text-theme-text bg-theme-primary rounded-lg px-4 py-3">
          React
        </div>
        <div className="flex justify-center items-center text-sm h-3 text-theme-text bg-theme-primary rounded-lg px-4 py-3">
          JS
        </div>
      </div>
      <div className="flex gap-4 text-sm">
        <div className="flex items-center gap-2">
          <CalendarIcon className="w-4 h-4" />
          <span>2023-09-22</span>
        </div>
        <div className="flex items-center gap-2">
          <CategoryIcon className="w-4 h-4" />
          <span>FE, NextJS</span>
        </div>
      </div>
    </div>
  );
}
