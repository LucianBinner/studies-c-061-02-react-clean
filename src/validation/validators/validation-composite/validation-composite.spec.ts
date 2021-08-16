import { mockFieldValidation } from '@/validation/test/mock-field-validation'
import { ValidationComposite } from './validation-composite'

describe('ValidationComposite', () => {
  test('Should return error if any validation fails', () => {
    const fieldValidationSpy = mockFieldValidation('any_field')
    fieldValidationSpy.error = new Error('first_error_message')
    const fieldValidationSpyTwo = mockFieldValidation('any_field')
    fieldValidationSpyTwo.error = new Error('second_error_message')
    const sut = new ValidationComposite([fieldValidationSpy, fieldValidationSpyTwo])
    const error = sut.validate('any_field', 'any_value')
    expect(error).toBe('first_error_message')
  })
})
