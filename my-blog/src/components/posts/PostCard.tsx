import React from 'react';
import CalendarIcon from '../ui/icons/CalendarIcon';
import CategoryIcon from '../ui/icons/CategoryIcon';
import Link from 'next/link';
import Tag from '../ui/Tag';
import Heading from '../ui/atoms/Heading';

export default function PostCard() {
  return (
    <div className="w-full h-40 text-theme-text mb-8">
      <Heading size={'lg'}>
        <Link href="#">This is title...!</Link>
      </Heading>
      <p className="my-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ipsam
        earum, ab cupiditate voluptatum, eligendi beatae suscipit provident
        commodi quisquam voluptas consequuntur eum doloremque repellendus, quo
        ducimus quis asperiores aspernatur?
      </p>
      <div className="flex flex-wrap gap-2 mb-2">
        <Tag tagName="JavaScript" />
        <Tag tagName="React" />
        <Tag tagName="JS" />
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
