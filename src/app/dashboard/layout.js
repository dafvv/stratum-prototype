import { Sidebar, Header } from '@/components/layout/DashboardShell';
import { AlertTicker } from '@/components/layout/AlertTicker';

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen">
      <Sidebar />
      <div className="pl-64 flex flex-col min-h-screen">
        <Header />
        <AlertTicker />
        <main className="flex-1 p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
