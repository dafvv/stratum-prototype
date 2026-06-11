import { KPICard } from '@/components/ui/KPICard';
import { Card, CardHeader } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { StatusDot } from '@/components/ui/StatusDot';
import { Activity, Clock, Wrench } from 'lucide-react';

export default function MaintenanceModule() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-black text-stratum-main mb-2 tracking-tight">Predictive Maintenance</h2>
          <p className="text-gray-500 font-medium">Prediksi kegagalan mesin berbasis getaran dan suhu.</p>
        </div>
      </div>

      {/* Top KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <KPICard highlight title="Mesin Berisiko Tinggi" value="1" unit="unit" icon={AlertTriangle} status="critical" />
        <KPICard title="Akurasi Model" value="94.5" unit="%" trend="up" trendValue="+1.2%" icon={Activity} />
        <KPICard title="Est. MTBF" value="450" unit="jam" icon={Clock} />
        <KPICard title="Work Orders" value="3" unit="aktif" icon={Wrench} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-red-100 bg-red-50/30">
          <CardHeader 
            title="Prediksi Kegagalan: Chiller A" 
            subtitle="Probabilitas kegagalan >85% dalam 12 jam ke depan" 
            rightContent={<Badge variant="critical">T-12 Jam</Badge>}
          />
          <div className="mt-4 flex flex-col items-center justify-center py-6">
            <div className="relative">
              <div className="w-32 h-32 rounded-full border-[6px] border-red-100 flex items-center justify-center bg-white shadow-sm">
                <div className="text-4xl font-black font-mono text-status-critical">88%</div>
              </div>
              <div className="absolute top-0 right-0 w-5 h-5 bg-status-critical rounded-full animate-ping"></div>
            </div>
            <p className="text-center text-sm text-gray-500 font-medium mt-6 max-w-sm">
              Analisis spektrum getaran menunjukkan keausan pada bearing kompresor utama. Korelasi dengan lonjakan energi mengkonfirmasi degradasi mekanis.
            </p>
            <div className="mt-8 flex gap-4 w-full px-6">
              <button className="flex-1 py-3 bg-status-critical text-white text-sm font-bold rounded-xl hover:bg-red-600 transition-colors shadow-sm">
                Stop Mesin Sekarang
              </button>
              <button className="flex-1 py-3 bg-white border border-gray-200 text-stratum-main text-sm font-bold rounded-xl hover:bg-gray-50 transition-colors shadow-sm">
                Jadwalkan Perbaikan
              </button>
            </div>
          </div>
        </Card>

        <Card>
          <CardHeader title="Log Sensor (Real-time)" subtitle="Aliran data dari node Edge MQTT" />
          <div className="mt-4 space-y-3">
            {[
              { time: 'Sekarang', sensor: 'Vibration-A', val: '4.5 mm/s', status: 'critical', msg: 'Melebihi ambang batas' },
              { time: '-5 min', sensor: 'Temp-A', val: '-15°C', status: 'warning', msg: 'Deviasi terdeteksi' },
              { time: '-10 min', sensor: 'Current-A', val: '22 A', status: 'warning', msg: 'Power spike' },
              { time: '-15 min', sensor: 'Vibration-A', val: '4.2 mm/s', status: 'warning', msg: 'Meningkat tajam' },
              { time: '-20 min', sensor: 'Vibration-A', val: '2.1 mm/s', status: 'normal', msg: 'Normal' },
            ].map((log, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100 hover:bg-gray-100 transition-colors">
                <div className="flex items-center gap-4">
                  <StatusDot status={log.status} pulse={log.status === 'critical'} />
                  <div>
                    <div className="font-bold text-stratum-main text-sm">{log.sensor}</div>
                    <div className="text-xs text-gray-400 font-semibold">{log.time}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className={`font-mono font-black text-lg ${log.status === 'critical' ? 'text-status-critical' : log.status === 'warning' ? 'text-status-warning' : 'text-stratum-main'}`}>
                    {log.val}
                  </div>
                  <div className="text-xs font-semibold text-gray-500">{log.msg}</div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}

// Komponen AlertTriangle dilokalkan karena import dari lucide-react bermasalah jika digabung di top level
import { AlertTriangle } from 'lucide-react';
