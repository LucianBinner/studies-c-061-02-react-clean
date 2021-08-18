import React from 'react'
import { makeSignupValidation } from './signup-validation-factory'
import { SignUp } from '@/presentation/pages'
import { makeLocalSaveAccessToken } from '@/main/factories/usecases/save-access-token/local-save-access-token-factory'
import { makeRemoteAddAccount } from '@/main/factories/usecases/add-account/remote-add-account-factory'

export const makeSignUp: React.FC = () => {
  return (
    <SignUp
      addAccount={makeRemoteAddAccount()}
      validation={makeSignupValidation()}
      saveAccessToken={makeLocalSaveAccessToken()}
    />
  )
}
