'use client';

import { AlertTriangle, AlertCircle, Info } from 'lucide-react';
import { useEffect, useState } from 'react';

const mockAlerts = [
  { id: 1, type: 'critical', text: 'T-12h Prediksi Kegagalan: Chiller A (Cold Chain)' },
  { id: 2, type: 'warning', text: 'Power Spike Terdeteksi: +30% konsumsi arus di luar jam puncak (Chiller A)' },
  { id: 3, type: 'info', text: 'Laporan HACCP harian berhasil di-generate secara otomatis' },
];

export function AlertTicker() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % mockAlerts.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const currentAlert = mockAlerts[currentIndex];

  const getIcon = (type) => {
    switch(type) {
      case 'critical': return <AlertTriangle className="w-4 h-4 text-[var(--status-critical)]" />;
      case 'warning': return <AlertCircle className="w-4 h-4 text-[var(--status-warning)]" />;
      default: return <Info className="w-4 h-4 text-[var(--status-info)]" />;
    }
  };

  const getBg = (type) => {
    switch(type) {
      case 'critical': return 'bg-[var(--status-critical)]/10 border-[var(--status-critical)]/30';
      case 'warning': return 'bg-[var(--status-warning)]/10 border-[var(--status-warning)]/30';
      default: return 'bg-[var(--status-info)]/10 border-[var(--status-info)]/30';
    }
  };

  return (
    <div className={`flex items-center gap-3 px-4 py-2 border-b transition-colors duration-500 ${getBg(currentAlert.type)}`}>
      {getIcon(currentAlert.type)}
      <div className="flex-1 overflow-hidden relative h-5">
        <p key={currentAlert.id} className="text-sm font-medium animate-in slide-in-from-bottom-5 fade-in duration-500 absolute w-full truncate">
          <span className="font-mono text-xs opacity-70 mr-2">{new Date().toLocaleTimeString('id-ID')}</span>
          {currentAlert.text}
        </p>
      </div>
    </div>
  );
}
