import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { ArrowLeft, ArrowRight, Menu, X } from 'lucide-react'
import { projectDetails } from './project-details'
import batchImage from '@/assets/batch-tracer.webp'
import relayImage from '@/assets/relay.webp'
import catImage from '@/assets/cat2catch.webp'
import profilePhoto from '@/assets/profile-andreas.webp'
import clinicDashboardImage from '@/assets/clinic-dashboard-showcase.jpg'
import clinicPatientImage from '@/assets/clinic-patient-showcase.jpg'
import atriumImage from '@/assets/atrium-interior-showcase.jpg'

const additionalProjects = [
  { id: 'batch-tracer', name: 'Batch Tracer', image: batchImage, tags: ['CodeIgniter 4', 'PHP', 'PostgreSQL'], repo: 'https://github.com/andreasalex06/batch-tracer',
    idText: 'Simulasi pelacakan batch dengan data sintetis. Tim menelusuri stok dan pengiriman untuk mengetahui distribusi yang terdampak saat produk perlu ditarik.',
    enText: 'A batch traceability simulation using synthetic data. Teams trace inventory and shipments to identify deliveries affected by a product recall.' },
  { id: 'relay', name: 'Relay', image: relayImage, tags: ['Next.js', 'Hono', 'Prisma', 'PostgreSQL'],
    idText: 'Board proyek yang menunjukkan tugas mana yang harus selesai sebelum pekerjaan lain bisa dimulai. Anggota tim mengelola tugas sesuai peran, sementara klien memantau milestone.',
    enText: 'A project board showing which tasks must finish before others can start. Team members manage work according to their roles, while clients follow milestone progress.' },
  { id: 'cat2catch', name: 'Cat2Catch', image: catImage, tags: ['Flutter', 'Dart'],
    idText: 'Game mobile dengan Arena dan Rumah untuk melihat koleksi kucing. Koleksi diperbarui saat pemain kembali dari Arena. Preferensi musik dan suara tersimpan untuk sesi berikutnya.',
    enText: 'A mobile game with an Arena and a Home for browsing collected cats. The collection refreshes on returning from the Arena, and audio preferences carry over to the next session.' },
]

const gh = 'https://github.com/andreasalex06'
const mail = 'andreasalexyz@gmail.com'
const projects = [
  { id:'clinicapp', name:'ClinicApp', image:clinicDashboardImage, tags:['React','Express','Prisma','PostgreSQL'], idText:'Registrasi pasien, antrean, konsultasi, dan pembayaran terhubung dalam satu alur rawat jalan. Staf mengelola layanan di dashboard, sementara pasien dapat mengikuti antrean dan status obat.', enText:'Registration, queues, consultations and billing form one outpatient workflow. Staff manage care in the dashboard while patients follow their queue and prescription status.' },
  ...additionalProjects,
  { id:'atrium', name:'Atrium Interior Contracting', image:atriumImage, tags:['React','TypeScript','Tailwind CSS'], repo:gh+'/atrium-interior-contracting', idText:'Pengunjung dapat membandingkan interior sebelum dan sesudah renovasi, melihat portofolio pekerjaan, lalu menghubungi tim melalui WhatsApp.', enText:'Visitors compare interiors before and after renovation, browse completed work and contact the team through WhatsApp.' }
]
const summaries = [['Operasional klinik rawat jalan','Outpatient clinic operations'],['Pelacakan batch dan simulasi recall','Batch tracking and recall simulation'],['Board tugas dengan dependensi','Dependency-aware project board'],['Game koleksi kucing','Cat collection game'],['Katalog renovasi dan interior','Renovation and interior portfolio']]
const stagesID = [["Analisis kebutuhan","Saya memetakan pengguna dan alur utama. Untuk ClinicApp, alurnya dimulai saat pasien mendaftar dan berakhir setelah konsultasi dan pembayaran."],["Perencanaan & dokumentasi","Saya membatasi lingkup fitur dalam SRS atau PRD. Flow diagram dan ERD membantu saya menentukan modul dan hubungan data sebelum menulis kode."],["Desain sistem & antarmuka","Saya menguji alur layar melalui prototipe Figma, lalu menyelaraskan komponen antarmuka, skema database, dan kontrak REST API."],["Pengembangan","Saya menghubungkan antarmuka dengan API per alur kerja. Di Relay, board menampilkan tugas prasyarat dan tindakan yang tersedia sesuai peran."],["Pengujian","Saya memeriksa API melalui Postman, lalu mencoba alurnya sebagai pengguna: apakah input ditolak dengan benar dan akses dibatasi sesuai peran?"],["Deployment","Saya mengatur konfigurasi tiap layanan, merilis aplikasi, lalu menjalankan smoke test untuk memastikan frontend, backend, dan database tetap terhubung."],["Pemeliharaan","Setelah rilis, saya menelusuri masalah, memperbaiki bug, dan menentukan perubahan berikutnya berdasarkan hasil evaluasi."]]
const stagesEN = [
 ['Requirements analysis','I map the users and their tasks. In ClinicApp, the workflow starts with registration and ends after consultation and payment.'],
 ['Planning & documentation','I define scope in an SRS or PRD. Flow diagrams and ERDs make module boundaries and data relationships explicit before implementation.'],
 ['System & interface design','I prototype screens in Figma and align interface components, database schemas and REST API contracts.'],
 ['Development','I connect screens and APIs one workflow at a time. In Relay, the board shows prerequisites and actions available to each role.'],
 ['Testing','I check APIs in Postman, then test user flows, invalid input and role-based access.'],
 ['Deployment','I configure and release each service, then smoke-test the connections between frontend, backend and database.'],
 ['Maintenance','After release, I investigate issues, fix bugs and use the findings to plan improvements.']
]
const study = p => '#/studi/'+p.id
const ribbonStack = [
  ['React', SiReact], ['Next.js', SiNextdotjs], ['TypeScript', SiTypescript],
  ['Vite', SiVite], ['Tailwind CSS', SiTailwindcss], ['Node.js', SiNodedotjs],
  ['Express', SiExpress], ['Hono', SiHono], ['PHP', SiPhp], ['CodeIgniter', SiCodeigniter],
  ['Prisma', SiPrisma], ['PostgreSQL', SiPostgresql], ['Flutter', SiFlutter], ['Dart', SiDart],
]
const ribbon = <div className="tech-band" aria-hidden="true"><div className="tech-face"><div className="tech-track">
  {[0, 1].map(copy => <div key={copy} className="tech-group">{ribbonStack.map(([name, Icon]) => <span key={name}><Icon aria-hidden="true" />{name}</span>)}</div>)}
