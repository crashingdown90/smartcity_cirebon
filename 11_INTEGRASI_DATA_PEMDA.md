# Integrasi Data Pemerintah Daerah: Implementasi Interoperabilitas SPBE & Satu Data Indonesia

Pemerintah Daerah (Kota/Kabupaten) kini tidak lagi diperbolehkan mengelola data secara silo (terkotak-kotak per instansi/OPD). Integrasi data telah menjadi mandat nasional untuk merealisasikan tata kelola *Smart Governance* yang gesit dan transparan.

Terdapat dua pilar utama dalam kerangka tata kelola data di tingkat kota/kabupaten:

## 1. Kebijakan Satu Data Indonesia (SDI) Tingkat Daerah
SDI adalah kebijakan tata kelola untuk menghasilkan data yang akurat, mutakhir, terpadu, serta dapat diakses antar instansi.
- **Tujuan Utama:** Menyatukan (*single source of truth*) data dari Kepala Dinas Kependudukan, Dinas Pendidikan, Dinas Kesehatan, Bappeda, dsb. agar Kepala Daerah tidak mendapat laporan data yang berbeda-beda untuk satu isu yang sama.
- **Wali Data Daerah:** Biasanya diperankan oleh **Dinas Komunikasi dan Informatika (Diskominfo)** dibantu Badan Pusat Statistik (BPS) sebagai pembina data. Mereka bertugas memeriksa dan merilis data sektoral dari dinas-dinas (sebagai Produsen Data) ke dalam **Portal Satu Data Daerah**.
- **Prinsip Kunci:** Satu Standar Data, Satu Metadata Baku, dan Interoperabilitas Data.

## 2. Interoperabilitas Arsitektur SPBE
Sistem Pemerintahan Berbasis Elektronik (SPBE) mensyaratkan semua sistem aplikasi elektronik di pemerintah daerah harus saling bisa "berbicara" atau bertukar data (interoperabilitas).
- **Penghentian Duplikasi:** Arsitektur SPBE secara bertahap menghapus puluhan aplikasi OPD yang fungsinya serupa, dan mengkonsolidasikannya ke dalam aplikasi berbagi-pakai (seperti *Sistem Informasi Pembangunan Daerah / SIPD*).
- **Infrastruktur Penghubung:** Proses pertukaran dan pemanfaatan data ini difasilitasi melalui **Sistem Penghubung Layanan Pemerintah (*Government Service Bus/GSB*)**. Lewat GSB, misalnya aplikasi RSUD dapat memvalidasi identitas pasien secara langsung ke *database* Disdukcapil (NIK/KTP) secara otomatis dan aman (tanpa perlu *upload scan* KTP manual).

## Manfaat Eksekusi Integrasi Data di Kota/Kabupaten
1. **Perumusan Kebijakan Presisi:** Penyaluran bantuan sosial, beasiswa, maupun subsidi kesehatan dapat dieksekusi tepat sasaran berbasis pencocokan data kemiskinan warga. 
2. **Efisiensi Anggaran APBD:** Pemerintah tidak lagi perlu membuang anggaran miliaran untuk pengadaan *server* fisik (yang kini dilayani Pusat Data Nasional) maupun membiayai *maintenance* aplikasi ganda milik masing-masing instansi.
3. **Peningkatan Kualitas Layanan Publik:** Masyarakat tidak perlu lagi mengisi *form* biodata identitas berulang-kali saat mengurus perizinan di DPMPTSP karena data tersebut telah terintegrasi dengan data Kependudukan (Adminduk).

--- 
*Catatan: Mewujudkan interoperabilitas data di daerah memerlukan kepemimpinan digital (Digital Leadership) yang sangat kuat dari seorang Wali Kota/Bupati, mengingat tantangan terbesarnya bukan pada teknologi, melainkan ego sektoral antar instansi/dinas daerah.*
