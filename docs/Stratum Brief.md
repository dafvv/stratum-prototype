# Project Stratum — Briefing Internal Tim
*Platform Kecerdasan Industri Berbasis AI — Brief Konsep Lengkap*

---

**Dokumen:** Briefing Internal  
**Versi:** v3.1 — Direkonsiliasi terhadap BMC v3.0 (Strategic Revision)  
**Tanggal:** Mei 2026  
**Target Pilot:** Produsen FnB Skala Besar — Kabupaten/Kota Bogor  
**Status:** Working title — dapat berubah

---

## Log Inkonsistensi: Brief v2.1 → v3.1

Revisi ini menyelesaikan delapan inkonsistensi yang ditemukan antara Brief v2.1 dan BMC v3.0:

| # | Komponen | Brief v2.1 | BMC v3.0 | Resolusi di v3.1 |
|---|----------|-----------|----------|-----------------|
| 1 | **Batas produk Operator Copilot** | Module 4 Stratum = "Operator Copilot" (LLM-RAG, floor worker) | Nexus tidak muncul di BMC; tidak ada modul copilot di Stratum | Stratum menjadi platform 4-modul operasional. Fungsi LLM-RAG untuk operator dipindahkan sepenuhnya ke Nexus sebagai produk terpisah. |
| 2 | **Tech stack AI** | "LSTM dan Isolation Forest" | "Isolation Forest/YOLOv8" | LSTM dihapus. Stack diperbarui: Isolation Forest + YOLOv8. |
| 3 | **Nexus vs BMC** | Nexus diposisikan sebagai "kandidat produk masuk Fase 1" | Nexus sama sekali tidak ada di BMC | Nexus dipertahankan sebagai konsep pendamping aktif tetapi ditandai eksplisit sebagai produk di luar model bisnis formal yang berlaku (BMC v3.0). |
| 4 | **Revenue model** | Tidak ada di Brief | Annual License (upfront), Hardware Pass-Through, Onboarding Fee | Bagian 06 ditambahkan khusus model pendapatan. |
| 5 | **Stakeholder keputusan** | Plant/Engineering Manager (Stratum), HR Manager (Nexus) | Operations Director/Plant Manager + Finance Director (CAPEX/OPEX) | Finance Director ditambahkan sebagai approval node untuk CAPEX/OPEX. |
| 6 | **SLA commitment** | Tidak disebutkan | SLA 99,5% uptime, eskalasi teknis level-3 | Ditambahkan di bagian Customer Relationship (Bagian 05 dan 06). |
| 7 | **Framing pilot** | "Fee pilot flat, lingkup terstandar" (internal task language) | "Risk-Free Isolated Pilot: pengujian 1 mesin utama" | Bahasa diperbarui ke framing customer-facing BMC. |
| 8 | **Protokol integrasi** | Vaguer: "koneksi ke peralatan dan sistem pabrik" | "OPC-UA/Modbus" eksplisit | OPC-UA/Modbus disebutkan eksplisit di arsitektur teknis. |

> **Catatan untuk tim:** BMC v3.0 adalah dokumen model bisnis yang berlaku. Jika terdapat konflik antara Brief dan BMC, BMC adalah referensi primer. Nexus tidak ada di BMC — keputusan apakah Nexus dimasukkan ke BMC v3.1 atau dioperasikan sebagai unit terpisah adalah keputusan tata kelola yang belum diselesaikan.

---

## 01 — Masalah yang Diselesaikan

Produsen manufaktur skala menengah-besar sedang didorong naik ke tingkat kematangan digital yang lebih tinggi oleh tekanan yang tidak mereka pilih sendiri. Mitra rantai pasok menuntut dokumentasi kepatuhan. Regulasi energi semakin ketat. Pelaporan ESG mulai diwajibkan. Pembeli Tier-1 mensyaratkan metrik efisiensi operasional yang selama ini tidak pernah harus diproduksi secara otomatis.

