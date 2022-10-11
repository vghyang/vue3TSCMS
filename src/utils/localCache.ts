class LocalCache {
  setCache(key: string, value: any) {
    window.localStorage.setItem(key, JSON.stringify(value))
  }
  getCache(key: string) {
    const reslut = window.localStorage.getItem(key)
    if (reslut) {
      return JSON.parse(reslut)
    }
  }
  deleteCache(key: string) {
    window.localStorage.removeItem(key)
  }
  clearCache() {
    localStorage.clear()
  }
}

export default new LocalCache()
