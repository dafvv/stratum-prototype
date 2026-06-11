export function Card({ children, className = "", noPadding = false, ...props }) {
  return (
    <div 
      className={`glass-panel ${className.includes('bg-') ? '' : 'bg-white'} ${noPadding ? '' : 'p-4 md:p-6'} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({ title, subtitle, rightContent, className = "" }) {
  return (
    <div className={`flex justify-between items-start mb-4 ${className}`}>
      <div>
        <h3 className="text-lg font-bold text-stratum-main">{title}</h3>
        {subtitle && <p className="text-sm font-medium text-gray-500 mt-1">{subtitle}</p>}
      </div>
      {rightContent && <div>{rightContent}</div>}
    </div>
  );
}
