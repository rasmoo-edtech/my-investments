import { Link } from 'react-router-dom'
import { FaChevronLeft } from 'react-icons/fa'

import styles from './styles.module.scss'

interface LayoutSimpleProps {
  title: string
  link: string
  children: React.ReactNode
}

export function LayoutSimple ({ title, link, children }: LayoutSimpleProps) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.header__content}>
          <Link to={link}>
            <FaChevronLeft size={18} />
            {title}
          </Link>
        </div>
      </header>

      <main className={styles.main}>
        {children}
      </main>
    </div>
  )
}
