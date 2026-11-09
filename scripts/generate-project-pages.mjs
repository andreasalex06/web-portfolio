import { mkdir, readFile, readdir, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import viteConfig from '../vite.config.js'
import { projectCatalog } from '../src/project-catalog.js'

const output = 'dist'
const origin = 'https://andreasalex06.github.io'
const base = viteConfig.base.endsWith('/') ? viteConfig.base : `${viteConfig.base}/`
const images = {
  clinicapp: 'clinic-dashboard-showcase-',
  'batch-tracer': 'batch-tracer-',
  relay: 'relay-',
  cat2catch: 'cat2catch-',
  atrium: 'atrium-interior-showcase-',
}
const escapeHtml = value => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
const template = await readFile(join(output, 'index.html'), 'utf8')
const assets = await readdir(join(output, 'assets'))

for (const project of projectCatalog) {
  const title = escapeHtml(`${project.name} | Andreas Alex`)
  const description = escapeHtml(project.idText)
  const url = `${origin}${base}proyek/${project.id}/`
  const image = assets.find(name => name.startsWith(images[project.id]))
  if (!image) throw new Error(`Missing image for ${project.id}`)
  const metadata = [
    `    <link rel="canonical" href="${url}" />`,
    '    <meta property="og:type" content="website" />',
    `    <meta property="og:title" content="${title}" />`,
    `    <meta property="og:description" content="${description}" />`,
    `    <meta property="og:url" content="${url}" />`,
    `    <meta property="og:image" content="${origin}${base}assets/${image}" />`,
    '    <meta name="twitter:card" content="summary_large_image" />',
  ].join('\n')
  const html = template
    .replace(/<title>.*?<\/title>/, `<title>${title}</title>`)
    .replace(/(<meta\s+name="description"\s+content=")[^"]*("\s*\/?>)/, `$1${description}$2`)
    .replace('</head>', `${metadata}\n  </head>`)
  const directory = join(output, 'proyek', project.id)
  await mkdir(directory, { recursive: true })
  await writeFile(join(directory, 'index.html'), html)
}
