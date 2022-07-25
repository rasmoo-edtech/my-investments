import { FaInfoCircle } from 'react-icons/fa'

import styles from './styles.module.scss'

interface BoxAlertProps {
  children: React.ReactNode
}

export function BoxAlert ({ children }: BoxAlertProps) {
  return (
    <div className={styles.boxAlert}>
      <FaInfoCircle />
      <p>{children}</p>
    </div>
  )
}
