import { UserInfo } from 'components/UserInfo'
import { WalletInfo } from 'components/WalletInfo'

import styles from './styles.module.scss'

interface LayoutProps {
  children: React.ReactNode
}

export function Layout ({ children }: LayoutProps) {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <div className={styles.header__content}>
          <UserInfo />
          <WalletInfo />
        </div>
      </header>

      <main>
        {children}
      </main>
    </div>
  )
}
