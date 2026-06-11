export function Gauge({ value, size = 120, strokeWidth = 12, label, colorClass = "text-status-normal drop-shadow-[0_0_8px_rgba(16,185,129,0.8)]" }) {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className="relative flex flex-col items-center justify-center">
      <svg width={size} height={size} className="transform -rotate-90">
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="transparent"
          className="text-stratum-surface opacity-30"
        />
        {/* Progress circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className={`transition-all duration-1000 ease-out ${colorClass}`}
        />
      </svg>
      <div className="absolute flex flex-col items-center justify-center inset-0">
        <span className="text-3xl font-black font-mono text-stratum-main">{value}%</span>
      </div>
      {label && <span className="text-sm text-stratum-text-muted mt-4 font-bold uppercase tracking-[0.15em]">{label}</span>}
    </div>
  );
}
