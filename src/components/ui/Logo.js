export function Logo({ className = "w-8 h-8" }) {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      {/* Left/Top Green Ribbon */}
      <path 
        d="M 15 45 L 45 15 L 75 15 L 45 45 L 60 45 L 25 80 L 15 80 Z" 
        fill="var(--bg-main, #16423C)" 
      />
      {/* Right/Bottom Gold Ribbon */}
      <path 
        d="M 85 55 L 55 85 L 25 85 L 55 55 L 40 55 L 75 20 L 85 20 Z" 
        fill="var(--accent-primary, #c8956c)" 
      />
    </svg>
  );
}
