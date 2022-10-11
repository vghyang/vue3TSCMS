import { App } from 'vue'
import formatUtc from '@/utils/dataFormat'
export function registProtype(app: App) {
  app.config.globalProperties.$filters = {
    formatUtcTime(value: string) {
      return formatUtc(value)
    }
  }
}
