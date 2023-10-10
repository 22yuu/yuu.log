import Hero from '@/components/Hero';
import ToggleDarkModeBtn from '@/components/ToggleDarkModeBtn';
import Login from '@/components/admin/Login';
import Heading from '@/components/ui/atoms/Heading';

export default function page() {
  const user = true;
  const animateSidePanelHidden =
    ' transform -translate-x-full transition-transform ease-in duration-300';

  if (!user) {
    return <Login />;
  }

  return (
    <div className="flex w-full h-full text-theme-text">
      {/* admin side panel */}
      <div className="fixed w-[350px] h-full bg-theme-primary transform -translate-x-full transition-transform ease-in duration-300 md:translate-x-0"></div>
      {/* contents */}
      <div className="w-full px-16 py-8 md:ml-[350px]">
        <div className="flex justify-between mb-8 border border-red-500">
          <Heading size={'xl'}>Dash Board</Heading>
          <div className="flex items-center gap-4">
            <span>Welcome! {user ? 'Admin' : 'Guest'}</span>
            <ToggleDarkModeBtn />
          </div>
        </div>
        <div className="h-[300px] mb-8 border border-red-500"></div>
        <div className="h-[300px] mb-8 border border-red-500"></div>
        <div className="h-[300px] mb-8 border border-red-500"></div>
        <div className="h-[300px] mb-8 border border-red-500"></div>
      </div>
    </div>
  );
}
