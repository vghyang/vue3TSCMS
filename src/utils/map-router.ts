import { IDataBread } from '@/base-ui/breadcurmb'
import { RouteRecordRaw } from 'vue-router'
export let fristMenu: any = null
export default function mapRoutersToMenu(menus: any[]) {
  const allRouters: RouteRecordRaw[] = []
  const meetRouters: RouteRecordRaw[] = []
  const allFiles = require.context('@/router/main', true, /\.ts$/)
  allFiles.keys().forEach((item) => {
    const route = require('../router/main' + item.split('.')[1])
    allRouters.push(route.default)
  })

  //添加菜单需要的route
  const recurseGetRouters = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        const activeRoute = allRouters.find((route) => {
          return route.path === menu.url
        })
        //获取第一个菜单 另外的地方需要
        if (!fristMenu) {
          fristMenu = menu
        }

        if (activeRoute) {
          meetRouters.push(activeRoute)
        }
      } else {
        recurseGetRouters(menu.children)
      }
    }
  }
  recurseGetRouters(menus)

  return meetRouters
}

//处理面包屑函数
export function mapRouterToBreadcurmbs(menus: any[], currentPath: string): IDataBread[] {
  const breadCurmbs: IDataBread[] = []
  mapRouterToMenu(menus, currentPath, breadCurmbs)
  return breadCurmbs
}

//处理跳转了某个路由就会获取该路由的菜单对象
export function mapRouterToMenu(
  menus: any[],
  currentPath: string,
  breadCurmbData?: IDataBread[]
): any {
  for (const menu of menus) {
    if (menu.type === 2) {
      if (menu.url === currentPath) {
        return menu
      }
    } else {
      const findMenu = mapRouterToMenu(menu.children, currentPath)
      if (findMenu) {
        breadCurmbData?.push({ name: menu.name, path: menu.url })
        breadCurmbData?.push({ name: findMenu.name, path: findMenu.url })
        return findMenu
      }
    }
  }
}

//获取所有的权限
export function getAllPermission(usersMeun: any[]) {
  const allPermiseeion: any[] = []
  function recursePermission(usersMeun: any[]) {
    for (const menu of usersMeun) {
      if (menu.type === 1 || menu.type === 2) {
        recursePermission(menu.children ?? [])
      } else {
        allPermiseeion.push(menu.permission)
      }
    }
  }
  recursePermission(usersMeun)
  return allPermiseeion
}
