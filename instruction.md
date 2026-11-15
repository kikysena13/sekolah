# Prompt UI/UX — Sistem Informasi Manajemen SD Negeri 1 Natar

## Peran dan batasan

Anda adalah UI/UX designer untuk sistem internal berbasis web SD Negeri 1 Natar. Buatkan **desain/artefak UI/UX terlebih dahulu, bukan implementasi kode atau full build aplikasi**. Semua keputusan visual wajib mengacu pada referensi yang sudah tersedia di folder `web_desain`; folder tersebut adalah sumber kebenaran visual proyek ini.

Jangan mendesain ulang identitas visual, halaman publik, Login, atau Forgot Password. Perluas desain yang sudah ada dengan komponen dan halaman yang konsisten, serta hanya buat/rapikan layar yang belum tersedia.

## Referensi visual yang wajib dipatuhi

Audit gambar pada `web_desain` sebelum membuat layar baru, terutama:

- `Desaign_system/Desaign system.jpeg` untuk token dan pola komponen.
- `Admin/` untuk dashboard, tabel data, detail, formulir, laporan, dan navigasi administrator.
- `Teacher/` untuk variasi akses dan alur guru.
- `Shared Compenets & States/` untuk profil, pengaturan, notifikasi, modal konfirmasi, state, 403, 404, dan sesi berakhir.
- `Responsive/` untuk perilaku tablet dan mobile.
- `login/` hanya sebagai referensi halaman autentikasi yang telah selesai.

Gunakan bahasa Indonesia secara konsisten. Gunakan data dummy yang jelas bersifat contoh; jangan gunakan data pribadi nyata.

## DNA visual yang harus dipertahankan

- Tampilan desktop adalah aplikasi administrasi sekolah yang terang, rapi, profesional, dan ramah bagi pengguna nonteknis.
- Latar halaman abu-abu/biru sangat muda; permukaan kartu, tabel, sidebar, dan formulir berwarna putih.
- Warna utama adalah biru navy/royal yang dipakai untuk CTA, link aktif, indikator, dan elemen navigasi; gunakan biru muda lembut untuk penekanan sekunder. Pertahankan hijau untuk status positif dan kuning/amber atau merah lembut untuk peringatan/aksi berisiko sebagaimana referensi.
- Pakai tipografi sans-serif modern dengan hierarki jelas: judul halaman tegas, teks bantu kecil berwarna netral, dan tabel yang ringkas serta mudah dipindai.
- Gunakan radius kecil hingga sedang, border abu-abu muda, bayangan sangat halus, whitespace lega, dan ikon outline sederhana. Jangan gunakan gradien mencolok, glassmorphism, kartu berlebihan, atau gaya visual baru yang tidak ada pada referensi.
- Ikuti pola layout referensi: sidebar putih di kiri dengan ikon dan label, topbar tipis di atas, breadcrumb, judul + deskripsi, lalu area aksi, filter, dan konten. Sidebar harus menandai menu aktif dengan aksen biru.
- CTA primer berbentuk tombol biru solid; aksi sekunder outline/putih; aksi destruktif tetap jelas namun tidak mendominasi.
- Untuk Login/Forgot Password, pertahankan komposisi dua kolom dan panel ilustrasi sekolah bernuansa navy yang sudah ada; jangan buat gaya login baru.

## Sistem komponen

Pakai komponen reusable dengan variasi yang konsisten: sidebar, topbar, breadcrumb, tombol, input, select, date picker, pencarian, filter chip, status badge, kartu statistik, tabel, pagination, dropdown aksi per baris, modal, toast, empty state, loading state, error state, dan akses ditolak.

Tabel harus mengikuti pola referensi: toolbar dengan judul/aksi utama, pencarian dan filter, header yang jelas, checkbox bila relevan, badge status ringkas, aksi per baris, dan pagination di bawah. Form gunakan grup field yang rapi, label di atas input, teks bantu/validasi di bawahnya, lalu area tombol Simpan dan Batal yang konsisten.

