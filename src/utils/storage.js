export default {
  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
  },
  get(key) {
    try {
      const value = localStorage.getItem(key)
      if (!value) null
      return JSON.parse(value)
    } catch {
      return null
    }
  },
  remove(key) {
    localStorage.removeItem(key)
  },
  hasKey(key) {
    return localStorage.hasOwnProperty(key)
  }
}