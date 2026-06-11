import Link from "next/link";
import { ArrowRight, Activity, Zap, Shield } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 bg-gradient-to-br from-[#F4F7F6] to-white"></div>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-15%] left-[-10%] w-[50%] h-[50%] rounded-full bg-stratum-surface opacity-10 blur-[100px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-stratum-main opacity-5 blur-[120px]"></div>
      </div>

      <div className="max-w-4xl w-full px-6 text-center">
        <div className="inline-block mb-6 px-5 py-2 rounded-full bg-white border border-gray-200 text-xs font-bold tracking-widest text-stratum-main uppercase shadow-sm">
          Prototype Demo v1.0
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
          <span className="text-gradient">STRATUM</span>
          <br />
          Industrial AI Platform
        </h1>
        
        <p className="text-lg md:text-xl text-stratum-surface mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
          Optimalkan operasi manufaktur Anda dengan AI. Dari deteksi anomali energi hingga prediksi kegagalan mesin secara real-time.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <Link href="/login" className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-stratum-main text-white font-semibold tracking-wide rounded-2xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
            Akses Demo Dashboard
            <ArrowRight className="w-5 h-5" />
          </Link>
          <a href="https://github.com/sickn33/stratum-infrastructure" target="_blank" rel="noreferrer" className="flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-white border border-gray-200 hover:border-stratum-surface hover:bg-gray-50 text-stratum-main font-semibold tracking-wide rounded-2xl transition-all duration-300">
            Lihat Arsitektur
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="glass-panel p-8">
            <Zap className="w-8 h-8 text-status-warning mb-4" />
            <h3 className="text-lg font-bold mb-2">Optimasi Energi</h3>
            <p className="text-sm text-stratum-surface font-medium">Deteksi power spike dan tekan biaya operasional dengan analitik AI.</p>
          </div>
          <div className="glass-panel p-8">
            <Activity className="w-8 h-8 text-status-normal mb-4" />
            <h3 className="text-lg font-bold mb-2">Predictive Maintenance</h3>
            <p className="text-sm text-stratum-surface font-medium">Cegah downtime mesin sebelum terjadi melalui sensor getaran & suhu.</p>
          </div>
          <div className="glass-panel p-8">
            <Shield className="w-8 h-8 text-status-info mb-4" />
            <h3 className="text-lg font-bold mb-2">Automated Compliance</h3>
            <p className="text-sm text-stratum-surface font-medium">Pembuatan log HACCP dan ISO secara otomatis berdasarkan telemetri.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
