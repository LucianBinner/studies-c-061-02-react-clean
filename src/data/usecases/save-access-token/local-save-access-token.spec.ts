import { SetStorageMock } from '@/data/tests/mock-storage'
import { LocalSaveAccessToken } from './local-save-access-token'
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

  test('Should call SetStorage with correct value', async () => {
    const { sut, setStoragMock } = makeSut()
    const accessToken = faker.datatype.uuid()
    await sut.save(accessToken)
    expect(setStoragMock.key).toBe('accessToken')
    expect(setStoragMock.value).toBe(accessToken)
  })
})
