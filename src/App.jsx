import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { ArrowLeft, ArrowRight, ArrowUpRight, Expand, Mail, Menu, Minus, Phone, Plus, X } from 'lucide-react'
import { FaReact } from 'react-icons/fa6'
import { SiDart, SiExpress, SiFlutter, SiKotlin, SiLaravel, SiPhp, SiPostgresql, SiTypescript } from 'react-icons/si'
import profilePhoto from '@/assets/profile-andreas.webp'
import backendImage from '@/assets/backend.webp'
import clinicDashboardImage from '@/assets/clinic-dashboard-showcase.jpg'
import clinicPatientImage from '@/assets/clinic-patient-showcase.jpg'
import atriumImage from '@/assets/atrium-interior-showcase.jpg'
import frontendImage from '@/assets/frontend.webp'
import postgresqlImage from '@/assets/postgresql.webp'

const navLinks = [
  { key: 'about', href: '#home' },
  { key: 'skills', href: '#service' },
  { key: 'experience', href: '#about' },
  { key: 'projects', href: '#project' },
]

const serviceImages = [frontendImage, backendImage, postgresqlImage]
const projectTags = ['React JS', 'Express JS', 'Prisma', 'PostgreSQL']

const clinicScreenshotImages = [clinicDashboardImage, clinicPatientImage]
const entranceVariants = {
  hidden: { opacity: 0.8, transform: 'translateY(12px)' },
  visible: { opacity: 1, transform: 'translateY(0px)', transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
}

const marqueeItems = [
  'React',
  'Express',
  'Dashboard',
  'PostgreSQL',
  'Tailwind',
  'Prisma',
  'TypeScript',
  'Laravel',
  'PHP',
  'Kotlin',
  'Flutter',
  'Dart',
  'JWT Auth',
]

const heroTechStack = [
  { label: 'React', icon: FaReact },
  { label: 'Express', icon: SiExpress },
  { label: 'PostgreSQL', icon: SiPostgresql },
  { label: 'Laravel', icon: SiLaravel },
  { label: 'PHP', icon: SiPhp },
  { label: 'Kotlin', icon: SiKotlin },
  { label: 'Flutter', icon: SiFlutter },
  { label: 'Dart', icon: SiDart },
  { label: 'TypeScript', icon: SiTypescript },
]

const translations = {
  en: {
    languageName: 'English', languageSwitcher: 'Choose language', skip: 'Skip to content', navLabel: 'Main navigation', mobileNavLabel: 'Mobile navigation', openNav: 'Open navigation', closeNav: 'Close navigation',
    nav: { about: 'About', skills: 'Skills', experience: 'Experience', projects: 'Projects', contact: 'Contact' },
    hero: { role: 'Full Stack Developer', description: "I'm a junior fullstack developer working with React, Express, and PostgreSQL. I build responsive interfaces and the APIs and databases that support them.", projects: 'My Projects', techStack: 'Technology stack' },
    skills: {
      title: 'My skills', intro: 'Technologies I use to build interfaces, APIs, and databases.', imageAlt: 'screenshot',
      items: [
        { title: 'Frontend Development', description: 'React, Vite, Tailwind CSS, Zustand, Axios, and responsive UI.' },
        { title: 'Backend API', description: 'Express.js, TypeScript, REST API, JWT auth, and Zod validation.' },
        { title: 'Database & Dashboard', description: 'PostgreSQL, Prisma ORM, relational modeling, search, and pagination.' },
      ],
    },
    experience: {
      title: 'Projects & education',
      items: [
        { company: 'ClinicApp', period: 'Fullstack Personal Project', role: 'Clinic Management System', detail: 'Built patient, doctor, registration, queue, consultation, invoice, and patient history workflows with React, Express, Prisma, and PostgreSQL.' },
        { company: 'Mini E-Commerce Website', period: 'University Project', role: 'Laravel, PHP, MySQL, Bootstrap', detail: 'Built a responsive e-commerce website with authentication, product catalog, search and filters, inventory management, shopping cart, and an initial Figma design.' },
        { company: 'Ciputra University', period: 'August 2024 - Present', role: 'Bachelor of Informatics', detail: 'Relevant coursework: Website Design and Software Design.' },
      ],
    },
    project: {
      heading: 'Selected projects', index: '01 / Featured project', type: 'Clinic Management System',
      description: 'A personal project for managing outpatient care, from patient registration and queues to consultations and invoices. Built with role-based access, searchable records, and PDF invoices.',
      stackLabel: 'Project technology stack', dashboard: 'View dashboard', patientWebsite: 'View patient website', github: 'More on GitHub', enlarge: 'Enlarge', previous: 'Previous screenshot', next: 'Next screenshot',
      screenshotTitles: ['Clinic Operations Dashboard', 'Patient Service Experience'],
      screenshotDescriptions: [
        'The staff workflow connects patient registration, real-time queues, consultation records, billing, pharmacy preparation, and financial reporting in one operational dashboard.',
        'The patient workflow covers doctor selection, live queue status, payment, medicine pickup tracking, visit summaries, and assistance through the local AI chat.'
      ]
    },
    interior: {
      type: 'Interior & Renovation Company Website',
      description: 'A company profile website for Atrium Interior Contracting. Visitors can explore renovation services, compare before-and-after interiors, browse the project collection, and contact the team through WhatsApp.',
      demo: 'Visit website', github: 'View source code',
      screenshotTitle: 'Atrium Interior Contracting Website',
      screenshotDescription: 'From exploring kitchen and bathroom renovations to browsing interior projects and requesting a consultation. Scroll the screenshot to explore the full page, or enlarge it for a closer look.',
    },
    highlights: {
      title: 'How I work',
      items: [
        { title: 'End-to-end development', body: 'I connect interface components to APIs and databases to build complete application features.' },
        { title: 'Clear interfaces', body: 'I focus on responsive layouts, useful validation, and dashboard actions that are easy to follow.' },
        { title: 'Practical workflows', body: 'I translate application requirements into forms, searchable tables, and clear steps for users.' },
        { title: 'Connected systems', body: 'I work with authentication, relational data, and frontend state that stays consistent with API responses.' },
      ],
    },
    footer: { question: 'Have a project in mind?', invitation: "Let's talk.", email: 'Email me', role: 'Full Stack Developer', backToTop: 'Back to top' },
    preview: { close: 'Close preview', zoomOut: 'Zoom out', zoomIn: 'Zoom in', resetZoom: 'Reset zoom' },
  },
  id: {
    languageName: 'Bahasa Indonesia', languageSwitcher: 'Pilih bahasa', skip: 'Lewati ke konten', navLabel: 'Navigasi utama', mobileNavLabel: 'Navigasi seluler', openNav: 'Buka navigasi', closeNav: 'Tutup navigasi',
    nav: { about: 'Tentang', skills: 'Keahlian', experience: 'Pengalaman', projects: 'Proyek', contact: 'Kontak' },
    hero: { role: 'Full Stack Developer', description: 'Saya junior fullstack developer yang menggunakan React, Express, dan PostgreSQL. Saya mengembangkan antarmuka responsif beserta API dan database yang mendukungnya.', projects: 'Proyek Saya', techStack: 'Teknologi yang digunakan' },
    skills: {
      title: 'Keahlian saya', intro: 'Teknologi yang saya gunakan untuk mengembangkan antarmuka, API, dan database.', imageAlt: 'tangkapan layar',
      items: [
        { title: 'Pengembangan Frontend', description: 'React, Vite, Tailwind CSS, Zustand, Axios, dan antarmuka responsif.' },
        { title: 'API Backend', description: 'Express.js, TypeScript, REST API, autentikasi JWT, dan validasi Zod.' },
        { title: 'Database & Dashboard', description: 'PostgreSQL, Prisma ORM, pemodelan relasional, pencarian, dan paginasi.' },
      ],
    },
    experience: {
      title: 'Proyek & pendidikan',
      items: [
        { company: 'ClinicApp', period: 'Proyek Pribadi Fullstack', role: 'Sistem Manajemen Klinik', detail: 'Membangun alur pasien, dokter, pendaftaran, antrean, konsultasi, tagihan, dan riwayat pasien dengan React, Express, Prisma, dan PostgreSQL.' },
        { company: 'Mini E-Commerce Website', period: 'Proyek Universitas', role: 'Laravel, PHP, MySQL, Bootstrap', detail: 'Membangun situs e-commerce responsif dengan autentikasi, katalog produk, pencarian dan filter, manajemen stok, keranjang belanja, serta rancangan awal di Figma.' },
        { company: 'Ciputra University', period: 'Agustus 2024 - Sekarang', role: 'Sarjana Informatika', detail: 'Mata kuliah relevan: Desain Website dan Desain Perangkat Lunak.' },
      ],
    },
    project: {
      heading: 'Proyek pilihan', index: '01 / Proyek unggulan', type: 'Sistem Manajemen Klinik',
      description: 'Proyek pribadi untuk mengelola layanan rawat jalan, dari pendaftaran dan antrean pasien hingga konsultasi dan tagihan. Dilengkapi hak akses berdasarkan peran, pencarian data, dan tagihan PDF.',
      stackLabel: 'Teknologi proyek', dashboard: 'Lihat dashboard', patientWebsite: 'Lihat website pasien', github: 'Selengkapnya di GitHub', enlarge: 'Perbesar', previous: 'Tangkapan layar sebelumnya', next: 'Tangkapan layar berikutnya',
      screenshotTitles: ['Dashboard Operasional Klinik', 'Pengalaman Layanan Pasien'],
      screenshotDescriptions: [
        'Alur staf menghubungkan registrasi pasien, antrean realtime, pencatatan konsultasi, tagihan, penyiapan obat, dan laporan keuangan dalam satu dashboard operasional.',
        'Alur pasien mencakup pemilihan dokter, pemantauan antrean, pembayaran, status pengambilan obat, ringkasan kunjungan, serta bantuan melalui chat AI lokal.'
      ]
    },
    interior: {
      type: 'Website Profil Perusahaan Interior & Renovasi',
      description: 'Website profil perusahaan Atrium Interior Contracting. Pengunjung dapat menjelajahi layanan renovasi, membandingkan interior sebelum dan sesudah, melihat koleksi proyek, serta menghubungi tim melalui WhatsApp.',
      demo: 'Lihat website', github: 'Lihat kode sumber',
      screenshotTitle: 'Website Atrium Interior Contracting',
      screenshotDescription: 'Dari menjelajahi layanan renovasi dapur dan kamar mandi hingga melihat proyek interior dan meminta konsultasi. Gulir screenshot untuk melihat seluruh halaman, atau perbesar untuk melihat detailnya.',
    },
    highlights: {
      title: 'Cara saya bekerja',
      items: [
        { title: 'Pengembangan fullstack', body: 'Saya menghubungkan antarmuka, API, dan database agar setiap fitur dapat digunakan dari awal hingga akhir.' },
        { title: 'Antarmuka yang mudah digunakan', body: 'Saya memperhatikan tampilan responsif, validasi input, dan navigasi agar pengguna memahami tindakan yang tersedia.' },
        { title: 'Alur yang sesuai kebutuhan', body: 'Saya menerjemahkan kebutuhan aplikasi menjadi formulir, tabel dengan pencarian, dan urutan kerja yang mudah diikuti.' },
        { title: 'Sistem yang terhubung', body: 'Saya menerapkan autentikasi, relasi database, dan pengelolaan state frontend sesuai respons API.' },
      ],
    },
    footer: { question: 'Ingin bekerja sama?', invitation: 'Mari berdiskusi.', email: 'Kirim email', role: 'Full Stack Developer', backToTop: 'Kembali ke atas' },
    preview: { close: 'Tutup pratinjau', zoomOut: 'Perkecil', zoomIn: 'Perbesar', resetZoom: 'Atur ulang zoom' },
  },
}


function GithubIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M12 2C6.48 2 2 6.58 2 12.22c0 4.52 2.87 8.35 6.84 9.7.5.09.68-.22.68-.49 0-.24-.01-1.05-.01-1.9-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.9 1.56 2.35 1.11 2.92.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.05 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.28 9.28 0 0 1 12 6.93c.85 0 1.7.12 2.5.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.92-2.34 4.79-4.57 5.04.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.59.69.49A10.09 10.09 0 0 0 22 12.22C22 6.58 17.52 2 12 2Z" />
    </svg>
  )
}


