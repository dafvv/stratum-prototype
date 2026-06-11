import { KPICard } from '@/components/ui/KPICard';
import { Card, CardHeader } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Zap, TrendingUp, AlertTriangle } from 'lucide-react';
import { MOCK_DATA } from '@/lib/seed-data';
import { EnergyLineChart } from '@/components/charts/EnergyChart';

export default function EnergyModule() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-black text-stratum-main mb-2 tracking-tight">Optimasi Energi</h2>
          <p className="text-gray-500 font-medium">Pemantauan konsumsi listrik dan deteksi anomali real-time.</p>
        </div>
        <Badge variant="warning">1 Anomali Aktif</Badge>
      </div>

      {/* Top KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <KPICard highlight title="Konsumsi Total (Shift Ini)" value="842" unit="kWh" trend="up" trendValue="+5.2%" icon={Zap} />
        <KPICard title="Biaya Estimasi" value="1.2" unit="Jt IDR" trend="up" trendValue="Di luar kewajaran" icon={TrendingUp} status="warning" />
        <KPICard title="Intensitas Energi" value="12.4" unit="kWh/unit" trend="down" trendValue="-2%" icon={Zap} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader 
            title="Profil Beban Daya: Chiller A" 
            subtitle="Deteksi anomali menggunakan model Isolation Forest" 
            rightContent={<Badge variant="info">AI Model Active</Badge>}
          />
          <div className="mt-4">
            <EnergyLineChart data={MOCK_DATA.energy.chillerA} height={350} />
          </div>
        </Card>

        <Card className="lg:col-span-1 border-gray-100 bg-gray-50/50">
          <CardHeader title="AI Insights" subtitle="Rekomendasi dari agen cerdas" />
          <div className="space-y-4 mt-4">
            <div className="p-5 bg-white rounded-2xl border border-red-100 shadow-sm relative overflow-hidden">
              <div className="absolute left-0 top-0 w-1.5 h-full bg-status-critical"></div>
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-status-critical shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-stratum-main mb-1.5">Power Spike Terdeteksi</h4>
                  <p className="text-sm text-gray-500 mb-4 leading-relaxed font-medium">
                    Terjadi lonjakan konsumsi daya hingga 24.5 kW pada Chiller A selama jam non-puncak. Hal ini mengindikasikan kemungkinan kompresor bekerja terlalu keras akibat kebocoran refrigeran atau kegagalan isolasi termal.
                  </p>
                  <button className="text-sm font-bold text-white bg-stratum-main px-4 py-2 rounded-lg hover:bg-[#11322e] transition-colors shadow-sm w-full">
                    Generate Work Order
                  </button>
                </div>
              </div>
            </div>
            
            <div className="p-5 bg-white rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden">
              <div className="absolute left-0 top-0 w-1.5 h-full bg-status-normal"></div>
              <div className="flex items-start gap-4">
                <Zap className="w-6 h-6 text-status-normal shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-stratum-main mb-1.5">Peluang Optimasi</h4>
                  <p className="text-sm text-gray-500 leading-relaxed font-medium">
                    Menggeser jadwal pencairan (defrost) Pasteurizer Line 1 ke jam 02:00 dapat menghemat biaya energi hingga 15% berdasarkan tarif WBP/LWBP.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
