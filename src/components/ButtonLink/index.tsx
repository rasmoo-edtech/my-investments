import { Link, LinkProps } from 'react-router-dom'

import styles from './styles.module.scss'

interface ButtonLink extends LinkProps {
  children: React.ReactNode
}

export function ButtonLink ({ children, ...rest }: ButtonLink) {
  return (
    <Link className={styles.buttonLink} {...rest}>
      {children}
    </Link>
  )
}
