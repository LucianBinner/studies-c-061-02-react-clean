import { Logo } from '@/presentation/components'
import { useLogout } from '@/presentation/hooks'
import React, { memo } from 'react'
import Styles from './header-styles.scss'

const Header: React.FC = () => {
  const logout = useLogout()
  const buttonLogout = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>): void => {
    event.preventDefault()
    logout()
  }
  return (
    <header className={Styles.headerWrap}>
      <div className={Styles.headerContent}>
        <Logo />
        <div className={Styles.logoutWrap}>
          <span>Lucian</span>
          <a data-testid="logout" href="#" onClick={buttonLogout}>Sair</a>
        </div>
      </div>
    </header>
  )
}

export default memo(Header)
