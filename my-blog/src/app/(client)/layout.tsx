import SideMenuPanel from '@/components/SideMenuPanel';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="w-full h-full flex">
        <SideMenuPanel />
        {children}
      </div>
    </>
  );
}