Meski perusahaan manufaktur besar memiliki sumber daya lebih dibanding UKM, mayoritas masih bergantung pada sistem SCADA berbasis rule-based yang statis, pengumpulan data manual, dan pelaporan yang disusun secara spreadsheet. Gap ini bukan soal ketidakmampuan membeli teknologi — melainkan ketiadaan platform yang mampu mengintegrasikan kecerdasan operasional lintas mesin, lini, dan shift dalam satu infrastruktur yang terakumulasi nilainya.

> **Celah yang ditargetkan:** Produsen manufaktur skala besar yang sudah memiliki infrastruktur dasar (PLC, SCADA parsial, atau peralatan dengan port komunikasi aktif), namun belum memiliki lapisan kecerdasan operasional yang adaptif, lintas-modul, dan semakin akurat seiring waktu.

Sektor Food & Beverage di Bogor dipilih sebagai titik masuk karena kombinasi kepadatan fasilitas produksi berskala besar, tekanan kepatuhan aktif (HACCP, ISO 22000, BPOM), tekanan audit dari Supplier Tier-1 retail nasional, dan keterbukaan manajemen terhadap inovasi yang lebih tinggi dibanding UKM.

---

## 02 — Apa Itu Stratum

Stratum adalah **platform kecerdasan industri berbasis AI yang modular**, dirancang untuk pabrik manufaktur yang ingin melampaui kemampuan sistem otomasi konvensional. Arsitektur produknya bersifat horizontal — dapat bekerja di sektor manufaktur mana pun — tetapi strategi go-to-market adalah vertikal-pertama: FnB skala besar di Bogor sebagai deployment pilot, sebelum ekspansi ke sektor dan geografi lain.

Platform terdiri dari **empat modul operasional** yang saling terhubung melalui satu lapisan data terpadu. Integrasi ke infrastruktur pabrik dilakukan via protokol industri standar (OPC-UA/Modbus):

| # | Modul | Fungsi Utama |
|---|-------|--------------|
| 1 | **Optimasi Energi** | Monitoring konsumsi energi real-time, peak shaving, deteksi anomali beban. ROI terukur langsung pada tagihan listrik terdekat. |
| 2 | **Predictive Maintenance** | Deteksi dini kegagalan peralatan sebelum terjadi. Model Isolation Forest dan YOLOv8 dijalankan pada data getaran, suhu, dan arus mesin kritis (pasteurisasi, filling, cold chain). |
| 3 | **Analitik Produksi** | OEE otomatis, atribusi kerugian hasil produksi, dan analisis akar penyebab downtime per mesin, per lini, per shift. |
| 4 | **Pelaporan Compliance AI** | Otomatisasi laporan produksi harian, dokumentasi HACCP dan ISO 22000 tanpa input manual, serta metrik ESG dari data operasional. |

> **Catatan arsitektur:** Modul Operator Copilot yang sebelumnya terdaftar sebagai Module 4 di Brief v2.1 telah dipindahkan sepenuhnya ke **Project Nexus** (lihat Bagian 07), yang merupakan produk terpisah dengan model bisnis, moat, dan jalur go-to-market yang berbeda. Penggabungan keduanya dalam satu daftar modul di Brief sebelumnya mengaburkan batas produk dan melemahkan positioning masing-masing.

Keempat modul berbagi skema data kanonik yang sama — data dari Predictive Maintenance mempengaruhi keputusan Optimasi Energi, yang masuk ke Analitik Produksi, yang memperbarui konteks untuk Pelaporan Compliance. Kecerdasan lintas-modul ini tidak bisa dihasilkan oleh sistem yang beroperasi secara silo.

---

## 03 — Mengapa Bisnis Ini Sulit Disaingi Seiring Waktu

Kebanyakan platform AI industri bersaing pada performa model. Itu adalah strategi yang kalah — kemampuan model meningkat setiap 18 bulan dan keunggulan performa terkikis. Defensibilitas Stratum dibangun di atas sesuatu yang tidak bisa direplikasi: **konteks operasional yang terakumulasi**.

Setiap fasilitas yang menggunakan Stratum berkontribusi pada **Graf Operasional** — struktur yang terus berkembang berisi riwayat mesin, pola kegagalan, perilaku operator, integrasi alur kerja, dan keterkaitan proses organisasi. Graf ini semakin dalam seiring waktu dan tidak bisa dipindahkan ke kompetitor tanpa akumulasi ulang selama bertahun-tahun.

