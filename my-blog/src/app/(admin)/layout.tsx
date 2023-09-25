export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="flex w-full h-full">{children}</div>;
}
