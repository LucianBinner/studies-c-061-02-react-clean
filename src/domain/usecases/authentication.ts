import { AccountModel } from '@/domain/models/account-model'

export type AuthenticationParams = {
  email: string
  password: string
}

export interface Authentication {
  params?: AuthenticationParams
  callsCount?: number
  account?: AccountModel
  auth (params: AuthenticationParams): Promise<AccountModel>
}
