import Link from 'next/link';
import Calendar from './Calendar';

export default function ContentSidePanel() {
  return (
    <div className="hidden fixed top-24 flex-col w-[300px] h-screen px-8 pt-6 right-12 lg:flex max-w-[300px] ">
      <div className="flex flex-1 flex-col w-full h-full">
        <div className="flex flex-col w-full text-theme-text border-l-2 border-l-theme-text pl-4">
          <h2 className="font-semibold ">Recently Posts</h2>
          <ul className="text-sm">
            <li className="my-2">
              <Link href="#">this is post hehe</Link>
            </li>
            <li className="my-2">
              <Link href="#">this is post hehe</Link>
            </li>
            <li className="my-2">
              <Link href="#">this is post hehe</Link>
            </li>
            <li className="my-2">
              <Link href="#">this is post hehe</Link>
            </li>
            <li className="my-2">
              <Link href="#">this is post hehe</Link>
            </li>
          </ul>
        </div>
        <Calendar />
      </div>
    </div>
  );
}
