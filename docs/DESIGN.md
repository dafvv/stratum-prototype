# STRATUM DESIGN SYSTEM & TYPOGRAPHY
# Konteks: Industrial Dashboard Theme

## 1. TYPOGRAPHY
Agent wajib mendefinisikan font ini pada `src/app/layout.js` (menggunakan next/font/google atau instalasi lokal jika kustom).
- Headings (h1, h2, h3, h4): Switzer (Fallback: Inter / sans-serif)
- Body (p, span, table, data): Open Sans (Fallback: Roboto / sans-serif)

## 2. COLOR PALETTE (DONEZO LIGHT THEME)
Warna dasar telah dimodifikasi (di-*invert*) untuk mendukung antarmuka terang yang bersih (*clean dashboard*). Fungsi variabel CSS kini digunakan terbalik: warna gelap untuk elemen, warna terang untuk background. Agent wajib menyalin ini ke `globals.css`.

:root {
  /* Core Palette (Light Theme Mapped) */
  --bg-main: #16423C;        /* Digunakan untuk TEKS UTAMA dan KOMPONEN PRIMARY */
  --bg-surface: #6A9C89;     /* Digunakan untuk Aksen Secondary */
  --border-color: #C4DAD2;   /* Garis pembatas (opsional, bisa gunakan gray-200) */
  --text-primary: #16423C;   /* Sama dengan --bg-main untuk light mode */
  --text-secondary: #6A9C89; /* Teks sekunder yang lebih cerah */
  --app-background: #F4F7F6; /* Off-white murni untuk latar belakang aplikasi */
  
  /* Semantic Status Palette (Wajib untuk Skenario Anomali) */
  --status-normal: #10B981;  /* Hijau (T-48 Jam) */
  --status-warning: #F59E0B; /* Kuning/Oranye (T-24 Jam Power Spike) */
  --status-critical: #EF4444;/* Merah (T-0 Jam Failure & HACCP Alert) */

  /* Chart Colors (Recharts) */
  --chart-1: #16423C;
  --chart-2: #10B981;
  --chart-anomaly: #EF4444;
}
