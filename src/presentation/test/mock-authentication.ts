import { AccountModel } from '@/domain/models'
import { mockAccountModel } from '@/domain/test'
import { Authentication, AuthenticationParams } from '@/domain/usecases'

export const mockAuthentication = (): Authentication => {
  class AuthenticationSpy implements Authentication {
    account = mockAccountModel()
    params: AuthenticationParams
    callsCount = 0
    async auth(params: AuthenticationParams): Promise<AccountModel> {
      this.params = params
      this.callsCount++
      return Promise.resolve(this.account)
    }
  }
  return new AuthenticationSpy()
}
