import { KPICard } from '@/components/ui/KPICard';
import { Card, CardHeader } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { ShieldCheck, FileText, CheckCircle, AlertTriangle, Activity } from 'lucide-react';
import { MOCK_DATA } from '@/lib/seed-data';

export default function ComplianceModule() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-black text-stratum-main mb-2 tracking-tight">Compliance & Safety</h2>
          <p className="text-gray-500 font-medium">Log otomatis untuk standar HACCP, ISO 22000, dan keamanan lingkungan kerja.</p>
        </div>
        <button className="px-4 py-2 bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-white text-sm font-semibold rounded-lg hover:bg-[var(--bg-card)] transition-colors">
          Download All Reports
        </button>
      </div>
      {/* Top KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <KPICard highlight title="HACCP Compliance" value="98.5" unit="%" trend="down" trendValue="1 Deviation" icon={ShieldCheck} status="critical" />
        <KPICard title="Inspeksi Mendatang" value="12" unit="hari" icon={Activity} />
        <KPICard title="Dokumen Autolog" value="142" unit="file" trend="up" trendValue="+14" icon={ShieldCheck} />
        <KPICard title="Safety Score" value="100" unit="%" icon={Activity} status="normal" />
      </div>

      <div className="grid grid-cols-1 gap-6">
        <Card>
          <CardHeader title="Dokumen Kepatuhan Terbaru" subtitle="Dihasilkan oleh agen cerdas berdasarkan data telemetri aktual" />
          <div className="overflow-x-auto mt-2">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-gray-400 font-semibold uppercase bg-gray-50/50">
                <tr>
                  <th className="px-6 py-4 rounded-tl-xl">Waktu Log</th>
                  <th className="px-6 py-4">Titik Kendali (CCP)</th>
                  <th className="px-6 py-4">Parameter</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 rounded-tr-xl">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { time: '10:45 AM', ccp: 'CCP-1 (Pasteurisasi)', param: 'Temp: 72°C (Target: 72°C)', status: 'normal' },
                  { time: '10:30 AM', ccp: 'CCP-2 (Chiller)', param: 'Temp: -15°C (Target: -18°C)', status: 'warning' },
                  { time: '10:15 AM', ccp: 'CCP-3 (Metal Detector)', param: 'Passed', status: 'normal' },
                  { time: '10:00 AM', ccp: 'CCP-1 (Pasteurisasi)', param: 'Temp: 72.1°C (Target: 72°C)', status: 'normal' },
                ].map((log, i) => (
                  <tr key={i} className="hover:bg-gray-50/80 transition-colors group">
                    <td className="px-6 py-5 text-gray-500 font-semibold">{log.time}</td>
                    <td className="px-6 py-5 font-bold text-stratum-main">{log.ccp}</td>
                    <td className="px-6 py-5 font-mono text-stratum-main font-medium">{log.param}</td>
                    <td className="px-6 py-5">
                      <Badge variant={log.status}>{log.status === 'normal' ? 'Sesuai' : 'Deviasi'}</Badge>
                    </td>
                    <td className="px-6 py-5">
                      <button className="px-4 py-2 rounded-lg bg-white border border-gray-200 text-stratum-main hover:bg-gray-50 hover:border-gray-300 transition-colors text-xs font-bold shadow-sm">Lihat Log</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* HACCP Deviation Alert Section */}
        <div className="p-6 rounded-xl border border-[var(--status-warning)]/40 bg-[var(--status-warning)]/10 backdrop-blur-md relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <AlertTriangle className="w-48 h-48 text-[var(--status-warning)]" />
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="w-6 h-6 text-[var(--status-warning)]" />
              <h3 className="text-xl font-bold text-white">Deviasi HACCP Membutuhkan Review Manusia</h3>
            </div>
            <p className="text-[var(--text-secondary)] max-w-3xl mb-6 leading-relaxed">
              Log sistem mendeteksi suhu Cold Chain Chiller A berada di atas ambang batas kritis (-18°C) selama lebih dari 15 menit berturut-turut. Dokumen CAPA (Corrective and Preventive Action) otomatis telah di-draft dan menunggu tanda tangan Digital Supervisor.
            </p>
            <div className="flex gap-4">
              <button className="px-5 py-2.5 bg-[var(--status-warning)] text-yellow-950 font-bold rounded-lg hover:bg-yellow-400 transition-colors shadow-lg shadow-yellow-500/20">
                Review & Sign CAPA Document
              </button>
              <button className="px-5 py-2.5 border border-[var(--border-subtle)] text-white font-medium rounded-lg hover:bg-[var(--bg-secondary)] transition-colors">
                Lihat Log Sensor
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