**Lima lapisan moat, dari tercepat hingga terdalam:**

| Lapisan | Deskripsi |
|---------|-----------|
| **Lapisan 1 — Tercepat** | Integrasi deployment — keterikatan teknis dari koneksi ke peralatan dan sistem pabrik via OPC-UA/Modbus |
| **Lapisan 2** | Dataset industri unik — tanda kegagalan, profil energi, dan pola produksi spesifik per fasilitas FnB |
| **Lapisan 3** | Perilaku operator yang tertanam — alur kerja dan keputusan yang dibentuk platform menjadi kebiasaan harian |
| **Lapisan 4** | Riwayat mesin jangka panjang — data peralatan bertahun-tahun yang menghasilkan prediksi semakin akurat |
| **Lapisan 5 — Terdalam** | Keterkaitan proses organisasi — output platform tertanam dalam pengadaan, jadwal perawatan, dan keputusan manajemen |

> Keunggulan kompetitif sesungguhnya bukan pada model AI-nya. Melainkan pada konteks operasional yang terakumulasi, terikat pada kepadatan ketergantungan alur kerja. Perusahaan yang memiliki Graf Operasional paling dalam pada akhirnya akan memiliki kekuatan penetapan harga.

---

## 04 — Strategi Tiga Fase

Membangun Graf Operasional yang kuat membutuhkan volume deployment sebelum kedalaman data dapat tercapai. Strategi ini dirancang secara berurutan sesuai kebutuhan bisnis di setiap tahap — dimulai dari basis FnB Bogor sebagai anchor market.

### Fase 01 — Membangun Keunggulan Distribusi: Anchor FnB Bogor

Deploy di produsen FnB skala besar Bogor melalui pendekatan direct B2B sales yang didukung jaringan GAPMMI, mitra OEM peralatan FnB (filling, conveyor, refrigeration vendor), dan program PIDI 4.0 / Making Indonesia 4.0. Perusahaan berskala besar memiliki jalur keputusan yang lebih jelas dan keterbukaan terhadap inovasi yang lebih tinggi dibanding UKM.

**Mekanisme masuk:** Risk-Free Isolated Pilot pada satu mesin utama — mengeliminasi friksi anggaran dari procurement awal. Pilot terstandarisasi: biaya tetap, lingkup terstandar, KPI terukur di awal (downtime reduction, energy savings), SLA 99,5% uptime dengan eskalasi teknis level-3.

**Tujuan fase:** Volume deployment yang cukup untuk membangun kepadatan data FnB-specific dan memvalidasi unit economics (ACV per fasilitas, CAC direct B2B, payback period).

### Fase 02 — Spesialisasi Vertikal: Pendalaman FnB

Setelah ambang batas deployment dalam sektor FnB tercapai, seluruh energi produk diarahkan untuk membangun pustaka kegagalan peralatan FnB, template kepatuhan HACCP/ISO 22000, dan integrasi alur kerja spesifik proses pasteurisasi, filling, cold chain, dan baking.

Ini adalah disiplin go-to-market, bukan batasan produk. Kedalaman domain FnB yang dihasilkan tidak dapat direplikasi kompetitor generalis pada biaya yang setara.

### Fase 03 — Lapisan Kecerdasan Arsitektur

Setelah kepadatan deployment dan volume data longitudinal mencukupi, aktifkan kecerdasan lintas-pabrik: benchmarking OEE antar fasilitas FnB, korelasi kegagalan lintas-deployment, dan penilaian risiko rantai pasok berbasis data historis.

Fase ini menjadikan Stratum bukan sekadar perangkat lunak, melainkan infrastruktur pengetahuan industri FnB — aset yang memiliki nilai intrinsik terpisah dari produknya.

> **Tata kelola transisi:** Transisi Fase 1 ke Fase 2 harus dipicu oleh ambang batas deployment yang spesifik — bukan tanggal kalender. Tekanan pertumbuhan akan selalu mendorong penundaan spesialisasi. Ini harus diatur sebagai keputusan tata kelola, bukan aspirasi strategis.

