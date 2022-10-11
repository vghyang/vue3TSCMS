import { IloginState } from '@/store/login/type'
import { IStystemState } from '@/store/main/stystem/type'
interface IRootState {
  roleList: any[]
  departmentList: any[]
}

interface IModuleWithRoot {
  loginModule: IloginState
  stystemModule: IStystemState
}

type StoreType = IRootState & IModuleWithRoot
export { IRootState, StoreType }
