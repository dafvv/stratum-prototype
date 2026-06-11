export function StatusDot({ status, pulse = false, size = "md", className = "" }) {
  let colorClass = "bg-status-normal";
  
  if (status === "critical" || status === "error") {
    colorClass = "bg-status-critical shadow-[0_0_8px_rgba(239,68,68,0.6)]";
  } else if (status === "warning") {
    colorClass = "bg-status-warning shadow-[0_0_8px_rgba(245,158,11,0.6)]";
  } else if (status === "normal" || status === "healthy") {
    colorClass = "bg-status-normal shadow-[0_0_8px_rgba(16,185,129,0.6)]";
  } else if (status === "info") {
    colorClass = "bg-stratum-text-muted";
  }

  const sizeClass = {
    sm: "w-2 h-2",
    md: "w-3 h-3",
    lg: "w-4 h-4"
  }[size] || "w-3 h-3";

  return (
    <div className={`relative flex items-center justify-center ${sizeClass} ${className}`}>
      {pulse && (
        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${colorClass}`}></span>
      )}
      <span className={`relative inline-flex rounded-full w-full h-full ${colorClass}`}></span>
    </div>
  );
}
