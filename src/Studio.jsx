import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { ArrowRight, ChevronDown, Menu } from 'lucide-react'
import { projectDetails } from './project-details'
import { projectCatalog } from './project-catalog'
import { publicProjectPath } from './routes'
import { useHashRoute } from './use-hash-route'
import { readLanguage, saveLanguage } from './language-storage'
import PuzzleReveal from './PuzzleReveal'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem } from '@/components/ui/dropdown-menu'
import ImageViewer from '@/components/ImageViewer'
import { Sheet, SheetTrigger, SheetContent, SheetTitle, SheetDescription, SheetClose } from '@/components/ui/sheet'
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel'
import batchImage from '@/assets/batch-tracer.webp'
import relayImage from '@/assets/relay.webp'
import catImage from '@/assets/cat2catch.webp'
import profilePhoto from '@/assets/profile-andreas.webp'
import clinicDashboardImage from '@/assets/clinic-dashboard-showcase.jpg'
import clinicPatientImage from '@/assets/clinic-patient-showcase.jpg'
import atriumImage from '@/assets/atrium-interior-showcase.jpg'

const gh = 'https://github.com/andreasalex06'
const mail = 'andreasalexyz@gmail.com'
const homePath = import.meta.env.BASE_URL
const sectionPath = id => `${homePath}#/${id}`
const projectImages = {
  clinicapp: clinicDashboardImage,
  'batch-tracer': batchImage,
  relay: relayImage,
  cat2catch: catImage,
  atrium: atriumImage,
}
const projects = projectCatalog.map(project => ({ ...project, image: projectImages[project.id] }))
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
const projectIds = projects.map(project => project.id)
const study = p => publicProjectPath(p.id, import.meta.env.BASE_URL)
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
 const {hash,route}=useHashRoute(projectIds),[lang,setLang]=useState(readLanguage)
 const [preview,setPreview]=useState(null), previewTriggerRef=useRef(null)
 const [activeNav,setActiveNav]=useState(null), headerRef=useRef(null)
 const [menuOpen,setMenuOpen]=useState(false)
 const [scrolled,setScrolled]=useState(()=>window.scrollY>12)
 const [carouselApi,setCarouselApi]=useState(null), [activeSlide,setActiveSlide]=useState(0)
 const reduceMotion = useReducedMotion()
 const heroItem = (delay, direction = 1) => ({ hidden: { opacity: reduceMotion ? 1 : .65, x: reduceMotion ? 0 : direction * 20 }, visible: { opacity: 1, x: 0, transition: reduceMotion ? { duration: 0 } : { type: 'spring', stiffness: 150, damping: 25, delay, opacity: { duration: .22, delay } } } })
 const en=lang==='en', t=(id,english)=>en?english:id
 const project=route.type==='project'?projects.find(p=>p.id===route.projectId):undefined, summary=p=>p.summary[lang]
 const sectionId=route.type==='section'?route.section:null
 const screenshots = project ? (project.id === 'clinicapp' ? [project.image, clinicPatientImage] : [project.image]) : []
 const details = project ? projectDetails[project.id][lang] : null
 const demoLinks = project?.id==='clinicapp' ? [['Dashboard','https://clinic-app-frontend-pi.vercel.app/'],[t('Portal pasien','Patient portal'),'https://clinic-app-user-side.vercel.app/']] : project?.id==='atrium' ? [[t('Kunjungi situs','Visit site'),'https://andreasalex06.github.io/atrium-interior-contracting/']] : []
 useEffect(()=>{setActiveSlide(0)},[project?.id])
 useEffect(()=>{if(!carouselApi)return;const update=()=>setActiveSlide(carouselApi.selectedScrollSnap());update();carouselApi.on('select',update);carouselApi.on('reInit',update);return ()=>{carouselApi.off('select',update);carouselApi.off('reInit',update)}},[carouselApi])
 useEffect(()=>{const section=sectionId?document.getElementById(sectionId):null;if(section){const top=section.getBoundingClientRect().top+window.scrollY-(headerRef.current?.offsetHeight||0)-16;window.scrollTo({top,behavior:reduceMotion?'auto':'smooth'})}else window.scrollTo({top:0,behavior:'auto'})},[hash,sectionId,reduceMotion])
 useEffect(()=>{document.title=(project?project.name+' | ':route.type==='not-found'?(lang==='en'?'Page not found | ':'Halaman tidak ditemukan | '):'')+'Andreas Alex | Portfolio'},[project,route.type,lang])
 useEffect(()=>{document.documentElement.lang=lang;saveLanguage(lang)},[lang])
 useEffect(()=>{const update=()=>setScrolled(window.scrollY>12);update();window.addEventListener('scroll',update,{passive:true});return ()=>window.removeEventListener('scroll',update)},[])
 useEffect(()=>{if(project){setActiveNav('proyek');return} const update=()=>{const offset=(headerRef.current?.offsetHeight||0)+64;let current=null;for(const id of ['tentang','proses','proyek']){const section=document.getElementById(id);if(section&&section.getBoundingClientRect().top<=offset)current=id}setActiveNav(current)};update();window.addEventListener('scroll',update,{passive:true});window.addEventListener('resize',update);return ()=>{window.removeEventListener('scroll',update);window.removeEventListener('resize',update)}},[project,hash])
 return <><div className={scrolled ? "site-header is-scrolled" : "site-header"} ref={headerRef}><header>
 <a className="brand" href={homePath} onClick={()=>setMenuOpen(false)}>ANDREAS ALEX.</a>
 <nav className="desktop-nav" aria-label={t('Navigasi utama','Main navigation')}>{[['tentang','Tentang','About'],['proses','Proses','Process'],['proyek','Proyek','Work']].map(([id,a,b])=><Button asChild variant="ghost" key={id} className={activeNav===id ? (scrolled ? "border-b-2 border-amber-300 text-white" : "border-b-2 border-blue-700 text-neutral-900") : (scrolled ? "text-neutral-200 hover:text-white" : "text-neutral-700 hover:text-neutral-950")}><a href={sectionPath(id)} className={activeNav===id?'is-active':undefined} aria-current={activeNav===id?'location':undefined} onClick={()=>{if(!project&&hash==='#/'+id) requestAnimationFrame(()=>{const section=document.getElementById(id);if(section)window.scrollTo({top:section.getBoundingClientRect().top+window.scrollY-(headerRef.current?.offsetHeight||0)-16,behavior:reduceMotion?'auto':'smooth'})})}}>{t(a,b)}</a></Button>)}</nav>
 <div className="navActions">
  <DropdownMenu modal={false}><DropdownMenuTrigger asChild><Button variant="ghost" className="h-11 border-0 bg-transparent px-2 text-inherit" aria-label={t('Bahasa','Language')}>{lang.toUpperCase()} <ChevronDown size={16} aria-hidden="true" /></Button></DropdownMenuTrigger><DropdownMenuContent align="end"><DropdownMenuRadioGroup value={lang} onValueChange={setLang}><DropdownMenuRadioItem value="id">ID</DropdownMenuRadioItem><DropdownMenuRadioItem value="en">EN</DropdownMenuRadioItem></DropdownMenuRadioGroup></DropdownMenuContent></DropdownMenu>
  <Button asChild className={scrolled ? "hidden bg-white text-neutral-900 hover:bg-amber-100 min-[721px]:inline-flex" : "hidden bg-neutral-900 text-white hover:bg-neutral-700 min-[721px]:inline-flex"}><a href="https://wa.me/628999999367" target="_blank" rel="noopener noreferrer"><SiWhatsapp aria-hidden="true" />{t('Kontak','Contact')}</a></Button>
  <Sheet open={menuOpen} onOpenChange={setMenuOpen}><SheetTrigger asChild><Button variant="ghost" size="icon" className="hidden h-11 w-11 border border-current bg-transparent p-0 text-inherit max-[721px]:inline-flex" aria-label={t('Buka menu','Open menu')}><Menu size={22} aria-hidden="true"/></Button></SheetTrigger><SheetContent closeLabel={t("Tutup menu","Close menu")}><SheetTitle asChild><span className="block pr-12 text-lg font-semibold">{t('Navigasi','Navigation')}</span></SheetTitle><SheetDescription className="sr-only">{t('Pilih halaman atau hubungi saya.','Choose a page or contact me.')}</SheetDescription><div role="navigation" className="mobile-nav mt-6 flex flex-col items-stretch gap-1" aria-label={t('Navigasi mobile','Mobile navigation')}>{[['tentang','Tentang','About'],['proses','Proses','Process'],['proyek','Proyek','Work']].map(([id,a,b])=><SheetClose asChild key={id}><a className="block rounded-md px-3 py-3 text-neutral-900 hover:bg-neutral-100 aria-[current=location]:bg-neutral-100 aria-[current=location]:font-semibold" href={sectionPath(id)} aria-current={activeNav===id?'location':undefined} onClick={()=>{if(!project&&hash==='#/'+id)setTimeout(()=>{const section=document.getElementById(id);if(section)window.scrollTo({top:section.getBoundingClientRect().top+window.scrollY-(headerRef.current?.offsetHeight||0)-16,behavior:reduceMotion?'auto':'smooth'})},50)}}>{t(a,b)}</a></SheetClose>)}<SheetClose asChild><a className="flex items-center gap-2 rounded-md px-3 py-3 text-neutral-900 hover:bg-neutral-100" href="https://wa.me/628999999367" target="_blank" rel="noopener noreferrer"><SiWhatsapp aria-hidden="true"/>{t('Kontak','Contact')}</a></SheetClose></div></SheetContent></Sheet>
 </div></header></div>
 <main>{route.type==='not-found'?<section className="wrap route-not-found"><h1>{t('Halaman tidak ditemukan','Page not found')}</h1><p>{t('Alamat proyek atau halaman ini tidak tersedia.','This project or page address is not available.')}</p><Button asChild><a href={sectionPath("proyek")}>{t('Lihat daftar proyek','View projects')}</a></Button></section>:project?<Card asChild className="rounded-lg border border-neutral-200 bg-white shadow-none"><article className="wrap detail-page">
  <Breadcrumb className="mb-7"><BreadcrumbList><BreadcrumbItem><BreadcrumbLink href={homePath}>{t('Beranda','Home')}</BreadcrumbLink></BreadcrumbItem><BreadcrumbSeparator/><BreadcrumbItem><BreadcrumbLink href={sectionPath("proyek")}>{t('Proyek','Projects')}</BreadcrumbLink></BreadcrumbItem><BreadcrumbSeparator/><BreadcrumbItem><BreadcrumbPage>{project.name}</BreadcrumbPage></BreadcrumbItem></BreadcrumbList></Breadcrumb>
  <div className="detail-heading"><h1>{project.name}</h1><p className="detail-summary">{summary(project)}</p></div>
  <div className="detail-layout">
  <section className="detail-gallery" aria-label={t('Tampilan proyek','Project screenshots')}>
   {screenshots.length>1 ? <Carousel key={project.id} setApi={setCarouselApi} opts={{duration:reduceMotion?0:25}} aria-label={t('Galeri gambar proyek','Project image gallery')}>
    <CarouselContent autoHeight>{screenshots.map((image,index)=><CarouselItem key={image} aria-label={(index+1)+' / '+screenshots.length} aria-hidden={index!==activeSlide}>
     <Button variant="ghost" tabIndex={index===activeSlide?0:-1} className="mx-auto block h-auto max-w-full cursor-zoom-in overflow-hidden rounded-md bg-neutral-100 p-0" aria-label={t('Perbesar','Enlarge')+' '+project.name+' '+(index+1)} onClick={event=>{previewTriggerRef.current=event.currentTarget;setPreview(image)}}><img className="block h-auto max-w-full" src={image} alt={project.name+' / '+(index+1)}/></Button>
    </CarouselItem>)}</CarouselContent>
    <figure className="detail-shot"><figcaption><span aria-live="polite">{project.name} {activeSlide===0?'— Dashboard':t('— Portal pasien','— Patient portal')}</span><span>{t('Klik untuk memperbesar','Click to enlarge')} ↗</span></figcaption></figure>
    <div className="detail-slider-controls"><CarouselPrevious label={t('Gambar sebelumnya','Previous image')}/><span aria-live="polite">{activeSlide+1} / {screenshots.length}</span><CarouselNext label={t('Gambar berikutnya','Next image')}/></div>
   </Carousel> : <figure className={project.id==='cat2catch'?'detail-shot portrait-shot':'detail-shot'}>
    <Button variant="ghost" className="mx-auto block h-auto max-w-full cursor-zoom-in overflow-hidden rounded-md bg-neutral-100 p-0" aria-label={t('Perbesar','Enlarge')+' '+project.name+' 1'} onClick={event=>{previewTriggerRef.current=event.currentTarget;setPreview(screenshots[0])}}><img className="block h-auto max-w-full" src={screenshots[0]} alt={project.name+' / 1'}/></Button>
    <figcaption><span>{project.name}</span><span>{t('Klik untuk memperbesar','Click to enlarge')} ↗</span></figcaption>
   </figure>}
  </section>
  <div className="detail-content">
  <div className="detail-info">
   <PuzzleReveal direction={-1} delay={0}><section><h2>{t('Latar belakang','Background')}</h2><p className="detail-description">{details.background}</p></section></PuzzleReveal>
   <PuzzleReveal direction={1} delay={0.06}><section><h2>{t('Alur utama','Main workflow')}</h2><ol className="detail-list">{details.flow.map(item=><li key={item}>{item}</li>)}</ol></section></PuzzleReveal>
   <PuzzleReveal direction={-1} delay={0.12}><section><h2>{t('Aspek teknis','Technical details')}</h2><ul className="detail-list">{details.technical.map(item=><li key={item}>{item}</li>)}</ul></section></PuzzleReveal>
   <PuzzleReveal direction={1} delay={0.18}><section><h2>{t('Teknologi','Technology')}</h2><ul className="m-0 flex list-none flex-wrap gap-2 p-0">{project.tags.map(tag=><li key={tag}><Badge className="rounded-md border border-neutral-300 bg-transparent px-2.5 py-1.5 text-xs text-neutral-800 shadow-none">{tag}</Badge></li>)}</ul></section></PuzzleReveal>
  </div>
   {demoLinks.length>0&&<section className="detail-demo"><h2>{t('Demo Aplikasi','Application Demo')}</h2><div className="detail-demo-links">{demoLinks.map(([label,url])=><Button asChild key={url} className="bg-amber-300 text-neutral-950 hover:bg-amber-400"><a href={url}>{label}<ArrowRight size={16} aria-hidden="true"/></a></Button>)}</div></section>}
   {project.repo&&<div className="detail-actions"><Button asChild variant="secondary"><a href={project.repo}>{t('Kode sumber','Source code')} <ArrowRight size={16} aria-hidden="true"/></a></Button></div>}
  </div></div>
 </article></Card>:<>
 <motion.section className="wrap hero" initial={reduceMotion ? false : "hidden"} whileInView="visible" viewport={{ once: false, amount: "some" }}><motion.div className="photo" variants={heroItem(0,-1)}><img src={profilePhoto} alt="Andreas Alex"/></motion.div><div className="intro"><motion.h1 variants={heroItem(.16)}>Andreas Alex.</motion.h1><motion.div className="role" variants={heroItem(.26)}>Full Stack Developer</motion.div><motion.p variants={heroItem(.08)}>{t('Saya membangun aplikasi web dan mobile untuk pekerjaan sehari-hari: mengelola layanan klinik, menelusuri pengiriman, dan membantu tim melihat progres proyek.','I build web and mobile apps for everyday work: running clinic services, tracing shipments and tracking team progress.')}</motion.p></div></motion.section>{ribbon}
 <section id="tentang" className="section wrap">
  <PuzzleReveal direction={-1}><h2>{t('Tentang saya','About me')}</h2></PuzzleReveal>
  <div className="aboutBody">
   <PuzzleReveal direction={1} delay={.06}><p>{t('Saya mengembangkan aplikasi web dan mobile dari awal hingga siap digunakan. Saya memulai dengan memahami kebutuhan pengguna, merancang alur serta struktur data, lalu membangun dan menguji fitur yang saling terhubung. Melalui ClinicApp dan Relay, saya mengerjakan alur layanan pasien dan pengelolaan proyek yang melibatkan beberapa peran pengguna.','I build web and mobile applications from initial requirements through implementation and testing. I map user workflows and data structures, then connect and test the features that support them. In ClinicApp and Relay, I have worked on patient services and project workflows involving multiple user roles.')}</p></PuzzleReveal>
   <div className="columns about-columns">{[
    ['My Skills', ['React, Next.js, TypeScript', 'Node.js, Express, CodeIgniter', 'PostgreSQL, Prisma', 'Flutter, Dart, Figma'], ['React, Next.js, TypeScript', 'Node.js, Express, CodeIgniter', 'PostgreSQL, Prisma', 'Flutter, Dart, Figma']],
    ['Frontend', ['Memahami kebutuhan dan alur pengguna', 'Merancang antarmuka dan komponen', 'Menghubungkan API dan mengelola state', 'Menangani validasi, loading, error, responsivitas, dan aksesibilitas'], ['Understand user needs and workflows', 'Design interfaces and components', 'Connect APIs and manage state', 'Handle validation, loading, errors, responsiveness and accessibility']],
    ['Backend', ['Merancang data dan REST API', 'Menerapkan autentikasi dan otorisasi berbasis peran', 'Memvalidasi input dan menangani error', 'Memperhatikan keamanan, performa query, dan pengujian'], ['Design data models and REST APIs', 'Apply authentication and role-based authorization', 'Validate input and handle errors', 'Consider security, query performance and testing']],
   ] .map(([title,idItems,enItems],i)=><PuzzleReveal key={title} direction={i%2===0?-1:1} delay={i*.07}><div><h3>{title}</h3><ul>{(en?enItems:idItems).map(item=><li key={item}>{item}</li>)}</ul></div></PuzzleReveal>)}</div>
  </div>
 </section>
 <section id="proses" className="section dark"><div className="wrap"><PuzzleReveal direction={-1}><h2 className="center">{t('Cara saya bekerja','My working process')}</h2></PuzzleReveal><div className="steps">{(en?stagesEN:stagesID).map(([title,body],i)=><div className="step" key={i}><PuzzleReveal direction={-1}><h3><small>0{i+1}.</small>{title}</h3></PuzzleReveal><PuzzleReveal direction={1} delay={.08}><p>{body}</p></PuzzleReveal></div>)}</div></div></section>
 <div className="stats"><div className="wrap"><div className="stat-item"><PuzzleReveal direction={-1}><strong>2+</strong><span>{t('Tahun Pengalaman','Years of Experience')}</span></PuzzleReveal></div><div className="stat-item"><PuzzleReveal direction={1} delay={.08}><strong>S1</strong><span>{t('Informatika (ongoing)','Informatics (ongoing)')}</span></PuzzleReveal></div><div className="stat-item"><PuzzleReveal direction={-1} delay={.16}><strong>Problem Solver</strong></PuzzleReveal></div></div></div>
 <section className="section wrap"><PuzzleReveal direction={-1}><h2 className="center">{t('Perjalanan karir','Career journey')}</h2></PuzzleReveal><PuzzleReveal direction={1}><Card asChild className="career-card mx-auto mt-8 max-w-3xl rounded-lg border-0 bg-neutral-900 p-6 text-white shadow-none sm:p-8"><article><div className="career-heading flex flex-wrap items-start justify-between gap-3"><div className="career-role"><h3 className="text-xl font-bold leading-snug">Full Stack Developer Intern</h3><p className="text-sm font-medium text-neutral-300">PT DumbWays Indonesia Teknologi &middot; Depok</p></div><p className="text-sm text-neutral-300">{t('Juli 2026 – September 2026','July 2026 – September 2026')}</p></div><p className="max-w-2xl text-sm leading-relaxed text-neutral-200">{t('Mengembangkan Clinic Management System yang mencakup portal pasien, dashboard klinik, REST API, dan aplikasi mobile. Mengerjakan integrasi frontend, backend, dan database, termasuk autentikasi JWT, akses berdasarkan peran, serta asisten AI berbasis Ollama.','Developed a Clinic Management System spanning a patient portal, clinic dashboard, REST API, and mobile app. Connected the frontend, backend, and database, including JWT authentication, role-based access, and an Ollama-based AI assistant.')}</p></article></Card></PuzzleReveal></section>
 <section className="section wrap" id="proyek"><PuzzleReveal direction={-1}><h2>{t('Daftar proyek saya','My projects')}</h2></PuzzleReveal><div className="stories">{[[projects[0],clinicPatientImage],[projects[1],batchImage],[projects[2],relayImage],[projects[3],catImage],[projects[4],atriumImage]].map(([p,image],i)=><PuzzleReveal key={p.id} direction={i%2===0?-1:1} delay={(i%3)*.06}><Card asChild className="flex h-full min-w-0 flex-col overflow-hidden rounded-lg border border-neutral-200 bg-white p-2 shadow-none transition-colors hover:border-neutral-400"><a className="story" href={study(p)}><div className="overflow-hidden rounded-md"><img className="block aspect-[16/10] w-full object-cover object-top" loading="lazy" src={image} alt=""/></div><div className="flex min-w-0 flex-1 flex-col gap-2 px-2.5 pt-3.5 pb-2.5"><div className="story-heading"><h3 className="text-lg font-semibold leading-snug">{p.name}</h3><small className="text-xs text-neutral-600">{p.id === 'cat2catch' ? t('Aplikasi mobile', 'Mobile app') : t('Aplikasi web', 'Web app')}</small></div><p className="mt-3 mb-5 text-sm leading-relaxed text-neutral-700">{en?p.enText:p.idText}</p><footer className="mt-auto flex flex-wrap items-center justify-between gap-3"><div className="flex flex-wrap gap-1">{p.tags.slice(0, 2).map(tag => <Badge key={tag} className="rounded-sm border-0 bg-neutral-100 px-2 py-1 text-xs text-neutral-700 shadow-none">{tag}</Badge>)}</div><span className="rounded-md bg-blue-700 px-3 py-2 text-xs font-semibold text-white">{t('Detail proyek', 'Project details')}</span></footer></div></a></Card></PuzzleReveal>)}</div></section></>}</main>
 {ribbon}<footer className="wrap closing" id="kontak"><PuzzleReveal direction={-1}><h2>{t('Mari bekerja bersama.','Let’s work together.')}</h2></PuzzleReveal><PuzzleReveal direction={1} delay={.08}><a className="footer-email" href={'mailto:'+mail}><SiGmail aria-hidden="true" />{mail}</a></PuzzleReveal><div className="between foot"><span>Andreas Alex</span><div className="footLinks"><a href={gh}><SiGithub aria-hidden="true" />GitHub</a><a href="https://wa.me/628999999367" target="_blank" rel="noopener noreferrer"><SiWhatsapp aria-hidden="true" />WhatsApp</a></div><a href={homePath}>{t('Ke beranda','Home')} ↑</a></div></footer>
 {preview&&<ImageViewer image={preview} title={project?.name} language={lang} onClose={()=>setPreview(null)} returnFocusRef={previewTriggerRef}/>}</>
}

import { SiGmail, SiGithub, SiWhatsapp, SiReact, SiNextdotjs, SiTypescript, SiVite, SiTailwindcss, SiNodedotjs, SiExpress, SiHono, SiPhp, SiCodeigniter, SiPrisma, SiPostgresql, SiFlutter, SiDart } from 'react-icons/si'
