import faker from 'faker'
import { LoadSurveyList } from '../usecases'

export const mockSurveyListModel = (): LoadSurveyList.Model[] => ([
  mockSurveyModel(),
  mockSurveyModel(),
  mockSurveyModel()
])

export const mockSurveyModel = (): LoadSurveyList.Model => ({
  id: faker.datatype.uuid(),
  question: faker.random.words(10),
  date: faker.date.recent(),
  didAnswer: faker.datatype.boolean()
})

export class LoadSurveyListSpy implements LoadSurveyList {
  callsCount = 0
  surveys = mockSurveyListModel()
  async loadAll(): Promise<LoadSurveyList.Model[]> {
    this.callsCount++
    return this.surveys
  }
}
