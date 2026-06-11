import { Card } from "./Card";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

export function KPICard({ title, value, unit, trend, trendValue, icon: Icon, highlight = false, className = "" }) {
  const isUp = trend === "up";
  const trendColorClass = highlight 
    ? (isUp ? "bg-white/20 text-white" : "bg-red-500/20 text-white")
    : (isUp ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700");
  
  const TrendIcon = isUp ? ArrowUpRight : ArrowDownRight;

  return (
    <Card 
      noPadding 
      className={`flex flex-col p-6 ${highlight ? 'bg-stratum-main text-white' : 'bg-white text-stratum-main'} ${className}`}
    >
      <div className="flex justify-between items-start mb-6">
        <h3 className={`text-base font-semibold ${highlight ? 'text-white/90' : 'text-stratum-main'}`}>
          {title}
        </h3>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center border ${highlight ? 'border-white/30 text-white' : 'border-gray-200 text-gray-500'}`}>
          <ArrowUpRight className="w-4 h-4" />
        </div>
      </div>
      
      <div className="flex items-baseline gap-2 mb-4">
        <span className="text-4xl font-bold tracking-tight">
          {value}
        </span>
        {unit && <span className={`text-sm font-medium ${highlight ? 'text-white/70' : 'text-gray-400'}`}>{unit}</span>}
      </div>

      {trendValue && (
        <div className="flex items-center gap-2 mt-auto">
          <div className={`flex items-center gap-1 px-2 py-0.5 rounded text-xs font-bold ${trendColorClass}`}>
            <TrendIcon className="w-3 h-3" />
          </div>
          <span className={`text-xs font-medium ${highlight ? 'text-white/80' : 'text-gray-400'}`}>
            {trendValue}
          </span>
        </div>
      )}
    </Card>
  );
}