---

## 05 — Target Pasar

> **Status:** Dikonfirmasi — rekomendasi konsultan

### Target Utama: Produsen Food & Beverage Skala Besar, Kabupaten/Kota Bogor

Berdasarkan rekomendasi konsultan, target utama dan first-to-reach untuk piloting adalah produsen FnB skala besar di area Bogor — bukan UKM. Bogor dipilih karena merupakan salah satu konsentrasi fasilitas manufaktur FnB skala nasional tertinggi di Jawa Barat, dengan akses logistik ke pasar Jakarta dan pelabuhan ekspor.

Perusahaan berskala besar dinilai lebih mudah menerima konsep baru dan inovasi, memiliki jalur keputusan yang lebih terstruktur, serta memiliki infrastruktur dasar yang memadai untuk deployment tanpa investasi hardware yang sangat besar di awal.

**Profil target — enam kriteria kualifikasi:**

| Kriteria | Deskripsi |
|----------|-----------|
| **Skala operasional** | 500+ karyawan, fasilitas produksi multi-lini aktif, minimal satu shift per hari dengan volume produksi konsisten |
| **Infrastruktur eksisting** | Memiliki PLC, SCADA parsial, atau peralatan dengan port komunikasi aktif — mengurangi kebutuhan hardware tambahan di awal |
| **Tekanan kepatuhan** | Aktif menghadapi audit ISO 22000, HACCP, BPOM, dan/atau kewajiban pelaporan energi dari regulator atau pembeli |
| **Orientasi pasar** | Supplier Tier-1 retail nasional atau berorientasi ekspor — menciptakan tekanan eksternal yang mempercepat adopsi efisiensi operasional |
| **Komitmen manajemen** | Sponsor internal dari level Plant Manager ke atas, bersedia mengalokasikan staf untuk pilot 90 hari dan sesi knowledge capture |
| **Keterbukaan inovasi** | Perusahaan dengan track record adopsi teknologi baru atau yang memiliki divisi engineering internal — mengurangi gesekan onboarding awal |

**Mengapa bukan UKM:** Meski kepadatan UKM lebih tinggi, siklus keputusan pembelian lebih panjang, infrastruktur digital lebih rendah, dan keterbukaan terhadap inovasi lebih terbatas. Perusahaan besar menghasilkan data lebih kaya untuk Graf Operasional, memiliki anggaran yang lebih jelas, dan validasi dari satu klien besar setara dengan validasi dari lima hingga sepuluh UKM dalam hal nilai referensi pasar.

**Decision makers yang perlu dijangkau:**

- **Operations Director / Plant Manager** — penanggung jawab efisiensi operasional, ujung tombak keputusan pilot
- **Finance Director** — approval CAPEX/OPEX; node ini tidak dapat diabaikan untuk enterprise contract. Proposisi nilai harus diterjemahkan ke ROI finansial yang terukur (payback period, penghematan tagihan listrik, pengurangan biaya downtime) sebelum Finance Director diajak berbicara

---

## 06 — Model Pendapatan

> **Sumber:** BMC v3.0. Bagian ini tidak ada di Brief v2.1 — ditambahkan untuk menjaga konsistensi dengan model bisnis formal.

Stratum menggunakan tiga aliran pendapatan:

| Stream | Mekanisme | Keterangan |
|--------|-----------|------------|
| **Annual Software License** | Dibayar di muka (upfront) | Lisensi tahunan per fasilitas. Pembayaran upfront meningkatkan stabilitas kas dan mengurangi collection risk. |
| **Onboarding Fee (Satu Kali)** | Biaya setup awal | Mencakup penarikan kabel, konfigurasi edge, dan onboarding operator. Tidak berulang. |
| **Hardware Pass-Through** | Biaya aset sensor/hardware dibebankan penuh ke klien | Stratum tidak menanggung CAPEX hardware. Perangkat tetap di klien — ini juga memperkuat switching cost. |

