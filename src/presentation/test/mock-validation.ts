import { Validation } from '@/presentation/protocols/validation'

export const mockValidation = (): Validation => {
  class ValidationStub implements Validation {
    errorMessage: string
    validate(fieldName: string, fieldValue: string): string {
      return this.errorMessage
    }
  }
  return new ValidationStub()
}
