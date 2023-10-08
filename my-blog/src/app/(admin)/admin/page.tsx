import Login from '@/components/admin/Login';

export default function page() {
  const user = true;

  if (!user) {
    return <Login />;
  }

  return (
    <div className="flex text-theme-text">
      {/* admin side panel */}
      <div className="w-[200px] h-full bg-theme-primary"></div>
      <p>Admin Page</p>
    </div>
  );
}
