import { LocalUpdateCurrentAccount } from './local-update-current-account'
import { SetStorageMock } from '@/data/tests'
import { UnexpectedError } from '@/domain/errors'
import faker from 'faker'
import { mockAccountModel } from '@/domain/test'

type SutTypes = {
  setStoragMock: SetStorageMock
  sut: LocalUpdateCurrentAccount
}

const makeSut = (): SutTypes => {
  const setStoragMock = new SetStorageMock()
  const sut = new LocalUpdateCurrentAccount(setStoragMock)
  return {
    sut,
    setStoragMock
  }
}

describe('LocalUpdateCurrentAccount', () => {
  test('Should call SetStorage with correct value', async () => {
    const { sut, setStoragMock } = makeSut()
    const account = mockAccountModel()
    await sut.save(account)
    expect(setStoragMock.key).toBe('account')
    expect(setStoragMock.value).toBe(JSON.stringify(account))
  })

  test('Should throw if SetStorage throws', async () => {
    const { sut, setStoragMock } = makeSut()
    jest.spyOn(setStoragMock, 'set').mockRejectedValueOnce(new Error())
    const promise = sut.save(mockAccountModel())
    await expect(promise).rejects.toThrow(new Error())
  })

  test('Should throw if account falsy', async () => {
    const { sut } = makeSut()
    const promise = sut.save(undefined)
    await expect(promise).rejects.toThrow(new UnexpectedError())
  })
})
