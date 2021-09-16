import * as Helper from '../utils/helpers'

describe('Private Route', () => {
  it('Should logout with survey-list has no token', () => {
    cy.visit('')
    Helper.testUrl('/login')
  })
})
