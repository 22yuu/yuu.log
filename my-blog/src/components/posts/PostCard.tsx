import React from 'react';
import CalendarIcon from '../ui/icons/CalendarIcon';
import CategoryIcon from '../ui/icons/CategoryIcon';
import Link from 'next/link';
import Tag from '../ui/Tag';
import Heading from '../ui/atoms/Heading';
import { Post } from '@/types/posts';

type Props = { post: Post };

export default function PostCard({
  post: { _id, title, body, thumbnail, category, subCategory, tags, updatedAt },
}: Props) {
  return (
    <Link href={`/posts/${_id}`}>
      <article className="w-full h-40 text-theme-text mb-8">
        <Heading size={'lg'}>
          <Link href="#">{title}</Link>
        </Heading>
        <p className="my-2 text-ellipsis overflow-hidden line-clamp-2">
          {body}
        </p>
        <div className="flex flex-wrap gap-2 mb-2">
          {tags.map((tag, index) => (
            <Tag key={index} tagName={tag} />
          ))}
        </div>
        <div className="flex gap-4 text-sm">
          <div className="flex items-center gap-2">
            <CalendarIcon className="w-4 h-4" />
            <span>{updatedAt.toString()}</span>
          </div>
          <div className="flex items-center gap-2">
            <CategoryIcon className="w-4 h-4" />
            <span>{`${category}, ${subCategory}`}</span>
          </div>
        </div>
      </article>
    </Link>
  );
}
