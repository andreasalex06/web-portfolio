export const projectDetails = {
 clinicapp: {
  id: { background: 'Layanan rawat jalan melibatkan pasien dan beberapa petugas yang perlu melihat informasi kunjungan yang sama. ClinicApp menghubungkan proses tersebut melalui dashboard staf dan portal pasien.',
   flow: ['Pasien memilih dokter dan melakukan pendaftaran.', 'Staf mengelola antrean dan mencatat konsultasi.', 'Tagihan dan status penyiapan obat dapat dipantau dalam alur kunjungan.'],
   technical: ['Hak akses berbasis peran membedakan tindakan staf dan pasien.', 'Pencarian data, antrean realtime, dan tagihan PDF mendukung alur operasional.'] },
  en: { background: 'Outpatient care involves patients and staff who need a shared view of each visit. ClinicApp connects these steps through a staff dashboard and patient portal.',
   flow: ['Patients choose a doctor and register.', 'Staff manage the queue and record consultations.', 'Billing and medicine preparation status can be followed throughout the visit.'],
   technical: ['Role-based access separates staff and patient actions.', 'Searchable records, real-time queues and PDF invoices support daily operations.'] },
 },
 'batch-tracer': {
  id: { background: 'Batch Tracer adalah simulasi edukasi yang menggunakan data sintetis untuk menelusuri pergerakan batch dan dampak penarikan produk. Aplikasi ini bukan sistem produksi atau alat untuk keputusan regulasi.',
   flow: ['Catat batch dan pemeriksaan kualitas sebelum distribusi.', 'Telusuri stok serta pengiriman berdasarkan batch.', 'Buka recall, pantau respons tujuan, lalu lakukan rekonsiliasi jumlah produk.'],
   technical: ['Layanan CodeIgniter memvalidasi peran dan transisi alur kerja.', 'Transaksi dan penguncian baris digunakan saat perubahan stok, pengiriman, dan recall.'] },
  en: { background: 'Batch Tracer is an educational simulation using synthetic data to trace batch movements and product recalls. It is not a production system or a regulatory decision tool.',
   flow: ['Record batches and quality checks before distribution.', 'Trace inventory and shipments by batch.', 'Open a recall, follow destination responses and reconcile product quantities.'],
   technical: ['CodeIgniter services validate roles and workflow transitions.', 'Transactions and row locks coordinate inventory, shipment and recall changes.'] },
 },
 relay: {
  id: { background: 'Relay dibuat sebagai proyek assessment untuk membantu tim memahami progres pekerjaan dan tugas yang masih menunggu penyelesaian prasyarat.',
   flow: ['Anggota membuka proyek dan melihat tugas pada board.', 'Dependensi menunjukkan tugas yang harus selesai lebih dahulu.', 'Klien melihat milestone yang sesuai dengan aksesnya.'],
   technical: ['Kontrol akses membatasi data dan tindakan berdasarkan keanggotaan dan peran.', 'Optimistic locking menangani perubahan bersamaan; audit log mencatat perubahan.'] },
  en: { background: 'Relay is an assessment project that helps teams see delivery progress and tasks waiting on prerequisites.',
   flow: ['Members open a project and view tasks on the board.', 'Dependencies show which tasks must be completed first.', 'Clients see milestones appropriate to their access.'],
   technical: ['Access controls restrict data and actions by membership and role.', 'Optimistic locking handles concurrent changes; audit logs record changes.'] },
 },
 cat2catch: {
  id: { background: 'Cat2Catch menggabungkan sensus kucing melalui laporan lokasi dengan pengalaman game mobile yang memiliki Arena dan koleksi di Rumah.',
   flow: ['Pengguna mengambil foto dan membuat laporan beserta lokasi serta status steril.', 'Laporan tersimpan secara lokal dan dapat dilihat atau difilter pada peta.', 'Pemain masuk Arena dan kembali ke Rumah untuk melihat koleksinya.'],
   technical: ['Flutter menggunakan pemisahan Model, View, dan ViewModel.', 'SQLite menyimpan laporan lokal; preferensi audio disimpan untuk sesi berikutnya.'] },
  en: { background: 'Cat2Catch combines location-based cat census reports with a mobile game experience featuring an Arena and a home collection.',
   flow: ['Users take a photo and create a report with location and sterilization status.', 'Reports are stored locally and can be viewed or filtered on a map.', 'Players enter the Arena and return home to view their collection.'],
   technical: ['Flutter separates Model, View and ViewModel responsibilities.', 'SQLite stores local reports; audio preferences persist across sessions.'] },
 },
 atrium: {
  id: { background: 'Atrium Interior Contracting memerlukan tempat untuk memperkenalkan layanan renovasi dan menunjukkan hasil pekerjaan kepada calon pelanggan.',
   flow: ['Pengunjung menjelajahi layanan renovasi.', 'Portofolio dan perbandingan sebelum-sesudah membantu menilai hasil pekerjaan.', 'Pengunjung menghubungi tim melalui WhatsApp untuk konsultasi.'],
   technical: ['Antarmuka responsif dibangun menggunakan React dan TypeScript.', 'Konten proyek dan layanan disusun untuk membantu pengunjung menemukan contoh yang relevan.'] },
  en: { background: 'Atrium Interior Contracting presents its renovation services and completed work to prospective customers.',
   flow: ['Visitors explore renovation services.', 'Portfolio entries and before-and-after comparisons show the work.', 'Visitors contact the team through WhatsApp for a consultation.'],
   technical: ['The responsive interface is built with React and TypeScript.', 'Project and service content helps visitors find relevant examples.'] },
 },
}