**Parameter unit economics yang perlu divalidasi (Workstream E):**
- ACV (Annual Contract Value) per fasilitas
- CAC direct B2B
- LTV per akun
- Payback period: skenario siklus penjualan 3 bulan vs 6 bulan
- Konversi pilot ke annual contract: skenario 35% vs 55%

---

## 07 — Project Nexus — Konsep Pendamping

> **Status produk:** Konsep aktif dalam pengembangan. Nexus **tidak ada** dalam BMC v3.0 saat ini. Keputusan apakah Nexus masuk ke BMC sebagai produk formal atau dioperasikan sebagai unit terpisah adalah keputusan tata kelola yang belum diselesaikan. Brief ini tidak mengantisipasi keputusan tersebut.

Terpisah dari Stratum, konsep kedua bernama **Project Nexus** menangani kecerdasan tenaga kerja dan manusia — bukan mesin dan operasi. Nexus adalah AI workforce copilot yang menangkap pengetahuan tacit dari operator senior, memberikan panduan troubleshooting kontekstual kepada pekerja lantai, dan menghasilkan pelatihan adaptif berbahasa Indonesia untuk onboarding dan pengembangan keterampilan.

**Perbedaan mendasar Stratum vs Nexus:**

| Dimensi | Stratum | Nexus |
|---------|---------|-------|
| Fokus utama | Kecerdasan mesin + operasional | Kecerdasan manusia + tenaga kerja |
| Mekanisme moat | Graf operasional — data mesin + keterkaitan proses | Graf pengetahuan tacit — keahlian yang tertanam |
| Timeline bukti ROI | 30–90 hari (energi, downtime) | 6–12 bulan (proksi produktivitas) |
| Gesekan deployment | Sedang–tinggi | Rendah–sedang |
| Biaya peralihan klien | Tinggi dan terus bertambah | Sedang |
| Lokalisasi Indonesia | Sedang | Sangat tinggi (Bahasa Indonesia industri) |
| Kekuatan harga jangka panjang | Tinggi | Terbatas |
| Kepadatan kompetitor Indonesia | Rendah (global tinggi) | Sangat rendah |

**Relevansi strategis:** Nexus adalah kandidat entry product untuk Fase 1 karena gesekan deployment lebih rendah dan pembangunan kepercayaan lebih cepat. Dalam konteks target FnB Bogor berskala besar, kedua produk dapat masuk ke klien yang sama melalui dua jalur: Nexus via HR/Training Manager, Stratum via Plant/Engineering Manager. Nexus menjadi jembatan masuk ke akun yang kemudian didalami oleh Stratum.

Namun: karena Nexus belum di-formalize dalam BMC, **jangan memperlakukan Nexus sebagai produk yang sudah diputuskan** dalam dokumen yang mengacu ke model bisnis formal.

---

## 08 — Risiko Utama yang Perlu Dikelola

### Prioritas Tinggi

**Ketidakdisiplinan transisi fase**
Tekanan pendapatan akan terus menunda spesialisasi vertikal. Harus diatur oleh ambang batas jumlah deployment yang tegas — bukan dikelola secara budaya atau aspirasi.

**Skema data operasional sejak hari pertama**
Lapisan kecerdasan lintas-modul membutuhkan ontologi data terpadu di semua deployment. Meretrofit ini setelah banyak fasilitas aktif sangat mahal. Keputusan arsitektur ini harus dibuat sebelum deployment pertama.

**Siklus penjualan enterprise yang panjang**
Perusahaan FnB besar memiliki proses procurement yang formal — vendor approval, legal review, pilot proposal review. Pilot harus terproduktisasi: biaya tetap, lingkup terstandar, KPI terukur di awal. Kalkulasikan siklus 3–6 bulan dari kontak pertama ke kontrak pilot.

### Prioritas Sedang

**Resistensi adopsi operator lantai**
Operator tidak mempercayai alat AI yang tidak mereka minta. Copilot (Nexus) harus diposisikan sebagai alat yang membuat pekerjaan mereka lebih mudah — bukan alat monitoring. Klausul kontrak yang melarang penggunaan data untuk evaluasi kinerja individu bersifat wajib.

