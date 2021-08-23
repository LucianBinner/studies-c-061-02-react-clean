import { Footer, Header, Icon, IconName } from '@/presentation/components'
import React from 'react'
import Styles from './survey-list-styles.scss'

const SurveyList: React.FC = () => {
  return (
    <div className={Styles.surveyListWrap}>
      <Header />
      <div className={Styles.contentWrap}>
        <h2>Enquetes</h2>
        <ul>
          <li>
            <div className={Styles.surveyContent}>
              <Icon iconName={IconName.tumbUp} className={Styles.iconWrap} />
              <time>
                <span className={Styles.day}>22</span>
                <span className={Styles.month}>03</span>
                <span className={Styles.yar}>2021</span>
              </time>
              <p>Qual é o seu framework web favorito?</p>
            </div>
            <footer>Ver Resultado</footer>
          </li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <Footer />
    </div>
  )
}

export default SurveyList
