export function readLanguage() {
  try {
    return window.localStorage.getItem('portfolio-language') === 'en' ? 'en' : 'id'
  } catch {
    return 'id'
  }
}

export function saveLanguage(language) {
  try {
    window.localStorage.setItem('portfolio-language', language)
  } catch {
    // Language selection remains available for this session.
  }
}
