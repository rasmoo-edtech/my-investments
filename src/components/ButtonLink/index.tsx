import { AnchorHTMLAttributes } from 'react'

import styles from './styles.module.scss'

interface ButtonLink extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode
}

export function ButtonLink ({ children }: ButtonLink) {
  return (
    <a className={styles.buttonLink}>
      {children}
    </a>
  )
}
