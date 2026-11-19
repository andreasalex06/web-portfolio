export const projectCatalog = [
  {
    id: 'clinicapp', name: 'ClinicApp', tags: ['React', 'Express', 'Prisma', 'PostgreSQL'],
    summary: { id: 'Operasional klinik rawat jalan', en: 'Outpatient clinic operations' },
    idText: 'Registrasi pasien, antrean, konsultasi, dan pembayaran terhubung dalam satu alur rawat jalan. Staf mengelola layanan di dashboard, sementara pasien dapat mengikuti antrean dan status obat.',
    enText: 'Registration, queues, consultations and billing form one outpatient workflow. Staff manage care in the dashboard while patients follow their queue and prescription status.',
  },
  {
    id: 'batch-tracer', name: 'Batch Tracer', tags: ['React', 'TypeScript', 'CodeIgniter 4', 'PostgreSQL'],
    repo: 'https://github.com/andreasalex06/batch-tracer',
    summary: { id: 'Pelacakan batch dan simulasi recall', en: 'Batch tracking and recall simulation' },
    idText: 'Simulasi pelacakan batch end-to-end dengan data sintetis. Setiap batch dicatat dari bahan baku hingga pengiriman ke distributor, lalu tim dapat menelusuri stok dan mengelola recall beserta rekonsiliasi unit yang dikembalikan.',
    enText: 'An end-to-end batch traceability simulation with synthetic data. Each batch is recorded from ingredient lots to distributor shipments, and teams can trace stock and run recalls with unit reconciliation.',
  },
  {
    id: 'relay', name: 'Relay', tags: ['Next.js', 'Hono', 'Prisma', 'PostgreSQL'],
    summary: { id: 'Board tugas dengan dependensi', en: 'Dependency-aware project board' },
    idText: 'Board proyek assessment yang menampilkan tugas mana yang harus selesai sebelum pekerjaan lain bisa dimulai. Tugas hanya dapat dikerjakan oleh pemilik yang ditugaskan, dan klien hanya melihat progres yang sesuai aksesnya.',
    enText: 'A project board for an assessment brief, showing which tasks must finish before others can start. Only the assigned owner can work a task, and clients only see the progress their access allows.',
  },
  {
    id: 'cat2catch', name: 'Cat2Catch', tags: ['Flutter', 'Dart'],
    summary: { id: 'Game koleksi kucing', en: 'Cat collection game' },
    idText: 'Game mobile dengan Arena dan Rumah untuk melihat koleksi kucing. Koleksi diperbarui saat pemain kembali dari Arena. Preferensi musik dan suara tersimpan untuk sesi berikutnya.',
    enText: 'A mobile game with an Arena and a Home for browsing collected cats. The collection refreshes on returning from the Arena, and audio preferences carry over to the next session.',
  },
  {
    id: 'atrium', name: 'Atrium Interior Contracting', tags: ['React', 'TypeScript', 'Tailwind CSS'],
    repo: 'https://github.com/andreasalex06/atrium-interior-contracting',
    summary: { id: 'Katalog renovasi dan interior', en: 'Renovation and interior portfolio' },
    idText: 'Pengunjung dapat membandingkan interior sebelum dan sesudah renovasi, melihat portofolio pekerjaan, lalu menghubungi tim melalui WhatsApp.',
    enText: 'Visitors compare interiors before and after renovation, browse completed work and contact the team through WhatsApp.',
  },
  {
    id: 'turntask', name: 'Turntask', tags: ['React Native', 'Expo', 'Express', 'PostgreSQL'],
    summary: { id: 'Inspeksi dan perbaikan gedung', en: 'Building inspection and repair workflow' },
    idText: 'Prototipe aplikasi mobile untuk inspeksi gedung. Satu temuan diikuti dari checklist inspeksi, pembuatan tiket, pengerjaan teknisi, hingga persetujuan supervisor.',
    enText: 'A mobile prototype for building inspections. One finding is followed from the inspection checklist, through ticket creation and technician work, to supervisor approval.',
  },
]

