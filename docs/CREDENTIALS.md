# CREDENTIALS & AUTHENTICATION SPECIFICATIONS
# Target Environment: Next.js 15 (App Router) & Supabase

## 1. ENVIRONMENT VARIABLES (.env.local)
Agent wajib menggunakan kredensial berikut untuk koneksi klien dan server. Dilarang memodifikasi URL atau Key.

NEXT_PUBLIC_SUPABASE_URL=https://gnrrtpvmemgzczanaaxi.supabase.co/rest/v1/
NEXT_PUBLIC_SUPABASE_ANON_KEY=sb_publishable_clIgbGQ0uHLk0ojdKS_MBw_zLtadpKe

## 2. DEMO AUTHENTICATION (HARD-CODED)
Agent wajib menerapkan mekanisme bypass login untuk menghilangkan friksi saat presentasi. Validasi tidak perlu melakukan round-trip ke Supabase Auth.

- Role: Super Admin (Akses penuh ke semua modul)
- Username: superadmin@stratum.id
- Password: admin18000
- Mekanisme: 
  1. Auto-fill form login dengan kredensial di atas.
  2. Klik "Login" langsung menginisiasi state sesi aktif (mocked session) dan melempar user ke `/dashboard`.
