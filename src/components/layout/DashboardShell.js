'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Zap, Wrench, BarChart2, ShieldCheck, LogOut, Bell, Search } from 'lucide-react';
import { Logo } from '@/components/ui/Logo';

export function Sidebar() {
  const pathname = usePathname();
  
  const navItems = [
    { name: 'Overview', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Optimasi Energi', href: '/dashboard/energy', icon: Zap },
    { name: 'Prediksi Perawatan', href: '/dashboard/maintenance', icon: Wrench },
    { name: 'Analitik Produksi', href: '/dashboard/production', icon: BarChart2 },
    { name: 'Compliance AI', href: '/dashboard/compliance', icon: ShieldCheck },
  ];

  return (
    <div className="w-64 h-screen bg-white border-r border-gray-100 flex flex-col fixed left-0 top-0 z-20">
      <div className="p-6 h-20 flex items-center mb-4">
        <h1 className="text-2xl font-black tracking-widest text-stratum-main flex items-center gap-2">
          <Logo className="w-8 h-8" />
          STRATUM
        </h1>
      </div>
      
      <div className="p-4 flex-1">
        <div className="text-xs uppercase text-[var(--text-muted)] font-semibold tracking-wider mb-4 px-2">
          Modules
        </div>
        <nav className="space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link 
                key={item.name} 
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 text-sm font-semibold transition-all duration-300 relative ${
                  isActive 
                    ? 'text-stratum-main bg-gray-50' 
                    : 'text-gray-400 hover:bg-gray-50 hover:text-stratum-main'
                }`}
              >
                {isActive && <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-stratum-main rounded-r-full"></div>}
                <item.icon className="w-5 h-5" />
                {item.name}
              </Link>
            )
          })}
        </nav>
      </div>

      <div className="p-4 mt-auto mb-4">
        <Link href="/" className="flex items-center gap-3 px-4 py-3 text-sm font-semibold text-gray-400 hover:text-stratum-main hover:bg-gray-50 rounded-lg transition-colors">
          <LogOut className="w-5 h-5" />
          Logout
        </Link>
      </div>
    </div>
  );
}

export function Header() {
  return (
    <header className="h-20 bg-white border-b border-gray-100 sticky top-0 z-10 px-8 flex items-center justify-between">
      <div className="flex-1 max-w-xl">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search equipment, anomalies, or modules... (Press ⌘K)"
            className="block w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-full text-stratum-main placeholder-gray-400 focus:outline-none focus:border-stratum-main focus:ring-1 focus:ring-stratum-main sm:text-sm shadow-sm"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <button className="relative p-2.5 text-gray-400 hover:text-stratum-main transition-colors rounded-full hover:bg-white bg-transparent border border-gray-200 shadow-sm">
            <Bell className="w-5 h-5" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-status-critical rounded-full animate-pulse border-2 border-white"></span>
          </button>
        </div>
        <div className="flex items-center gap-3 bg-white pl-2 pr-4 py-1.5 rounded-full border border-gray-200 shadow-sm cursor-pointer hover:bg-gray-50 transition-colors">
          <div className="w-9 h-9 rounded-full bg-stratum-main text-white flex items-center justify-center font-bold text-sm">
            SA
          </div>
          <div className="hidden md:block">
            <p className="text-sm font-bold text-stratum-main leading-tight">Super Admin</p>
            <p className="text-[11px] font-semibold text-gray-400 leading-tight">PT Demo FnB Bogor</p>
          </div>
        </div>
      </div>
    </header>
  );
}
