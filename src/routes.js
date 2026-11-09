const sections = new Set(['tentang', 'proses', 'proyek', 'kontak'])

export function resolveHash(hash, projectIds) {
  const path = hash.replace(/^#\/?/, '')

  if (!path) return { type: 'home' }
  if (sections.has(path)) return { type: 'section', section: path }

  const match = /^studi\/([a-z0-9-]+)$/.exec(path)
  if (match && projectIds.includes(match[1])) {
    return { type: 'project', projectId: match[1] }
  }

  return { type: 'not-found' }
}

export const projectPath = projectId => `#/studi/${projectId}`

export function resolveLocation(hash, pathname, base, projectIds) {
  if (hash) return resolveHash(hash, projectIds)

  const root = base.endsWith('/') ? base : `${base}/`
  if (pathname === root || pathname === `${root}index.html`) return { type: 'home' }
  if (!pathname.startsWith(root)) return { type: 'not-found' }

  const match = /^proyek\/([a-z0-9-]+)\/?$/.exec(pathname.slice(root.length))
  return match && projectIds.includes(match[1])
    ? { type: 'project', projectId: match[1] }
    : { type: 'not-found' }
}

export function publicProjectPath(projectId, base) {
  const root = base.endsWith('/') ? base : `${base}/`
  return `${root}proyek/${projectId}/`
}
