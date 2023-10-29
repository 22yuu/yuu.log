import { ReactNode } from 'react';
import AdminSidePanel from './AdminSidePanel';

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex w-full h-full">
      <div className="flex w-full h-full text-theme-text">
        {/* admin side panel */}
        <AdminSidePanel />
        {/* contents */}
        {children}
      </div>
    </div>
  );
}
