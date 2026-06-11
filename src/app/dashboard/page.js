import { KPICard } from '@/components/ui/KPICard';
import { Card, CardHeader } from '@/components/ui/Card';
import { Gauge } from '@/components/ui/Gauge';
import { Badge } from '@/components/ui/Badge';
import { StatusDot } from '@/components/ui/StatusDot';
import { Activity, Zap, Wrench, ShieldCheck } from 'lucide-react';
import { MOCK_DATA } from '@/lib/seed-data';

export default function DashboardOverview() {
  const oee = MOCK_DATA.oee;
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-black text-stratum-main mb-2 tracking-tight">Dashboard Overview</h2>
          <p className="text-gray-500 font-medium">Sistem monitoring terpusat untuk seluruh modul Stratum.</p>
        </div>
        <div className="text-sm font-semibold text-gray-400 bg-white px-4 py-2 rounded-full border border-gray-100 shadow-sm">
          Last Sync: {new Date().toLocaleTimeString('id-ID')}
        </div>
      </div>

      {/* Top KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <KPICard highlight title="Konsumsi Energi (24h)" value="412" unit="kWh" trend="up" trendValue="+12%" icon={Zap} />
        <KPICard title="Downtime Aktual" value="1.5" unit="jam" trend="down" trendValue="-30%" icon={Wrench} />
        <KPICard title="Total Produksi" value="12,450" unit="unit" trend="up" trendValue="+5%" icon={Activity} />
        <KPICard title="HACCP Compliance" value="98.5" unit="%" trend="down" trendValue="1 Deviation" icon={ShieldCheck} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* OEE Overview */}
        <Card className="lg:col-span-1 flex flex-col justify-between">
          <CardHeader title="OEE Index" subtitle="Plant Average Effectiveness" />
          <div className="flex-1 flex flex-col items-center justify-center pt-2 pb-6">
            <Gauge value={oee.total} size={180} strokeWidth={18} colorClass="text-stratum-main drop-shadow-md" />
            <div className="w-full grid grid-cols-3 gap-2 mt-8 text-center px-4">
              <div className="bg-gray-50 rounded-xl p-2">
                <div className="text-lg font-bold font-mono text-stratum-main">{oee.availability}%</div>
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Avail</div>
              </div>
              <div className="bg-gray-50 rounded-xl p-2">
                <div className="text-lg font-bold font-mono text-stratum-main">{oee.performance}%</div>
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Perf</div>
              </div>
              <div className="bg-green-50 rounded-xl p-2 border border-green-100">
                <div className="text-lg font-bold font-mono text-status-normal">{oee.quality}%</div>
                <div className="text-[10px] font-bold text-status-normal uppercase tracking-wider">Qual</div>
              </div>
            </div>
          </div>
        </Card>

        {/* Machine Status */}
        <Card className="lg:col-span-2">
          <CardHeader title="Status Mesin & Line Produksi" subtitle="Pemantauan real-time status perangkat keras di pabrik" />
          <div className="overflow-x-auto mt-2">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-gray-400 font-semibold uppercase bg-gray-50/50">
                <tr>
                  <th className="px-6 py-4 rounded-tl-xl">Equipment</th>
                  <th className="px-6 py-4">Type</th>
                  <th className="px-6 py-4">Health</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 rounded-tr-xl">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {MOCK_DATA.machines.map((machine, i) => (
                  <tr key={machine.id} className="hover:bg-gray-50/80 transition-colors group">
                    <td className="px-6 py-5 font-bold text-stratum-main">{machine.name}</td>
                    <td className="px-6 py-5 capitalize text-gray-500 font-medium">{machine.type}</td>
                    <td className="px-4 py-4 font-mono">
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-2 bg-[var(--bg-secondary)] rounded-full overflow-hidden">
                          <div 
                            className={`h-full ${machine.health < 50 ? 'bg-[var(--status-critical)]' : machine.health < 85 ? 'bg-[var(--status-warning)]' : 'bg-[var(--status-normal)]'}`} 
                            style={{ width: `${machine.health}%` }}
                          ></div>
                        </div>
                        {machine.health}%
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-2 font-semibold">
                        <StatusDot status={machine.status} pulse={machine.status === 'critical' || machine.status === 'warning'} />
                        <span className="capitalize">{machine.status}</span>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <button className="px-4 py-2 rounded-lg bg-white border border-gray-200 text-stratum-main hover:bg-gray-50 hover:border-gray-300 transition-colors text-xs font-bold shadow-sm">Review</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
}
