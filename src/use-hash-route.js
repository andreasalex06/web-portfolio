import { useEffect, useState } from 'react'
import { resolveLocation } from './routes'

export function useHashRoute(projectIds) {
  const [hash, setHash] = useState(() => window.location.hash)

  useEffect(() => {
    const update = () => setHash(window.location.hash)
    window.addEventListener('hashchange', update)
    return () => window.removeEventListener('hashchange', update)
  }, [])

  return { hash, route: resolveLocation(hash, window.location.pathname, import.meta.env.BASE_URL, projectIds) }
}
