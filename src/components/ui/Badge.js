export function Badge({ children, variant = "info", className = "" }) {
  let variantStyles = "";
  
  switch(variant) {
    case "critical":
      variantStyles = "bg-status-critical/10 text-status-critical border border-status-critical/30 shadow-[0_0_10px_rgba(239,68,68,0.2)]";
      break;
    case "warning":
      variantStyles = "bg-status-warning/10 text-status-warning border border-status-warning/30 shadow-[0_0_10px_rgba(245,158,11,0.2)]";
      break;
    case "healthy":
    case "normal":
      variantStyles = "bg-status-normal/10 text-status-normal border border-status-normal/30 shadow-[0_0_10px_rgba(16,185,129,0.2)]";
      break;
    default:
      variantStyles = "bg-stratum-surface/30 text-stratum-text-muted border border-stratum-border/50";
  }

  return (
    <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium uppercase tracking-wider ${variantStyles} ${className}`}>
      {children}
    </span>
  );
}
