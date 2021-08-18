import { Validation } from '@/presentation/protocols/validation'
import { FieldValidation } from '@/validation/protocols/field-validation'

export class ValidationComposite implements Validation {
  private constructor(private readonly validatiors: FieldValidation[]) { }

  static build (validatiors: FieldValidation[]): ValidationComposite {
    return new ValidationComposite(validatiors)
  }

  validate(fieldName: string, input: object): string {
    const validators = this.validatiors.filter(validator => validator.field === fieldName)
    for (const validator of validators) {
      const error = validator.validate(input)
      if (error) {
        return error.message
      }
    }
  }
}
