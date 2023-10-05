import Login from '@/components/admin/Login';

export default function page() {
  const user = undefined;

  return <>{!user ? <Login /> : <p>Admin Page</p>}</>;
}
