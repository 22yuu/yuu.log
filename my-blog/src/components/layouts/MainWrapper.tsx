import Footer from '@/components/layouts/Footer';
import Header from '@/components/layouts/Header';
import Link from 'next/link';

export default function MainWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col w-full h-full md:ml-[350px] text-slate-600">
      <Header />
      <main className="flex-1 max-w-7xl w-full mx-auto px-6  mt-12">
        <div className="flex mt-6">
          <div className="max-w-5xl w-full px-2">{children}</div>
          <div className="hidden flex-col lg:flex max-w-[300px] w-full px-2 pt-6">
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
          </div>
        </div>
      </main>
      <Footer />
    </section>
  );
}
