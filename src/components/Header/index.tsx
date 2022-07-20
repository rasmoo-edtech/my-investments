import { UserInfo } from '../UserInfo'
import { WalletInfo } from '../WalletInfo'

import styles from './styles.module.scss'

interface HeaderProps {
  username: string
  balance: number
  invested: number
}

export function Header ({ username, balance, invested }: HeaderProps) {
  return (
    <header>
      <div className={styles.header_container}>
        <UserInfo username={username} />
        <WalletInfo />
      </div>
    </header>
  )
}