**Konsentrasi mitra distribusi**
Keunggulan distribusi yang bergantung pada dua atau tiga mitra OEM adalah risiko konsentrasi pendapatan. Diversifikasi lintas OEM, GAPMMI, dan program pemerintah harus menjadi kendala desain Fase 1, bukan rencana cadangan.

**Halusinasi LLM dalam konteks keselamatan**
Output operator copilot yang salah dalam konteks panduan keselamatan pangan atau prosedur mesin berpotensi menyebabkan insiden fisik. Arsitektur RAG-grounding wajib, bukan opsional. Seluruh panduan operasional harus dikonfirmasi oleh operator sebelum dieksekusi.

---

## 09 — Yang Perlu Dikerjakan Tim

> **Status:** Pemilihan vertikal dan geografi telah dikonfirmasi oleh konsultan. Workstream berikut berjalan bersamaan dengan penyusunan proposal bisnis.

| Workstream | Prioritas | Deskripsi |
|-----------|----------|-----------|
| **A — Pemetaan Target Klien FnB Bogor** | Prioritas Pertama | Identifikasi 15–20 produsen FnB berskala besar di Kab./Kota Bogor. Profil per perusahaan: skala produksi, infrastruktur digital eksisting, tekanan kepatuhan aktif, dan nama decision-maker (Plant/Ops Manager + Finance Director). Sumber: GAPMMI, direktori industri Kemenperin, LinkedIn. |
| **B — Outreach Mitra OEM & GAPMMI** | Prioritas Pertama | Identifikasi vendor OEM peralatan FnB yang melayani Bogor (filling machine, conveyor, refrigeration). Inisiasi percakapan kemitraan dengan 3–5 target teratas. Hubungi GAPMMI untuk akses jaringan anggota dan potensi program bersama. |
| **C — Riset Data Sekunder FnB** | Segera | BPS sensus manufaktur FnB Jawa Barat, laporan energi ESDM sektor pangan, World Bank Enterprise Survey Indonesia, regulasi HACCP/ISO 22000 aktif. Menghasilkan data empiris untuk menggantikan estimasi dalam executive summary. |
| **D — Wawancara Lapangan (Market Validation)** | Segera | 10–12 wawancara terstruktur dengan Plant Manager dan Operations Director di fasilitas FnB Bogor target. Fokus: workflow nyata di lantai produksi, pain point aktual, tooling eksisting, dan willingness-to-pay untuk solusi digital. |
| **E — Model Keuangan** | Segera | Bottom-up revenue model untuk target enterprise FnB: ACV per fasilitas, CAC direct B2B, LTV, payback period. Skenario sensitivitas: siklus penjualan 3 vs 6 bulan, konversi pilot 35% vs 55%. Output untuk mengisi tabel proyeksi executive summary. |
| **F — Arsitektur Data Kanonik** | Segera | Definisikan skema data operasional terpadu sebelum deployment pertama: taksonomi standar untuk status mesin, kejadian kegagalan, konsumsi energi, aksi operator, dan output produksi di lingkungan FnB. Keputusan ini tidak dapat diretrofit tanpa biaya besar. |
| **G — Desain Pilot 90 Hari** | Sebelum kontrak pertama | Rancang struktur pilot terstandarisasi untuk fasilitas FnB besar: daftar peralatan kompatibel, checklist hardware, template integrasi OPC-UA/Modbus, onboarding operator, KPI terukur (downtime reduction, energy savings), dan fee pilot flat. Tujuan: eliminasi variasi biaya per deployment. |
| **H — Legal & Data Agreement** | Sebelum kontrak pertama | Susun klausul kontrak standar: kepemilikan data tetap di klien, larangan penggunaan data untuk evaluasi kinerja operator individu, ketentuan data residency, dan SLA 99,5% uptime dengan eskalasi teknis level-3. Perusahaan besar akan meminta review legal sebelum pilot — siapkan draf lebih awal. |

---

*Project Stratum · Briefing Internal v3.1 · Mei 2026 · Target: FnB Skala Besar — Bogor*  
*Direkonsiliasi terhadap BMC v3.0 (Strategic Revision) · Working title — dapat berubah*
