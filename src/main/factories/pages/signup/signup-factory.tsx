import React from 'react'
import { makeSignupValidation } from './signup-validation-factory'
import { SignUp } from '@/presentation/pages'
import { makeLocalUpdateCurrentAccount } from '@/main/factories/usecases/update-current-account/local-update-current-account-factory'
import { makeRemoteAddAccount } from '@/main/factories/usecases/add-account/remote-add-account-factory'

export const makeSignUp: React.FC = () => {
  return (
    <SignUp
      addAccount={makeRemoteAddAccount()}
      validation={makeSignupValidation()}
      updateCurrentAccount={makeLocalUpdateCurrentAccount()}
    />
  )
}
