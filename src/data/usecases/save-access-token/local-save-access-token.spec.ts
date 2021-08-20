import { LocalSaveAccessToken } from './local-save-access-token'
import { SetStorageMock } from '@/data/tests'
import { UnexpectedError } from '@/domain/errors'
import faker from 'faker'

type SutTypes = {
  setStoragMock: SetStorageMock
  sut: LocalSaveAccessToken
}

const makeSut = (): SutTypes => {
  const setStoragMock = new SetStorageMock()
  const sut = new LocalSaveAccessToken(setStoragMock)
  return {
    sut,
    setStoragMock
  }
}

describe('LocalSaveAccessToken', () => {
  test('Should call SetStorage with correct value', async () => {
    const { sut, setStoragMock } = makeSut()
    const accessToken = faker.datatype.uuid()
    await sut.save(accessToken)
    expect(setStoragMock.key).toBe('accessToken')
    expect(setStoragMock.value).toBe(accessToken)
  })

  test('Should throw if SetStorage throws', async () => {
    const { sut, setStoragMock } = makeSut()
    jest.spyOn(setStoragMock, 'set').mockRejectedValueOnce(new Error())
    const promise = sut.save(faker.datatype.uuid())
    await expect(promise).rejects.toThrow(new Error())
  })

  test('Should throw if accessToken falsy', async () => {
    const { sut } = makeSut()
    const promise = sut.save(undefined)
    await expect(promise).rejects.toThrow(new UnexpectedError())
  })
})
