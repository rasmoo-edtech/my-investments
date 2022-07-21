import { Header } from '../Header'

import styles from './styles.module.scss'

interface LayoutProps {
  children: React.ReactNode
}

const USER_MOCK = {
  username: 'Leonardo Vargas',
  balance: 11661,
  invested: 27452
}

export function Layout ({ children }: LayoutProps) {
  return (
    <div className={styles.layout}>
      <Header
        username={USER_MOCK.username}
        balance={USER_MOCK.balance}
        invested={USER_MOCK.invested}
      />

      <main>
        {children}
      </main>
    </div>
  )
}
