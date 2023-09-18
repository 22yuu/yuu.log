import Footer from '@/components/layouts/Footer';
import Header from '@/components/layouts/Header';

export default function MainWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col w-full h-full md:ml-[350px] text-slate-600">
      <Header />
      <main className="flex flex-1 max-w-7xl w-full mx-auto px-6  mt-12">
        <div className="max-w-5xl w-full px-2">{children}</div>
        <div className="hidden lg:block max-w-[300px] w-full px-2">
          오른쪽 패널
        </div>
      </main>
      <Footer />
    </section>
  );
}
