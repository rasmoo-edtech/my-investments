import { FiEye, FiEyeOff } from 'react-icons/fi'
import { FaRegAddressCard } from 'react-icons/fa'

import styles from './styles.module.scss'

interface UserInfoProps {
  username: string
  hasVisibleValues: boolean
  changeVisibleValues: () => void
}

export function UserInfo ({ username, hasVisibleValues, changeVisibleValues }: UserInfoProps) {
  return (
    <div className={styles.userInfo}>
      <div className={styles.avatar}>
        <div className={styles.avatar__icon}>
          <FaRegAddressCard size={24} />
        </div>

        <p className={styles.avatar__info}>
          Bem-vindo, <br />
          <strong>{username}</strong>
        </p>
      </div>

      <button
        type="button"
        onClick={changeVisibleValues}
        className={styles.userInfo__button}
      >
        {hasVisibleValues ? <FiEyeOff size={24} /> : <FiEye size={24} /> }
        <span>
          {hasVisibleValues ? 'Ocultar' : 'Mostrar'} valores
        </span>
      </button>
    </div>
  )
}
