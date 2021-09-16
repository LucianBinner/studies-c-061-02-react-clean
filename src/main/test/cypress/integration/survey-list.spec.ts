import * as Http from '../utils/http-mocks'
import * as Helper from '../utils/helpers'

const pathLogin = /surveys/

const mockUnexpectedError = (): void => Http.mockServerError(pathLogin, 'GET')

const mocAccessDeniedError = (): void => Http.mockForbiddenError(pathLogin, 'GET')

describe('SurveyList', () => {
  beforeEach(() => {
    cy.fixture('account').then(account => {
      Helper.setLocalStorageItem('account', account)
    })
  })

  it('Should present error on UnexpectedError', () => {
    mockUnexpectedError()
    cy.visit('')
    cy.getByTestId('error').should('contain.text', 'Algo de errado aconteceu. Tente novamente mais tarde.')
  })

  it('Should logout on AccessDeniedError', () => {
    mocAccessDeniedError()
    cy.visit('')
    Helper.testUrl('/login')
  })

  it('Should logout on logout link click', () => {
    mockUnexpectedError()
    cy.visit('')
    cy.getByTestId('logout').click()
    Helper.testUrl('/login')
  })
})
