import Login from '@/components/admin/Login';

export default function page() {
  const user = false;

  return <>{!user ? <Login /> : <p>Admin Page</p>}</>;
}
