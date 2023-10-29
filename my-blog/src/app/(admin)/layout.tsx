import Login from '@/components/admin/Login';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = false;

  if (!user) {
    return <Login />;
  }

  return <AdminLayout>{children}</AdminLayout>;
}