Pastikan aksesibilitas: kontras memadai, fokus/validasi terlihat, label selalu eksplisit, dan status tidak hanya dibedakan oleh warna.

## Struktur dan navigasi berbasis role

Tampilkan hanya menu yang relevan bagi role aktif.

### Administrator

Dashboard, Data Guru, Data Siswa, Manajemen Kelas, Tahun Ajaran, Penempatan Siswa, Monitoring Absensi, Laporan Absensi, Manajemen Pengguna, Log Aktivitas (opsional), Profil Saya, dan Pengaturan Akun.

Dashboard mengikuti referensi `Admin_Dashboard`: kartu metrik, ringkasan kehadiran/progres, aktivitas terbaru, dan aksi cepat. Modul data mengikuti keluarga layar list → detail → form yang sudah ada di `Admin/`.

### Guru

Dashboard, Kelas Saya, Data Siswa di Kelas, Input Absensi, Riwayat Absensi, Laporan Kelas, Notifikasi, Profil Saya, dan Pengaturan Akun.

Dashboard mengikuti `Teacher_Dashboard`. Input absensi mengikuti pola tabel per siswa dari `Teacher_attendance_input`: pemilih kelas/tanggal, indikator progres, status Hadir/Izin/Sakit/Alpa, simpan, dan peringatan perubahan yang belum disimpan. Jangan tampilkan akses administrasi global.

### Petugas Laboratorium

Dashboard, Notifikasi, Profil Saya, dan Pengaturan Akun wajib tersedia. Data Laboratorium, Inventaris, Peminjaman/Pengembalian, Jadwal, serta Laporan Laboratorium adalah **Perlu Konfirmasi**. Jika divisualkan, gunakan pola dashboard, tabel, detail, dan form yang sama tanpa menganggap modul tersebut telah disetujui.

## Layar dan state bersama

Gunakan layar shared yang sudah menjadi referensi untuk Profil Saya, Pengaturan Akun, Notifikasi, modal konfirmasi, 403, 404, sesi berakhir, loading, empty, error, dan success. Untuk setiap aksi penting (hapus, nonaktifkan akun, mengganti tahun ajaran aktif, atau menyimpan perubahan besar), gunakan modal konfirmasi dan feedback sukses/gagal yang jelas.

## Responsif

Pertahankan desktop sebagai layout utama. Ikuti referensi `Responsive/`:

- Tablet: sidebar dapat dipadatkan/disembunyikan; toolbar dan filter dapat membungkus; tabel tetap mudah dipindai atau dapat discroll horizontal.
- Mobile: topbar ringkas dengan pemicu menu, konten satu kolom, kartu statistik ditumpuk, filter bertahap, tabel menjadi scrollable atau daftar ringkas sesuai kompleksitas data, dan tombol utama tetap mudah dijangkau.

Jangan sekadar mengecilkan desktop; pertahankan hierarki konten dan aksi utama di setiap breakpoint.

## Alur prioritas

Prioritaskan desain yang masih kurang pada alur berikut:

1. Login → dashboard sesuai role.
2. Admin: Dashboard → Data Siswa/Guru → Tambah atau Edit → Detail.
3. Admin: Manajemen Kelas → Penempatan Siswa → Tahun Ajaran.
4. Guru: Dashboard → Kelas Saya → Input Absensi → Simpan.
5. Admin/Guru: Monitoring atau Riwayat → Laporan Absensi.
6. Profil → Pengaturan Akun.

## Keluaran yang diharapkan

Sebelum membuat aset baru, sebutkan layar referensi yang dipakai dan celah yang akan dilengkapi. Buat frame bernama konsisten, misalnya `Admin / Data Siswa / List`, `Teacher / Attendance / Input`, dan `Shared / Notifikasi`. Gunakan Auto Layout bila relevan. Setelah desain selesai, laporkan frame dan komponen yang dibuat/diperbarui, state responsif yang dicakup, serta setiap keputusan yang masih berstatus **Perlu Konfirmasi**.
