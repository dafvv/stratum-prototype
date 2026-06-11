# Resolusi Open Questions — Project Stratum Prototype Demo

Dokumen ini merangkum seluruh jawaban dan keputusan final atas *Open Questions* yang tersisa dari rencana implementasi, guna menyelaraskan gerak agen sebelum eksekusi teknis dilakukan.

---

### Q1: Branding & Design System Spesifik?
**Status: RESOLVED**
Aplikasi akan menggunakan tema *Industrial-Eco Dark Theme* berbasis palet warna dan tipografi berikut (sesuai spesifikasi `DESIGN.md`):

* **Tipografi:**
    * Headings (`h1`, `h2`, `h3`, `h4`): **Switzer** (Fallback: Inter / sans-serif)
    * Body & Data (`p`, `span`, `table`): **Open Sans** (Fallback: Roboto / sans-serif)
* **Palet Warna Utama (CSS Variables):**
    * `--bg-main`: `#16423C` (Background dasar dark mode)
    * `--bg-surface`: `#6A9C89` (Sidebar, panel, card background)
    * `--border-color`: `#C4DAD2` (Garis pemisah dan border tabel)
    * `--text-primary`: `#E9EFEC` (Teks utama, kontras tinggi)
    * `--text-secondary`: `#C4DAD2` (Label dan keterangan data)
* **Warna Status Semantik (Wajib untuk Alert & Anomali):**
    * `--status-normal`: `#10B981` (Kondisi normal / aman)
    * `--status-warning`: `#F59E0B` (Deteksi anomali / power spike)
    * `--status-critical`: `#EF4444` (Kegagalan fatal / deviasi HACCP)

---

### Q2: Skenario Demo Spesifik?
**Status: RESOLVED**
Demo akan berjalan menggunakan **Opsi B (Fokus Compliance & Optimasi Energi: Insiden Deviasi Suhu Cold Chain)**. Alur narasi linier berorientasi waktu relatif (`NOW()`) yang diinjeksikan melalui skrip *seeding* adalah sebagai berikut:

1.  **T-48 Jam (Kondisi Normal):** Chiller A berjalan stabil pada suhu -18°C dengan arus listrik normal (~15A). Nilai OEE tercatat optimal di angka 88%.
2.  **T-24 Jam (Modul 1 — Optimasi Energi):** Terjadi anomali teknis pada kompresor. Konsumsi arus melonjak ke 22A (+30%) pada jam non-puncak (*non-peak hours*), memicu peringatan *power spike* dan pemborosan biaya (IDR) pada dashboard energi.
3.  **T-12 Jam (Modul 2 — Predictive Maintenance):** Getaran internal meningkat ke 4.5mm/s. Sistem memicu status *Critical Warning* dengan probabilitas prediksi kegagalan mencapai 85% dalam waktu 12 jam ke depan.
4.  **T-0 Jam / Saat Presentasi (Modul 4 — Pelaporan Compliance):** Chiller A gagal mempertahankan titik beku, menyebabkan suhu menyimpang (*deviation*) ke -12°C. Sistem secara otomatis mencatat *Warning Alert* pada log HACCP harian dan men-generate draft laporan kepatuhan yang siap di-review.

---

### Q3: Deploy Target?
**Status: RESOLVED (Recommended Baseline)**
* **Target Utama:** Deployment online via **Vercel URL** (Free Tier). Menyediakan tautan yang dapat diakses langsung oleh juri untuk mempermudah impresi digital dan transparansi portofolio produk.
* **Target Cadangan (Fallback):** Lingkungan lokal via `npm run dev` pada resolusi presentasi minimum 1920×1080 (Full HD). Seluruh variabel lingkungan dan skrip *seeding* harus terkonfigurasi secara portabel agar siap dijalankan secara offline jika koneksi internet di lokasi kompetisi tidak stabil.