function ContentSection({ children, ...props }) {
  return <section {...props}>{children}</section>
}

function App() {
  const reduceMotion = useReducedMotion()
  const itemEntrance = reduceMotion ? { visible: { opacity: 1, transform: 'none', transition: { duration: 0 } } } : entranceVariants
  const [language, setLanguage] = useState(() => window.localStorage.getItem('portfolio-language') === 'en' ? 'en' : 'id')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [preview, setPreview] = useState(null)
  const [activeSlide, setActiveSlide] = useState(0)
  const [zoomLevel, setZoomLevel] = useState(1)
  const dialogRef = useRef(null)
  const previewCanvasRef = useRef(null)
  const panRef = useRef(null)
  const menuRef = useRef(null)
  const menuButtonRef = useRef(null)
  const experienceSectionRef = useRef(null)
  const { scrollYProgress: experienceProgress } = useScroll({
    target: experienceSectionRef,
    offset: ['start end', 'start 0.3'],
  })
  const experienceScale = useTransform(experienceProgress, [0, 1], [0.9, 1])
  const closingSurfaceRef = useRef(null)
  const { scrollYProgress: footerProgress } = useScroll({
    target: closingSurfaceRef,
    offset: ['end 1.6', 'end end'],
  })
  const footerScale = useTransform(footerProgress, [0, 1], [0.9, 1])
  const copy = translations[language]
  const screenshot = {
    image: clinicScreenshotImages[activeSlide],
    title: copy.project.screenshotTitles[activeSlide],
    description: copy.project.screenshotDescriptions[activeSlide]
  }
  const previewScreenshot = preview === null ? null : preview === 'atrium'
    ? { image: atriumImage, title: copy.interior.screenshotTitle }
    : { image: clinicScreenshotImages[preview], title: copy.project.screenshotTitles[preview] }

  const centerPreview = useCallback(() => {
    const canvas = previewCanvasRef.current
    if (!canvas) return
    canvas.scrollLeft = (canvas.scrollWidth - canvas.clientWidth) / 2
    canvas.scrollTop = preview === 'atrium' && zoomLevel === 1 ? 0 : (canvas.scrollHeight - canvas.clientHeight) / 2
  }, [preview, zoomLevel])

  useEffect(() => {
    window.localStorage.setItem('portfolio-language', language)
    document.documentElement.lang = language
  }, [language])

  useEffect(() => {
    if (preview === null) return
    setZoomLevel(1)
    const dialog = dialogRef.current
    const previousFocus = document.activeElement
    const previousOverflow = document.body.style.overflow
    dialog.showModal()
    document.body.style.overflow = 'hidden'
    return () => {
      dialog.close()
      document.body.style.overflow = previousOverflow
      previousFocus?.focus()
    }
  }, [preview])

  useEffect(() => {
    if (preview === null) return
    const frame = window.requestAnimationFrame(centerPreview)
    return () => window.cancelAnimationFrame(frame)
  }, [preview, zoomLevel, centerPreview])

  useEffect(() => {
    if (!isMenuOpen) return
    const onKey = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
        menuButtonRef.current?.focus()
      }
    }
    const onPointer = (event) => {
      if (!menuRef.current?.contains(event.target) && !menuButtonRef.current?.contains(event.target)) setIsMenuOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('pointerdown', onPointer)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('pointerdown', onPointer)
    }
  }, [isMenuOpen])

  const changeSlide = (direction) => setActiveSlide((current) => (current + direction + clinicScreenshotImages.length) % clinicScreenshotImages.length)

  const changeZoom = (amount) => setZoomLevel((current) => Math.min(3, Math.max(1, Number((current + amount).toFixed(2)))))

  const resetZoom = () => setZoomLevel(1)

  const startPan = (event) => {
    if (zoomLevel <= 1 || event.button !== 0) return
    const canvas = previewCanvasRef.current
    panRef.current = { x: event.clientX, y: event.clientY, left: canvas.scrollLeft, top: canvas.scrollTop }
    canvas.setPointerCapture(event.pointerId)
  }

  const movePan = (event) => {
    if (!panRef.current) return
    const canvas = previewCanvasRef.current
    canvas.scrollLeft = panRef.current.left - (event.clientX - panRef.current.x)
    canvas.scrollTop = panRef.current.top - (event.clientY - panRef.current.y)
  }

  const stopPan = (event) => {
    if (!panRef.current) return
    panRef.current = null
    previewCanvasRef.current?.releasePointerCapture(event.pointerId)
  }

  const languageSwitcher = <div className="language-switcher" role="group" aria-label={copy.languageSwitcher}>
    {['id', 'en'].map((option) => <button key={option} type="button" className={language === option ? 'is-active' : ''} aria-pressed={language === option} aria-label={translations[option].languageName} onClick={() => setLanguage(option)}>{option.toUpperCase()}</button>)}
  </div>

  return (
    <>
      <a className="skip-link" href="#main">{copy.skip}</a>
      <header className="site-header">
        <div className="page-container nav-bar">
          <a className="wordmark" href="#home">Andreas Alex<span>.</span></a>
          {languageSwitcher}
          <nav className="desktop-nav" aria-label={copy.navLabel}>
            {navLinks.map((item) => <a key={item.href} href={item.href}>{copy.nav[item.key]}</a>)}
          </nav>
          <a className="nav-contact" href="#contact">{copy.nav.contact} <ArrowUpRight size={16} /></a>
          <button ref={menuButtonRef} className="icon-button menu-toggle" aria-label={isMenuOpen ? copy.closeNav : copy.openNav} aria-expanded={isMenuOpen} aria-controls="mobile-navigation" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        <AnimatePresence initial={false}>
        {isMenuOpen && <motion.nav key="mobile-navigation" ref={menuRef} id="mobile-navigation" className="mobile-nav page-container" aria-label={copy.mobileNavLabel}
          initial={reduceMotion ? false : { opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: reduceMotion ? 0 : -8 }}
          transition={{ duration: reduceMotion ? 0 : 0.18, ease: 'easeOut' }}>
          {navLinks.map((item) => <a key={item.href} href={item.href} onClick={() => setIsMenuOpen(false)}>{copy.nav[item.key]}</a>)}
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>{copy.nav.contact}</a>
        </motion.nav>}
        </AnimatePresence>
      </header>

      <main id="main">
        <section id="home" className="hero">
          <div className="page-container hero-layout">
            <motion.div className="hero-copy"
              initial={reduceMotion ? false : 'hidden'} animate="visible"
              variants={{ visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.07 } } }}>
              <motion.p variants={itemEntrance} className="eyebrow">{copy.hero.role}</motion.p>
              <motion.h1 variants={itemEntrance}>Andreas Alex<span>.</span></motion.h1>
              <motion.p variants={itemEntrance} className="hero-description">{copy.hero.description}</motion.p>
              <motion.div variants={itemEntrance} className="hero-actions">
                <a className="action primary-action" href="#project">{copy.hero.projects} <ArrowRight size={18} /></a>
                <a className="github-link" href="https://github.com/andreasalex06" target="_blank" rel="noreferrer"><GithubIcon className="github-icon" /> GitHub</a>
              </motion.div>
            </motion.div>
            <motion.figure className="portrait"
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.5, delay: reduceMotion ? 0 : 0.12, ease: 'easeOut' }}>
              <img src={profilePhoto} alt="Andreas Alex" fetchPriority="high" />
              <figcaption>
                <ul className="hero-tech-stack" aria-label={copy.hero.techStack}>
                  {heroTechStack.map(({ label, icon: Icon }) => <li key={label} title={label}><Icon aria-hidden="true" /><span className="sr-only">{label}</span></li>)}
                </ul>
              </figcaption>
            </motion.figure>
          </div>
        </section>

        <ContentSection id="service" className="section section-muted">
          <div className="page-container">
            <div className="section-heading"><div><h2>{copy.skills.title}</h2></div><p>{copy.skills.intro}</p></div>
            <div className="skills-grid">
              {copy.skills.items.map((service, index) => {
                return <article key={service.title} className="skill-card">
                  <div className="skill-title-row"><h3>{service.title}</h3><span>0{index + 1}</span></div>
                  <p>{service.description}</p>
                  <img className="skill-image" src={serviceImages[index]} alt={`${service.title} ${copy.skills.imageAlt}`} loading="lazy" />
                </article>
              })}
            </div>
          </div>
        </ContentSection>

        <ContentSection ref={experienceSectionRef} id="about" className="section section-dark section-dark-left">
          <motion.div className="page-container" style={{ scale: reduceMotion ? 1 : experienceScale, transformOrigin: 'center top' }}>
            <div className="section-heading"><div><h2>{copy.experience.title}</h2></div></div>
            <div className="experience-list">
              {copy.experience.items.map((experience, index) => <article className="experience-row" key={experience.company}>
                <span className="row-number">0{index + 1}</span>
                <div className="experience-title"><h3>{experience.company}</h3><p>{experience.period}</p></div>
                <div className="experience-detail"><h4>{experience.role}</h4><p>{experience.detail}</p></div>
              </article>)}
            </div>
          </motion.div>
        </ContentSection>

        <ContentSection id="project" className="section section-muted">
          <div className="page-container">
            <div className="section-heading project-section-heading"><div><h2>{copy.project.heading}</h2></div></div>
            <motion.article className="project-showcase" initial={reduceMotion ? false : 'hidden'} whileInView="visible" viewport={{ once: true, amount: 0.12 }} variants={{ visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.1 } } }}>
              <motion.div variants={itemEntrance} className="project-details">
                <p className="project-index">{copy.project.index}</p>
                <h3>ClinicApp</h3>
                <p className="project-type">{copy.project.type}</p>
                <p className="project-description">{copy.project.description}</p>
                <ul className="project-tags" aria-label={copy.project.stackLabel}>
                  {projectTags.map((tag) => <li key={tag}>{tag}</li>)}
                </ul>
                <div className="project-links">
                  <a className="text-link" href="https://clinic-app-frontend-pi.vercel.app/" target="_blank" rel="noreferrer">{copy.project.dashboard} <ArrowUpRight size={18} /></a>
                  <a className="text-link" href="https://clinic-app-user-side.vercel.app/" target="_blank" rel="noreferrer">{copy.project.patientWebsite} <ArrowUpRight size={18} /></a>
                  <a className="text-link" href="https://github.com/andreasalex06" target="_blank" rel="noreferrer">{copy.project.github} <ArrowUpRight size={18} /></a>
                </div>
              </motion.div>
              <motion.figure variants={itemEntrance} className="project-gallery">
                <button className="screenshot-button" aria-label={`${copy.project.enlarge} ${screenshot.title}`} onClick={() => setPreview(activeSlide)}>
                  <motion.img key={screenshot.image} src={screenshot.image} alt={screenshot.title} loading="lazy"
                    initial={reduceMotion ? false : { opacity: 0.6 }} animate={{ opacity: 1 }}
                    transition={{ duration: reduceMotion ? 0 : 0.22 }} />
                  <span className="expand-indicator"><Expand size={18} /></span>
                </button>
                <figcaption className="gallery-toolbar">
                  <div aria-live="polite">
                    <span className="gallery-count">{String(activeSlide + 1).padStart(2, '0')} / {String(clinicScreenshotImages.length).padStart(2, '0')}</span>
                    <span className="gallery-title">{screenshot.title}</span>
                    <span className="gallery-description">{screenshot.description}</span>
                  </div>
                  <div className="gallery-controls"><button className="icon-button" aria-label={copy.project.previous} title={copy.project.previous} onClick={() => changeSlide(-1)}><ArrowLeft size={20} /></button><button className="icon-button" aria-label={copy.project.next} title={copy.project.next} onClick={() => changeSlide(1)}><ArrowRight size={20} /></button></div>
                </figcaption>
              </motion.figure>
            </motion.article>
            <motion.article className="project-showcase interior-showcase" initial={reduceMotion ? false : 'hidden'} whileInView="visible" viewport={{ once: true, amount: 0.12 }} variants={{ visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.1 } } }}>
              <motion.div variants={itemEntrance} className="project-details">
                <h3>Atrium Interior Contracting</h3>
                <p className="project-type">{copy.interior.type}</p>
                <p className="project-description">{copy.interior.description}</p>
                <ul className="project-tags" aria-label={copy.project.stackLabel}>
                  {['React', 'TypeScript', 'Vite', 'Tailwind CSS'].map((tag) => <li key={tag}>{tag}</li>)}
                </ul>
                <div className="project-links">
                  <a className="text-link" href="https://andreasalex06.github.io/atrium-interior-contracting/" target="_blank" rel="noreferrer">{copy.interior.demo} <ArrowUpRight size={18} /></a>
                  <a className="text-link" href="https://github.com/andreasalex06/atrium-interior-contracting" target="_blank" rel="noreferrer">{copy.interior.github} <ArrowUpRight size={18} /></a>
                </div>
              </motion.div>
              <motion.figure variants={itemEntrance} className="project-gallery">
                <div className="interior-screenshot-scroll" tabIndex={0} role="region" aria-label={copy.interior.screenshotTitle}>
                  <img src={atriumImage} alt={copy.interior.screenshotTitle} width="1400" height="3246" loading="lazy" />
                </div>
                <figcaption className="gallery-toolbar">
                  <div>
                    <span className="gallery-title">{copy.interior.screenshotTitle}</span>
                    <span className="gallery-description">{copy.interior.screenshotDescription}</span>
                  </div>
                  <button className="icon-button" aria-label={`${copy.project.enlarge} ${copy.interior.screenshotTitle}`} title={copy.project.enlarge} onClick={() => setPreview('atrium')}><Expand size={20} /></button>
                </figcaption>
              </motion.figure>
            </motion.article>
          </div>
        </ContentSection>

      </main>

      <div ref={closingSurfaceRef} className="closing-surface">
        <ContentSection className="section closing-highlights">
          <div className="page-container">
            <div className="section-heading"><div><h2>{copy.highlights.title}</h2></div></div>
            <div className="highlights-grid">{copy.highlights.items.map((item, index) => <article className="highlight" key={item.title}><span className="row-number">0{index + 1}</span><div><h3>{item.title}</h3><p>{item.body}</p></div></article>)}</div>
          </div>
        </ContentSection>

        <div id="contact" aria-hidden="true" />
        <motion.footer className="site-footer" style={{ scale: reduceMotion ? 1 : footerScale }}>
          <div className="page-container footer-content">
            <div className="footer-heading"><h2>{copy.footer.question}<br /><span>{copy.footer.invitation}</span></h2><a className="action footer-action" href="mailto:andreasalexyz@gmail.com">{copy.footer.email} <ArrowUpRight size={19} /></a></div>
            <div className="contact-links"><a href="mailto:andreasalexyz@gmail.com"><Mail size={18} />andreasalexyz@gmail.com</a><a href="tel:+628999999367"><Phone size={18} />08999999367</a><a href="https://github.com/andreasalex06" target="_blank" rel="noreferrer"><GithubIcon className="footer-github" />GitHub</a></div>
          </div>
          <div className="marquee-band">
            <div className="marquee-track">{[0, 1, 2, 3].map((group) => <div className="marquee-group" key={group} aria-hidden={group > 0 ? 'true' : undefined}>{marqueeItems.map((item) => <span key={item}>{item}<span className="marquee-separator" aria-hidden="true">/</span></span>)}</div>)}</div>
          </div>
          <div className="page-container footer-bottom"><a className="wordmark" href="#home">Andreas Alex<span>.</span></a><a className="text-link" href="#home">{copy.footer.backToTop} <ArrowUpRight size={16} /></a></div>
        </motion.footer>
      </div>

      {previewScreenshot && <dialog ref={dialogRef} className="preview-dialog" aria-labelledby="preview-title" onCancel={() => setPreview(null)}>
        <div className="preview-inner">
          <h2 id="preview-title" className="preview-title">{previewScreenshot.title}</h2>
          <button className="icon-button preview-close" aria-label={copy.preview.close} title={copy.preview.close} onClick={() => setPreview(null)} autoFocus><X size={22} /></button>
          <div ref={previewCanvasRef} className={`preview-canvas${preview === 'atrium' ? ' preview-long-page' : ''}${zoomLevel > 1 ? ' is-zoomed' : ''}`}
            onPointerDown={startPan} onPointerMove={movePan} onPointerUp={stopPan} onPointerCancel={stopPan}>
            <div className="preview-stage" style={{ width: `${zoomLevel * 100}%` }}>
              <img src={previewScreenshot.image} alt={previewScreenshot.title} draggable="false" onLoad={centerPreview} />
            </div>
          </div>
          <div className="preview-actions" role="group" aria-label={copy.preview.resetZoom}>
            <button className="icon-button" aria-label={copy.preview.zoomOut} title={copy.preview.zoomOut} disabled={zoomLevel <= 1} onClick={() => changeZoom(-0.25)}><Minus size={20} /></button>
            <button className="zoom-value" aria-label={`${copy.preview.resetZoom}: ${Math.round(zoomLevel * 100)}%`} title={copy.preview.resetZoom} onClick={resetZoom}>{Math.round(zoomLevel * 100)}%</button>
            <button className="icon-button" aria-label={copy.preview.zoomIn} title={copy.preview.zoomIn} disabled={zoomLevel >= 3} onClick={() => changeZoom(0.25)}><Plus size={20} /></button>
          </div>
        </div>
      </dialog>}
    </>
  )
}

export default App
