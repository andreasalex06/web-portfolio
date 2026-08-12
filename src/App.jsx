import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Code2,
  GitBranch,
  Mail,
  Menu,
  MonitorSmartphone,
  MapPin,
  PenTool,
  Phone,
  Send,
  Star,
  X,
} from 'lucide-react'

import profilePhoto from '@/assets/profile-andreas.png'
import backendImage from '@/assets/backend.png'
import clinic1Image from '@/assets/clinic1.png'
import clinic2Image from '@/assets/clinic2.png'
import clinic3Image from '@/assets/clinic3.png'
import clinic4Image from '@/assets/clinic4.png'
import clinic5Image from '@/assets/clinic5.png'
import clinic6Image from '@/assets/clinic6.png'
import clinic7Image from '@/assets/clinic7.png'
import frontendImage from '@/assets/frontend.png'
import postgresqlImage from '@/assets/postgresql.png'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const navItems = ['Home', 'About', 'Service', 'Project', 'Contact']

const services = [
  {
    title: 'Frontend Development',
    icon: PenTool,
    description: 'React, Vite, Tailwind CSS, Zustand, Axios, and responsive UI.',
    image: frontendImage,
    preview: ['React', 'Vite', 'Tailwind'],
  },
  {
    title: 'Backend API',
    icon: MonitorSmartphone,
    description: 'Express.js, TypeScript, REST API, JWT auth, Zod validation.',
    image: backendImage,
    preview: ['Express', 'JWT', 'Zod'],
    featured: true,
  },
  {
    title: 'Database & Dashboard',
    icon: Code2,
    description: 'PostgreSQL, Prisma ORM, relational modeling, search, pagination.',
    image: postgresqlImage,
    preview: ['Prisma', 'SQL', 'CRUD'],
  },
]

const experiences = [
  {
    company: 'ClinicApp',
    period: 'Fullstack Personal Project',
    role: 'Outpatient Clinic Management System',
    detail: 'Built patient, doctor, registration, queue, consultation, invoice, and patient history workflows with React, Express, Prisma, and PostgreSQL.',
  },
  {
    company: 'Mini E-Commerce Website',
    period: 'University Project',
    role: 'Laravel, PHP, MySQL, Bootstrap',
    detail: 'Built a responsive e-commerce website with authentication, product catalog, search/filter, inventory management, shopping cart, and early Figma design.',
  },
  {
    company: 'Ciputra University',
    period: 'August 2024 - Present',
    role: 'Bachelor of Informatics',
    detail: 'Relevant coursework: Website Design and Software Design.',
  },
]

const projects = [
  {
    title: 'ClinicApp',
    tags: ['React JS', 'Express JS', 'Prisma', 'PostgreSQL'],
    description: 'Outpatient clinic application with patient CRUD, role-based authorization, PDF invoices, search, pagination, and dark mode.',
    image: clinic1Image,
  },
]

const featuredProject = projects[0]

const clinicScreenshots = [
  { title: 'ClinicApp Dashboard', image: clinic1Image },
  { title: 'ClinicApp Patient Workflow', image: clinic2Image },
  { title: 'ClinicApp Registration', image: clinic3Image },
  { title: 'ClinicApp Queue', image: clinic4Image },
  { title: 'ClinicApp Consultation', image: clinic5Image },
  { title: 'ClinicApp Invoice', image: clinic6Image },
  { title: 'ClinicApp History', image: clinic7Image },
]

const clinicScreenshotSlides = Array.from(
  { length: Math.ceil(clinicScreenshots.length / 2) },
  (_, index) => clinicScreenshots.slice(index * 2, index * 2 + 2),
)

const testimonials = [
  'Able to build end-to-end features from UI components and API integration to database operations.',
  'Focused on responsive UI, data validation, dashboard workflows, and code structure that is easy to explain.',
]

const marqueeItems = [
  'React',
  'Express',
  'Dashboard',
  'PostgreSQL',
  'Tailwind',
  'Prisma',
  'TypeScript',
  'JWT Auth',
]

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
}

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

function SectionLabel({ children }) {
  return (
    <Badge className="mb-4 border-orange-200 bg-orange-50 text-orange-600">
      {children}
    </Badge>
  )
}

function GithubIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M12 2C6.48 2 2 6.58 2 12.22c0 4.52 2.87 8.35 6.84 9.7.5.09.68-.22.68-.49 0-.24-.01-1.05-.01-1.9-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.9 1.56 2.35 1.11 2.92.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.05 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.28 9.28 0 0 1 12 6.93c.85 0 1.7.12 2.5.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.92-2.34 4.79-4.57 5.04.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.59.69.49A10.09 10.09 0 0 0 22 12.22C22 6.58 17.52 2 12 2Z" />
    </svg>
  )
}

function ProjectScreenshot({ title, image }) {
  return (
    <div className="overflow-hidden rounded-lg border border-neutral-200 bg-neutral-50 p-3 shadow-sm">
      <div className="overflow-hidden rounded-md border border-neutral-200 bg-white">
        <img
          src={image}
          alt={`${title} screenshot`}
          className="aspect-[1.83/1] w-full object-cover object-top"
        />
      </div>
      <p className="mt-3 text-xs font-semibold text-neutral-900">{title}</p>
    </div>
  )
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [selectedService, setSelectedService] = useState(null)
  const [activeProjectSlide, setActiveProjectSlide] = useState(0)

  const closeMenu = () => setIsMenuOpen(false)
  const closeModal = () => setSelectedService(null)
  const goToPreviousProjectSlide = () => {
    setActiveProjectSlide((current) =>
      current === 0 ? clinicScreenshotSlides.length - 1 : current - 1,
    )
  }
  const goToNextProjectSlide = () => {
    setActiveProjectSlide((current) =>
      current === clinicScreenshotSlides.length - 1 ? 0 : current + 1,
    )
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 px-4 pb-2 pt-5">
        <nav className="mx-auto flex h-12 max-w-6xl items-center justify-between rounded-full bg-neutral-950 px-5 text-white shadow-xl shadow-neutral-950/10">
          <a href="#home" className="flex items-center gap-2 text-sm font-semibold">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-orange-500 text-xs">
              A
            </span>
            Andreas Alex
          </a>

          <div className="hidden items-center gap-7 text-xs text-white/72 md:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="transition hover:text-orange-400"
              >
                {item}
              </a>
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-white hover:bg-white/10 hover:text-white md:hidden"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'Close navigation' : 'Open navigation'}
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </Button>
        </nav>

        {isMenuOpen && (
          <button
            type="button"
            className="fixed inset-0 z-[-1] cursor-default bg-transparent md:hidden"
            aria-label="Close navigation"
            onClick={closeMenu}
          />
        )}

        <motion.div
          initial={false}
          animate={isMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className={`absolute left-4 right-4 top-[calc(100%-0.25rem)] mx-auto max-w-6xl overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950 p-2 text-white shadow-xl shadow-neutral-950/10 md:hidden ${
            isMenuOpen ? 'pointer-events-auto' : 'pointer-events-none hidden'
          }`}
        >
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={closeMenu}
              className="block rounded-xl px-4 py-3 text-sm font-medium text-white/76 transition hover:bg-white/8 hover:text-orange-400"
            >
              {item}
            </a>
          ))}
        </motion.div>
      </header>

      <section
        id="home"
        className="relative scroll-mt-24 px-4 pb-12 pt-8 sm:pb-16 sm:pt-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 32, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative mx-auto grid min-h-[560px] max-w-6xl items-center justify-items-center px-1 py-8 sm:px-3 sm:py-10 min-[800px]:grid-cols-[0.88fr_1.12fr] min-[1000px]:px-8"
        >
          <div className="relative z-10 mx-auto max-w-xl text-center min-[800px]:mx-0 min-[800px]:justify-self-start min-[800px]:text-left">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-orange-500">
              Fullstack Web Developer
            </p>
            <h1 className="text-balance text-4xl font-black leading-[1.08] tracking-normal text-neutral-950 sm:text-5xl lg:text-6xl">
              I'm Developer
              <br />
              <span className="text-neutral-950">Andreas Alex</span>
              <span className="text-orange-500">!</span>
            </h1>
            <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-muted-foreground sm:text-base min-[800px]:mx-0">
              Junior fullstack web developer focused on React.js, Express.js,
              PostgreSQL, Prisma ORM, REST API, authentication, and responsive
              dashboard workflows.
            </p>

            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row min-[800px]:justify-start">
              <a href="#about">
                <Button className="w-full rounded-md bg-orange-500 hover:bg-orange-600 sm:w-auto">
                  About Me
                </Button>
              </a>
              <a href="#project">
                <Button variant="secondary" className="w-full rounded-md bg-white sm:w-auto">
                  My Projects
                </Button>
              </a>
            </div>

            <a
              href="https://github.com/andreasalex06"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-orange-500 underline-offset-4 hover:underline"
            >
              <GithubIcon className="h-4 w-4" />
              github.com/andreasalex06
            </a>
          </div>

          <div className="relative mx-auto mt-10 aspect-[1.05/1] w-full max-w-[340px] sm:max-w-[430px] min-[800px]:mt-0 lg:max-w-[520px]">
            <div className="absolute inset-2 rounded-full border border-orange-200/80"></div>
            <div className="absolute inset-10 rounded-full border border-orange-200/70"></div>
            <span className="absolute right-5 top-8 h-3 w-3 rounded-full bg-orange-500 shadow-lg shadow-orange-500/40"></span>
            <div className="absolute inset-x-8 bottom-0 top-2 overflow-hidden rounded-t-[12rem] sm:inset-x-12">
              <img
                src={profilePhoto}
                alt="Andreas Alex profile"
                className="h-full w-full object-cover object-[52%_20%]"
              />
            </div>
          </div>
        </motion.div>
      </section>

      <section id="service" className="mx-auto max-w-6xl scroll-mt-24 px-5 pb-20 min-[1000px]:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
          className="rounded-2xl bg-neutral-950 p-5 text-white shadow-2xl shadow-neutral-950/20 md:p-8"
        >
          <div className="mb-7 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-2xl font-bold">
                My <span className="text-orange-500">Skills</span>
              </p>
            </div>
            <p className="max-w-md text-sm leading-6 text-white/58">
              Core skills from my CV: React frontend, Express backend,
              PostgreSQL/Prisma database, authentication, and dashboard workflows.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon

              return (
                <motion.div key={service.title} variants={fadeUp}>
                  <Card
                    className={`flex h-full flex-col overflow-hidden border-white/10 ${
                      service.featured
                        ? 'bg-orange-500 text-white'
                        : 'bg-white/10 text-white'
                    }`}
                  >
                    <CardHeader className="flex-1">
                      <div className="flex items-center justify-between">
                        <CardTitle>{service.title}</CardTitle>
                        <Icon size={22} />
                      </div>
                      <CardDescription
                        className={
                          service.featured ? 'text-white/82' : 'text-white/62'
                        }
                      >
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="mt-auto">
                      <div className="flex h-full min-h-[205px] flex-col rounded-lg bg-white/92 p-3 text-neutral-950">
                        <button
                          type="button"
                          className="mb-3 block w-full shrink-0 overflow-hidden rounded-md border border-neutral-200 bg-neutral-50 text-left transition hover:border-orange-300 hover:shadow-md hover:shadow-orange-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
                          aria-label={`Open ${service.title} image`}
                          onClick={() => setSelectedService(service)}
                        >
                          <div className="grid aspect-[1.7/1] place-items-center p-2">
                            <img
                              src={service.image}
                              alt={`${service.title} illustration`}
                              className="h-full w-full object-contain"
                            />
                          </div>
                        </button>
                        <div className="mt-auto flex min-h-9 items-center justify-between gap-3">
                          <div className="flex min-w-0 flex-nowrap gap-1.5 overflow-hidden">
                            {service.preview.map((item) => (
                              <span
                                key={item}
                                className="shrink-0 rounded-md bg-neutral-100 px-2 py-1 text-[10px] font-semibold text-neutral-700"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                          <Button
                            size="icon"
                            className="h-9 w-9 shrink-0 rounded-full bg-neutral-950 text-white hover:bg-orange-600"
                            aria-label={`Open ${service.title}`}
                          >
                            <ArrowUpRight size={18} />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </section>

      <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-5 pb-20 min-[1000px]:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div
            initial="hidden"
            whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
        >
            <h2 className="text-4xl font-black leading-tight">
              Projects & Education
            </h2>
          </motion.div>

          <div className="space-y-7">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.company}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                variants={fadeUp}
                transition={{ delay: index * 0.08 }}
                className="grid grid-cols-[24px_1fr] gap-x-4 md:grid-cols-[0.55fr_32px_1fr] md:gap-5"
              >
                <div className="relative flex justify-center md:order-2">
                  <span
                    className={`mt-1 h-4 w-4 rounded-full ${
                      index === 1 ? 'bg-neutral-950' : 'bg-orange-500'
                    }`}
                  ></span>
                  {index < experiences.length - 1 && (
                    <span className="absolute top-6 h-full min-h-28 w-px bg-neutral-200 md:min-h-20"></span>
                  )}
                </div>
                <div className="md:order-1">
                  <p className="font-bold">{experience.company}</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {experience.period}
                  </p>
                  <p className="mt-3 font-bold md:hidden">{experience.role}</p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {experience.detail}
                  </p>
                </div>
                <div className="hidden md:order-3 md:block">
                  <p className="font-bold">{experience.role}</p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {experience.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="project" className="scroll-mt-24 bg-white py-20">
        <div className="mx-auto max-w-6xl px-5 min-[1000px]:px-8">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h2 className="text-4xl font-black">
                Let's Have a Look at my <span className="text-orange-500">Projects</span>
              </h2>
            </div>
            <Button className="w-fit rounded-full bg-orange-500 hover:bg-orange-600">
              See More
              <ArrowUpRight size={17} />
            </Button>
          </div>

          <div className="grid gap-5 lg:grid-cols-[40px_1fr_40px] lg:items-center">
            <Button
              variant="secondary"
              size="icon"
              className="hidden rounded-full bg-neutral-950 text-white hover:bg-neutral-800 lg:inline-flex"
              aria-label="Previous project screenshots"
              onClick={goToPreviousProjectSlide}
            >
              <ArrowLeft size={18} />
            </Button>

            <motion.div
              key={activeProjectSlide}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.28, ease: 'easeOut' }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.08}
              onDragEnd={(_, info) => {
                if (info.offset.x < -60) {
                  goToNextProjectSlide()
                }

                if (info.offset.x > 60) {
                  goToPreviousProjectSlide()
                }
              }}
              className="grid cursor-grab gap-5 active:cursor-grabbing sm:grid-cols-2"
            >
              {clinicScreenshotSlides[activeProjectSlide].map((screenshot) => (
                <ProjectScreenshot
                  key={screenshot.title}
                  title={screenshot.title}
                  image={screenshot.image}
                />
              ))}
            </motion.div>

            <Button
              size="icon"
              className="hidden rounded-full bg-orange-500 hover:bg-orange-600 lg:inline-flex"
              aria-label="Next project screenshots"
              onClick={goToNextProjectSlide}
            >
              <ArrowRight size={18} />
            </Button>
          </div>

          <div className="mt-5 flex items-center justify-center gap-3">
            <Button
              variant="secondary"
              size="icon"
              className="h-9 w-9 rounded-full bg-neutral-950 text-white hover:bg-neutral-800 lg:hidden"
              aria-label="Previous project screenshots"
              onClick={goToPreviousProjectSlide}
            >
              <ArrowLeft size={17} />
            </Button>
            <div className="flex items-center gap-2">
              {clinicScreenshotSlides.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={`Show project slide ${index + 1}`}
                  aria-current={activeProjectSlide === index ? 'true' : undefined}
                  className={`h-2.5 rounded-full transition ${
                    activeProjectSlide === index
                      ? 'w-7 bg-orange-500'
                      : 'w-2.5 bg-neutral-300 hover:bg-neutral-400'
                  }`}
                  onClick={() => setActiveProjectSlide(index)}
                />
              ))}
            </div>
            <Button
              size="icon"
              className="h-9 w-9 rounded-full bg-orange-500 hover:bg-orange-600 lg:hidden"
              aria-label="Next project screenshots"
              onClick={goToNextProjectSlide}
            >
              <ArrowRight size={17} />
            </Button>
          </div>

          <div className="mx-auto mt-7 max-w-2xl text-center">
            <div className="mb-3 flex justify-center gap-2">
              {featuredProject.tags.map((tag) => (
                <Badge key={tag} className="bg-neutral-50">
                  {tag}
                </Badge>
              ))}
            </div>
            <h3 className="text-xl font-bold">
              {featuredProject.title} - Outpatient Clinic Management System
            </h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              {featuredProject.description}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 min-[1000px]:px-8">
        <div className="rounded-2xl bg-neutral-950 p-6 text-white md:p-10">
          <div className="mb-8 text-center">
            <SectionLabel>Detail Skills</SectionLabel>
            <h2 className="text-3xl font-black">
              Professional <span className="text-orange-500">Highlights</span>
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {testimonials.map((text, index) => (
              <motion.div
                key={text}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                variants={fadeUp}
                transition={{ delay: index * 0.08 }}
                className="rounded-lg border border-white/10 bg-white/8 p-5"
              >
                <div className="mb-4 flex gap-1 text-orange-500">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star key={starIndex} size={15} fill="currentColor" />
                  ))}
                </div>
                <p className="text-sm leading-7 text-white/72">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-24 pb-20">
        <div className="mx-auto max-w-6xl px-5 text-center min-[1000px]:px-8">
          <h2 className="mx-auto max-w-2xl text-4xl font-black leading-tight">
            Have an Awesome Project Idea? <span className="text-orange-500">Let's Discuss</span>
          </h2>
          <div className="mx-auto mt-7 flex max-w-xl items-center gap-2 rounded-full border border-neutral-200 bg-white p-2 shadow-lg shadow-neutral-950/5">
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-orange-50 text-orange-500">
              <Mail size={18} />
            </div>
            <input
              className="min-w-0 flex-1 bg-transparent text-sm outline-none"
              placeholder="Enter your email"
              type="email"
            />
            <Button className="rounded-full bg-orange-500 hover:bg-orange-600">
              <Send size={17} />
              Contact Me
            </Button>
          </div>

          <div className="mx-auto mt-5 flex max-w-3xl flex-wrap justify-center gap-3 text-sm text-muted-foreground">
            <a
              href="mailto:andreasalexyz@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm transition hover:text-orange-500"
            >
              <Mail size={15} />
              andreasalexyz@gmail.com
            </a>
            <a
              href="tel:08999999367"
              className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm transition hover:text-orange-500"
            >
              <Phone size={15} />
              08999999367
            </a>
            <a
              href="https://github.com/andreasalex06"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm transition hover:text-orange-500"
            >
              <GitBranch size={15} />
              github.com/andreasalex06
            </a>
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
              <MapPin size={15} />
              Bekasi 17610
            </span>
          </div>

          <div className="mt-8 overflow-hidden rounded-full border-y border-orange-200 bg-orange-500 py-3 text-white">
            <motion.div
              animate={{ x: ['0%', '-25%'] }}
              transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
              className="flex w-max whitespace-nowrap text-sm font-semibold"
            >
              {[0, 1, 2, 3].map((group) => (
                <div
                  key={group}
                  className="flex shrink-0 items-center gap-5 pr-5"
                  aria-hidden={group === 1 ? 'true' : undefined}
                >
                  {marqueeItems.map((item) => (
                    <span key={`${group}-${item}`}>+ {item}</span>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {selectedService && (
        <div
          className="fixed inset-0 z-[70] grid place-items-center bg-neutral-950/76 px-4 py-6 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedService.title} image preview`}
          onClick={closeModal}
        >
          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="relative w-full max-w-4xl rounded-lg border border-white/12 bg-white p-3 shadow-2xl shadow-neutral-950/40"
            onClick={(event) => event.stopPropagation()}
          >
            <Button
              type="button"
              size="icon"
              className="absolute right-3 top-3 z-10 h-9 w-9 rounded-full bg-neutral-950/86 text-white hover:bg-orange-600"
              aria-label="Close image preview"
              onClick={closeModal}
            >
              <X size={18} />
            </Button>
            <div className="overflow-hidden rounded-md bg-neutral-50">
              <img
                src={selectedService.image}
                alt={`${selectedService.title} illustration preview`}
                className="max-h-[78vh] w-full object-contain"
              />
            </div>
            <p className="mt-3 text-sm font-semibold text-neutral-900">
              {selectedService.title}
            </p>
          </motion.div>
        </div>
      )}
    </main>
  )
}

export default App