</div></div></div>
export default function Studio(){
 const [hash,setHash]=useState(location.hash),[lang,setLang]=useState(()=>localStorage.getItem('portfolio-language')==='en'?'en':'id')
 const [preview,setPreview]=useState(null), dialog=useRef(null)
 const [activeNav,setActiveNav]=useState(null), headerRef=useRef(null)
 const [menuOpen,setMenuOpen]=useState(false), menuButtonRef=useRef(null)
 const [scrolled,setScrolled]=useState(()=>window.scrollY>12)
 const [slide,setSlide]=useState({ projectId: null, index: 0 })
 const reduceMotion = useReducedMotion()
 const heroItem = delay => ({ hidden: { opacity: reduceMotion ? 1 : .4, y: reduceMotion ? 0 : 14 }, visible: { opacity: 1, y: 0, transition: reduceMotion ? { duration: 0 } : { type: 'spring', stiffness: 140, damping: 24, delay, opacity: { duration: .25, delay } } } })
 const en=lang==='en', t=(id,english)=>en?english:id
 const project=projects.find(p=>hash===study(p)), summary=p=>summaries[projects.indexOf(p)][en?1:0]
 const screenshots = project ? (project.id === 'clinicapp' ? [project.image, clinicPatientImage] : [project.image]) : []
 const activeSlide = project && slide.projectId === project.id ? slide.index : 0
 const details = project ? projectDetails[project.id][lang] : null
 const moveSlide = direction => setSlide({ projectId: project.id, index: (activeSlide + direction + screenshots.length) % screenshots.length })
 useEffect(()=>{const change=()=>{setHash(location.hash);setSlide({ projectId: null, index: 0 })};window.addEventListener('hashchange',change);return ()=>window.removeEventListener('hashchange',change)},[])
 useEffect(()=>{const section=document.getElementById(hash.replace(/^#\/?/,''));if(section)section.scrollIntoView();else window.scrollTo(0,0);document.title=(project?project.name+' | ':'')+'Andreas Alex | Portfolio'},[hash,project])
 useEffect(()=>{document.documentElement.lang=lang;localStorage.setItem('portfolio-language',lang)},[lang])
 useEffect(()=>{if(preview)dialog.current?.showModal()},[preview])
 useEffect(()=>{if(!menuOpen)return;const onKey=event=>{if(event.key==='Escape'){setMenuOpen(false);menuButtonRef.current?.focus()}};const onPointer=event=>{if(!headerRef.current?.contains(event.target))setMenuOpen(false)};const onResize=()=>{if(window.innerWidth>720)setMenuOpen(false)};document.addEventListener('keydown',onKey);document.addEventListener('pointerdown',onPointer);window.addEventListener('resize',onResize);return ()=>{document.removeEventListener('keydown',onKey);document.removeEventListener('pointerdown',onPointer);window.removeEventListener('resize',onResize)}},[menuOpen])
 useEffect(()=>{const update=()=>setScrolled(window.scrollY>12);update();window.addEventListener('scroll',update,{passive:true});return ()=>window.removeEventListener('scroll',update)},[])
 useEffect(()=>{if(!('IntersectionObserver' in window))return;const targets=document.querySelectorAll('main > section, main > article, main > .stats, footer.closing');const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{entry.target.classList.toggle('section-entered',entry.isIntersecting)})},{rootMargin:'-12% 0px -12% 0px',threshold:0});targets.forEach(target=>observer.observe(target));return ()=>observer.disconnect()},[project])
 useEffect(()=>{if(project){setActiveNav('proyek');return} const update=()=>{const offset=(headerRef.current?.offsetHeight||0)+64;let current=null;for(const id of ['tentang','proses','proyek']){const section=document.getElementById(id);if(section&&section.getBoundingClientRect().top<=offset)current=id}setActiveNav(current)};update();window.addEventListener('scroll',update,{passive:true});window.addEventListener('resize',update);return ()=>{window.removeEventListener('scroll',update);window.removeEventListener('resize',update)}},[project,hash])
 return <><div className={scrolled ? "site-header is-scrolled" : "site-header"} ref={headerRef}><header><a className="brand" href="#/" onClick={()=>setMenuOpen(false)}>ANDREAS ALEX.</a><nav id="mobile-menu" className={menuOpen?'menu-open':undefined} aria-label={t('Navigasi utama','Main navigation')}>{[['tentang','Tentang','About'],['proses','Proses','Process'],['proyek','Proyek','Work']].map(([id,a,b])=><a key={id} href={'#/'+id} className={activeNav===id?'is-active':undefined} aria-current={activeNav===id?'location':undefined} onClick={()=>{setMenuOpen(false);if(!project&&hash==='#/'+id) document.getElementById(id)?.scrollIntoView()}}>{t(a,b)}</a>)}<a className="mobile-contact" href="https://wa.me/628999999367" target="_blank" rel="noopener noreferrer" onClick={()=>setMenuOpen(false)}><SiWhatsapp aria-hidden="true" />{t('Kontak','Contact')}</a></nav><div className="navActions"><select className="language" aria-label={t('Bahasa','Language')} value={lang} onChange={e=>setLang(e.target.value)}><option value="id">ID</option><option value="en">EN</option></select><a className="pill contact-action" href="https://wa.me/628999999367" target="_blank" rel="noopener noreferrer"><SiWhatsapp aria-hidden="true" />{t('Kontak','Contact')}</a><button ref={menuButtonRef} className="menu-toggle" type="button" aria-controls="mobile-menu" aria-expanded={menuOpen} aria-label={menuOpen?t('Tutup menu','Close menu'):t('Buka menu','Open menu')} onClick={()=>setMenuOpen(open=>!open)}>{menuOpen?<X size={22} aria-hidden="true"/>:<Menu size={22} aria-hidden="true"/>}</button></div></header></div>
 <main>{project?<article className="wrap detail-page">
  <nav className="breadcrumbs" aria-label={t('Breadcrumb','Breadcrumb')}>
   <ol><li><a href="#/">{t('Beranda','Home')}</a></li><li><a href="#/proyek">{t('Proyek','Projects')}</a></li><li aria-current="page">{project.name}</li></ol>
  </nav>
  <div className="detail-heading"><h1>{project.name}</h1><p className="detail-summary">{summary(project)}</p></div>
  <div className="detail-layout">
  <section className="detail-gallery" aria-label={t('Tampilan proyek','Project screenshots')}>
   <figure className={project.id==='cat2catch'?'detail-shot portrait-shot':'detail-shot'}>
    <button className="detail-image-button" aria-label={t('Perbesar','Enlarge')+' '+project.name+' '+(activeSlide+1)} onClick={()=>setPreview(screenshots[activeSlide])}><img key={screenshots[activeSlide]} className="detail-slide-image" src={screenshots[activeSlide]} alt={project.name+' / '+(activeSlide+1)}/></button>
    <figcaption><span aria-live="polite">{project.name} {project.id==='clinicapp'?(activeSlide===0?'— Dashboard':t('— Portal pasien','— Patient portal')):''}</span><span>{t('Klik untuk memperbesar','Click to enlarge')} ↗</span></figcaption>
   </figure>
   {screenshots.length>1&&<div className="detail-slider-controls"><button type="button" onClick={()=>moveSlide(-1)} aria-label={t('Gambar sebelumnya','Previous image')} title={t('Gambar sebelumnya','Previous image')}><ArrowLeft size={18}/></button><span aria-live="polite">{activeSlide+1} / {screenshots.length}</span><button type="button" onClick={()=>moveSlide(1)} aria-label={t('Gambar berikutnya','Next image')} title={t('Gambar berikutnya','Next image')}><ArrowRight size={18}/></button></div>}
  </section>
  <div className="detail-content">
  <div className="detail-info">
   <section><h2>{t('Latar belakang','Background')}</h2><p className="detail-description">{details.background}</p></section>
   <section><h2>{t('Alur utama','Main workflow')}</h2><ol className="detail-list">{details.flow.map(item=><li key={item}>{item}</li>)}</ol></section>
   <section><h2>{t('Aspek teknis','Technical details')}</h2><ul className="detail-list">{details.technical.map(item=><li key={item}>{item}</li>)}</ul></section>
   <section><h2>{t('Teknologi','Technology')}</h2><ul className="detail-tags">{project.tags.map(tag=><li key={tag}>{tag}</li>)}</ul></section>
  </div>
   <div className="detail-actions">{project.repo&&<a className="detail-action" href={project.repo}>{t('Kode sumber','Source code')} ↗</a>}{(project.id==='clinicapp'?[['Dashboard','https://clinic-app-frontend-pi.vercel.app/'],[t('Portal pasien','Patient portal'),'https://clinic-app-user-side.vercel.app/']]:project.id==='atrium'?[[t('Kunjungi situs','Visit site'),'https://andreasalex06.github.io/atrium-interior-contracting/']]:[]).map(([label,url])=><a className="detail-action" key={url} href={url}>{label} ↗</a>)}</div>
  </div></div>
 </article>:<>
 <motion.section className="wrap hero" initial={reduceMotion ? false : "hidden"} whileInView="visible" viewport={{ once: false, amount: .15 }}><motion.div className="photo" variants={heroItem(0)}><img src={profilePhoto} alt="Andreas Alex"/></motion.div><div className="intro"><motion.h1 variants={heroItem(.08)}>Andreas Alex.</motion.h1><motion.div className="role" variants={heroItem(.16)}>Full Stack Developer</motion.div><motion.p variants={heroItem(.24)}>{t('Saya membangun aplikasi web dan mobile untuk pekerjaan sehari-hari: mengelola layanan klinik, menelusuri pengiriman, dan membantu tim melihat progres proyek.','I build web and mobile apps for everyday work: running clinic services, tracing shipments and tracking team progress.')}</motion.p></div></motion.section>{ribbon}
 <section id="tentang" className="section wrap">
  <h2>{t('Tentang saya','About me')}</h2>
  <div className="aboutBody">
   <p>{t('Saya mengembangkan aplikasi web dan mobile dari awal hingga siap digunakan. Saya memulai dengan memahami kebutuhan pengguna, merancang alur serta struktur data, lalu membangun dan menguji fitur yang saling terhubung. Melalui ClinicApp dan Relay, saya mengerjakan alur layanan pasien dan pengelolaan proyek yang melibatkan beberapa peran pengguna.','I build web and mobile applications from initial requirements through implementation and testing. I map user workflows and data structures, then connect and test the features that support them. In ClinicApp and Relay, I have worked on patient services and project workflows involving multiple user roles.')}</p>
   <div className="columns about-columns">{[
    ['My Skills', ['React, Next.js, TypeScript', 'Node.js, Express, CodeIgniter', 'PostgreSQL, Prisma', 'Flutter, Dart, Figma'], ['React, Next.js, TypeScript', 'Node.js, Express, CodeIgniter', 'PostgreSQL, Prisma', 'Flutter, Dart, Figma']],
    ['Frontend', ['Memahami kebutuhan dan alur pengguna', 'Merancang antarmuka dan komponen', 'Menghubungkan API dan mengelola state', 'Menangani validasi, loading, error, responsivitas, dan aksesibilitas'], ['Understand user needs and workflows', 'Design interfaces and components', 'Connect APIs and manage state', 'Handle validation, loading, errors, responsiveness and accessibility']],
    ['Backend', ['Merancang data dan REST API', 'Menerapkan autentikasi dan otorisasi berbasis peran', 'Memvalidasi input dan menangani error', 'Memperhatikan keamanan, performa query, dan pengujian'], ['Design data models and REST APIs', 'Apply authentication and role-based authorization', 'Validate input and handle errors', 'Consider security, query performance and testing']],
   ].map(([title,idItems,enItems])=><div key={title}><h3>{title}</h3><ul>{(en?enItems:idItems).map(item=><li key={item}>{item}</li>)}</ul></div>)}</div>
  </div>
 </section>
 <section id="proses" className="section dark"><div className="wrap"><h2 className="center">{t('Cara saya bekerja','My working process')}</h2><div className="steps">{(en?stagesEN:stagesID).map(([title,body],i)=><div className="step" key={i}><h3><small>0{i+1}.</small>{title}</h3><p>{body}</p></div>)}</div></div></section>
 <div className="stats"><div className="wrap"><span><strong>2+</strong><span>{t('Tahun Pengalaman','Years of Experience')}</span></span><span><strong>S1</strong><span>{t('Informatika (ongoing)','Informatics (ongoing)')}</span></span><span><strong>Problem Solver</strong></span></div></div>
 <section className="section wrap"><h2 className="center">{t('Di balik fitur','Behind the features')}</h2><div className="quotes">{[projects[2],projects[1]].map(p=><div className="quote" key={p.id}><h3>{p.name}</h3><p>{en?p.enText:p.idText}</p></div>)}</div></section>
 <section className="section wrap" id="proyek"><h2>{t('Daftar proyek saya','My projects')}</h2><div className="stories">{[[projects[0],clinicPatientImage,'Dari antrean hingga obat siap diambil','From queue to prescription pickup'],[projects[1],batchImage,'Dari batch hingga penelusuran pengiriman','From batch to shipment traceability'],[projects[2],relayImage,'Dari dependensi tugas hingga progres proyek','From task dependencies to project progress'],[projects[3],catImage,'Dari Arena ke koleksi di Rumah','From the Arena to the home collection'],[projects[4],atriumImage,'Dari inspirasi interior ke konsultasi','From interior inspiration to consultation']].map(([p,image,a,b])=><a className="story" href={study(p)} key={p.id}><div className="story-media"><img loading="lazy" src={image} alt=""/></div><div className="story-content"><h3>{p.name}</h3><small>{p.id === 'cat2catch' ? t('Aplikasi mobile', 'Mobile app') : t('Aplikasi web', 'Web app')}</small><p>{t(a,b)}</p><div className="story-bottom"><div className="story-tags">{p.tags.slice(0, 2).map(tag => <span key={tag}>{tag}</span>)}</div><span className="story-link">{t('Detail proyek', 'Project details')}</span></div></div></a>)}</div></section></>}</main>
 {ribbon}<footer className="wrap closing" id="kontak"><h2>{t('Mari bekerja bersama.','Let’s work together.')}</h2><a href={'mailto:'+mail}><SiGmail aria-hidden="true" />{mail}</a><div className="between foot"><span>Andreas Alex</span><div className="footLinks"><a href={gh}><SiGithub aria-hidden="true" />GitHub</a><a href="https://wa.me/628999999367" target="_blank" rel="noopener noreferrer"><SiWhatsapp aria-hidden="true" />WhatsApp</a></div><a href="#/">{t('Ke beranda','Home')} ↑</a></div></footer>
 <dialog ref={dialog} className="viewer" onClose={()=>setPreview(null)}><button onClick={()=>dialog.current.close()}>{t('Tutup','Close')} ×</button>{preview&&<img src={preview} alt={project?.name}/>}</dialog></>
}

import { SiGmail, SiGithub, SiWhatsapp, SiReact, SiNextdotjs, SiTypescript, SiVite, SiTailwindcss, SiNodedotjs, SiExpress, SiHono, SiPhp, SiCodeigniter, SiPrisma, SiPostgresql, SiFlutter, SiDart } from 'react-icons/si'
