import { KPICard } from '@/components/ui/KPICard';
import { Card, CardHeader } from '@/components/ui/Card';
import { Activity, AlertTriangle, Zap } from 'lucide-react';
import { Gauge } from '@/components/ui/Gauge';

export default function ProductionModule() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-black text-stratum-main mb-2 tracking-tight">Kinerja Produksi</h2>
          <p className="text-gray-500 font-medium">Lacak metrik kualitas, performa produksi, dan cacat secara detail.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <KPICard highlight title="Total Produksi" value="12,450" unit="unit" trend="up" trendValue="+5%" icon={Activity} />
        <KPICard title="Tingkat Cacat" value="1.2" unit="%" trend="down" trendValue="-0.3%" icon={AlertTriangle} status="warning" />
        <KPICard title="OEE Score" value="82.5" unit="%" trend="up" trendValue="+2.1%" icon={Activity} />
        <KPICard title="Kapasitas Utilitas" value="88" unit="%" icon={Zap} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader title="Loss Tree Analysis" subtitle="Identifikasi sumber utama kehilangan efisiensi" />
          <div className="overflow-x-auto mt-2">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-gray-400 font-semibold uppercase bg-gray-50/50">
                <tr>
                  <th className="px-6 py-4 rounded-tl-xl">Batch ID</th>
                  <th className="px-6 py-4">Produk</th>
                  <th className="px-6 py-4">Kuantitas</th>
                  <th className="px-6 py-4">Status Kualitas</th>
                  <th className="px-6 py-4">Progress</th>
                  <th className="px-6 py-4 rounded-tr-xl">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { id: 'B-001', product: 'Susu UHT 250ml', qty: '5,000', status: 'normal', progress: 100 },
                  { id: 'B-002', product: 'Yogurt Strawberry', qty: '2,450', status: 'warning', progress: 85 },
                  { id: 'B-003', product: 'Susu Pasteurisasi', qty: '1,500', status: 'critical', progress: 45 },
                  { id: 'B-004', product: 'Keju Cheddar', qty: '3,500', status: 'normal', progress: 20 },
                ].map((batch) => (
                  <tr key={batch.id} className="hover:bg-gray-50/80 transition-colors group">
                    <td className="px-6 py-5 font-bold font-mono text-stratum-main">{batch.id}</td>
                    <td className="px-6 py-5 font-medium text-stratum-main">{batch.product}</td>
                    <td className="px-6 py-5 text-gray-500 font-semibold">{batch.qty} unit</td>
                    <td className="px-6 py-5">
                       <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase ${batch.status === 'normal' ? 'bg-green-100 text-green-700' : batch.status === 'warning' ? 'bg-amber-100 text-amber-700' : 'bg-red-100 text-red-700'}`}>
                         {batch.status}
                       </span>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div className="h-full bg-blue-600" style={{ width: `${batch.progress}%` }}></div>
                        </div>
                        {batch.progress}%
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <button className="px-4 py-2 rounded-lg bg-white border border-gray-200 text-stratum-main hover:bg-gray-50 hover:border-gray-300 transition-colors text-xs font-bold shadow-sm">Detail</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <Card>
          <CardHeader title="Kinerja per Line Produksi" />
          <div className="grid grid-cols-2 gap-6 mt-4">
            <div className="bg-gray-50 p-4 rounded-lg flex flex-col items-center">
              <h4 className="text-sm font-semibold mb-4 text-stratum-main">Pasteurizer Line 1</h4>
              <Gauge value={92} size={100} strokeWidth={8} />
              <div className="mt-4 text-xs text-green-600 font-bold uppercase tracking-wider">Optimal</div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg flex flex-col items-center border border-red-200">
              <h4 className="text-sm font-semibold mb-4 text-stratum-main">Cold Chain Storage</h4>
              <Gauge value={65} size={100} strokeWidth={8} colorClass="text-red-500" />
              <div className="mt-4 text-xs text-red-600 font-bold uppercase tracking-wider">Critical Drop</div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
