import { SurveyModel } from '../models'
import faker from 'faker'

export const mockSurveyListModel = (): SurveyModel[] => ([
  mockSurveyModel(),
  mockSurveyModel(),
  mockSurveyModel()
])

export const mockSurveyModel = (): SurveyModel => ({
  id: faker.datatype.uuid(),
  question: faker.random.words(10),
  answers: [{
    answer: faker.random.words(4),
    image: faker.internet.url()
  }, {
    answer: faker.random.words(5)
  }],
  date: faker.date.recent()
})
