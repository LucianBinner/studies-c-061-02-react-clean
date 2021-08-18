import React, { useContext } from 'react'
import Context from '@/presentation/contexts/form/form-context'

type Props = {
  text: string
}

const Input: React.FC<Props> = ({ text }: Props) => {
  const { state } = useContext(Context)
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
