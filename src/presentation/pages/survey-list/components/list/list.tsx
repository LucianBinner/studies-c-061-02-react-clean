import { ItemEmpty, Item, SurveyContext } from '@/presentation/pages/survey-list/components'
import { SurveyModel } from '@/domain/models'
import Styles from './list-styles.scss'
import React, { useContext } from 'react'

const List: React.FC = () => {
  const { state } = useContext(SurveyContext)
  return (
    <ul className={Styles.listWrap} data-testid="survey-list">
      {state.surveys.length
        ? state.surveys.map((survey: SurveyModel) => <Item key={survey.id} survey={survey} />)
        : <ItemEmpty />
      }
    </ul>
  )
}

export default List
