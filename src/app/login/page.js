'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Lock, Mail, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Logo } from '@/components/ui/Logo';

export default function LoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Mock authentication delay
    setTimeout(() => {
      // Set mock session flag in localStorage
      localStorage.setItem('stratum_session', 'superadmin_active');
      router.push('/dashboard');
    }, 800);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[#F4F7F6] -z-20"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-stratum-surface opacity-10 blur-[100px] -z-10"></div>
      
      <div className="w-full max-w-md">
        <div className="text-center mb-8 flex flex-col items-center">
          <Logo className="w-16 h-16 mb-4" />
          <h1 className="text-4xl font-black tracking-widest text-gradient mb-2">STRATUM</h1>
          <p className="text-stratum-surface font-semibold tracking-wide text-sm uppercase">Industrial Control Access</p>
        </div>

        <Card className="p-8">
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-stratum-main mb-2">
                Operator ID / Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  defaultValue="superadmin@stratum.id"
                  className="block w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-stratum-main placeholder-gray-400 focus:outline-none focus:border-stratum-main focus:ring-1 focus:ring-stratum-main sm:text-sm transition-all"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-stratum-main mb-2">
                Access Passcode
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="password"
                  defaultValue="admin18000"
                  className="block w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-stratum-main placeholder-gray-400 focus:outline-none focus:border-stratum-main focus:ring-1 focus:ring-stratum-main sm:text-sm transition-all"
                  required
                />
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex items-center justify-center gap-2 px-4 py-4 rounded-xl shadow-md text-sm font-bold tracking-wide text-white bg-stratum-main hover:bg-[#11322e] focus:outline-none transition-all transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <>
                    Initialize Session
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
            
            <div className="text-center mt-6">
              <p className="text-xs text-status-normal font-mono font-bold flex items-center justify-center gap-1.5 bg-status-normal/10 inline-flex px-3 py-1 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-status-normal animate-pulse"></span>
                Bypass Demo Mode Active
              </p>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
}
