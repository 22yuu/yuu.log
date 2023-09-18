import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="flex max-w-7xl w-full h-20 border-t border-t-zinc-100 mx-auto items-center justify-center text-zinc-300">
      Copyright &copy; {new Date().getFullYear()} &nbsp;
      <Link
        href="https://github.com/22yuu"
        target="_blank"
        className="text-blue-400"
      >
        22yuu
      </Link>
      . All Rights Reserved.
    </footer>
  );
}
