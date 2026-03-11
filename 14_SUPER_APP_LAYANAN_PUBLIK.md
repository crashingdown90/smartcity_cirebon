# Konsep *Super App* Layanan Publik Terintegrasi (Pemerintah Daerah)

Sesuai arahan Presiden mengenai reformasi digitalisasi pemerintahan dan arsitektur Sistem Pemerintahan Berbasis Elektronik (SPBE), pemerintah daerah diinstruksikan untuk tidak lagi membuat aplikasi baru setiap kali ada inovasi layanan sektoral. Fokus saat ini adalah membangun sebuah **Super App** atau portal layanan publik tunggal.

## Rekam Jejak dan Urgensi
- **Masalah Saat Ini:** Warga Kota/Kabupaten sering mengeluhkan keharusan mengunduh belasan aplikasi (*app fatigue*) dan membuat banyak akun (*password*) berbeda hanya untuk berinteraksi dengan instansi yang berbeda (contoh: satu aplikasi BPJS, satu aplikasi bayar PBB, satu aplikasi lapor jalan rusak).
- **Rencana Nasional (GovTech/INA Digital):** Pemerintah pusat melalui INA Digital tengah membangun *Super App* nasional untuk layanan inti kependudukan, kesehatan, pendidikan, dan bantuan sosial yang ditargetkan rilis Agustus 2025. Pemerintah Daerah nantinya harus mengintegrasikan layanan lokalnya ke dalam ekosistem tunggal ini lewat integrasi API (*Application Programming Interface*).

## Karakteristik Standar *Super App* Pemerintah Daerah
Sebuah *Super App* daerah (seperti yang telah diimplementasikan dalam bentuk *JAKI* di Jakarta, *Sapawarga* di Jawa Barat, atau *Jogja Smart Service*) idealnya memiliki karakteristik berikut:

1. **_Single Sign-On (SSO)_ Berbasis NIK:** Pengguna (warga) hanya perlu login satu kali menggunakan Nomor Induk Kependudukan (NIK). Sistem akan memverifikasinya melalui wajah (*Face Recognition*) atau integrasi dengan *Identitas Kependudukan Digital (IKD)* milik Kemendagri.
2. **Personalisasi Profil Warga:** Setelah *login*, aplikasi secara cerdas menampilkan status warga secara personal. Misalnya, jadwal anak imunisasi bulan depan, tagihan Pajak Bumi dan Bangunan (PBB) yang belum dibayar, hingga status pengajuan KTP yang sedang diproses.
3. **Ekosistem Mini-App:** Layanan dari puluhan dinas (seperti layanan perizinan, layanan kependudukan, pengaduan masyarakat, info lowongan kerja, CCTV publik) ditanam di dalam satu aplikasi berbentuk modul/ikon, alih-alih menjadi aplikasi mandiri yang memakan penyimpanan perangkat.
4. **Pembayaran Digital Terintegrasi:** Terintegrasi langsung dengan Bank Pembangunan Daerah (BPD) atau QRIS untuk memudahkan pembayaran pajak daerah, retribusi pasar, hingga donasi/zakat daerah tanpa berpindah aplikasi.

## Manfaat *Super App* bagi Pemerintah Kota (Contoh Studi Kasus)
1. **Bagi Masyarakat:** Mempersingkat waktu (warga tidak perlu mondar-mandir antrean dinas), biaya (tidak perlu fotokopi berkas fisik berkat arsip *digital* pengguna yang sudah divalidasi sistem), dan kepraktisan dalam bertransaksi.
2. **Bagi Pemerintah Kota:**
   - Mewujudkan *Single Source of Truth*, di mana data masyarakat ditarik dari satu database utama Pemkot sehingga meminimalisasi *error*.
   - Efisiensi anggaran daerah secara signifikan karena anggaran miliaran Rupiah tidak lagi terbuang untuk pemeliharaan *server* dari belasan aplikasi dari tiap-tiap Dinas (OPD).
   - *Branding* Kota Cerdas (*Smart City*) yang kuat melalui adopsi platform digital yang memanjakan warganya.

---
*Arah kebijakan "Satu Aplikasi untuk Semua" (Super App) bukan melulu tentang pembuatan perangkat lunak, melainkan restrukturisasi birokrasi, di mana ego sektoral tiap kedinasan dipaksa melebur menjadi satu layanan tata laksana pemerintahan yang berpusat pada kepuasan konstituen (Citizen-Centric).*
