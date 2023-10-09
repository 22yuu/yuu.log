import Link from "next/link";
import Calendar from "./Calendar";

export default function ContentSidePanel() {
  return (
    <div className="hidden flex-col right-0 lg:flex max-w-[300px] w-full px-8 pt-6">
      <div className="sticky top-24">
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
