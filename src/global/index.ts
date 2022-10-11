import { App } from 'vue'
import { registProtype } from './registProtype'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
function registIcons(app: App) {
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
}
function registGlobal(app: App) {
  app.use(registProtype)
}

export { registIcons, registGlobal }
