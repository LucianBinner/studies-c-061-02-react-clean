export interface FieldValidation {
  field: string
  error?: Error
  validate: (value: string) => Error
}
