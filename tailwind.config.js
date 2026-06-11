/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'stratum-main': 'var(--bg-main)',
        'stratum-surface': 'var(--bg-surface)',
        'stratum-border': 'var(--border-color)',
        'stratum-text': 'var(--text-primary)',
        'stratum-text-muted': 'var(--text-secondary)',
        'status-normal': 'var(--status-normal)',
        'status-warning': 'var(--status-warning)',
        'status-critical': 'var(--status-critical)',
      },
    },
  },
  plugins: [],
};
