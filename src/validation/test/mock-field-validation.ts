import { FieldValidation } from '../protocols/field-validation'

export const mockFieldValidation = (field: string): FieldValidation => {
  class FieldValidationSpy implements FieldValidation {
    error: Error = null
    constructor(readonly field: string) {}
    validate(value: string): Error {
      return this.error
    }
  }
  return new FieldValidationSpy(field)
}
