import { useState } from 'react'

import { UserInfo } from '../UserInfo'
import { WalletInfo } from '../WalletInfo'

import styles from './styles.module.scss'

interface HeaderProps {
  username: string
  balance: number
  invested: number
}

export function Header ({ username, balance, invested }: HeaderProps) {
  const [hasVisibleValues, setHasVisibleValues] = useState<boolean>(false)

  const changeVisibleValues = (): void => {
    setHasVisibleValues(!hasVisibleValues)
  }

  return (
    <header className={styles.header}>
      <UserInfo
        username={username}
        changeVisibleValues={changeVisibleValues}
        hasVisibleValues={hasVisibleValues}
      />

      <WalletInfo
        balance={balance}
        invested={invested}
        hasVisibleValues={hasVisibleValues}
      />
    </header>
  )
}
