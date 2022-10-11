function usePermissions(pageName: string, type: string, allPermiseeion: string[]): boolean {
  return !!allPermiseeion.find((item) => {
    return item === `system:${pageName}:${type}`
  })
}
export default usePermissions
