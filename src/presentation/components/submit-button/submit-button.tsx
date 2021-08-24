import React, { useContext } from 'react'
import { FormContext } from '@/presentation/contexts'

type Props = {
  text: string
}

const Input: React.FC<Props> = ({ text }: Props) => {
  const { state } = useContext(FormContext)
  return (
    <div>
      <button
        data-testid="submit"
        disabled={state.isFormInvalid}
        type="submit"
      >
        {text}
      </button>
    </div>
  )
}

export default Input
