import { Link } from 'react-router-dom'
import { FiEye, FiEyeOff } from 'react-icons/fi'
import { FaRegAddressCard } from 'react-icons/fa'

import styles from './styles.module.scss'
import { useWallet } from '../../hooks/useWallet'

export function UserInfo () {
  const { username, changeVisibleValues, hasVisibleValues } = useWallet()

  return (
    <div className={styles.userInfo}>
      <div className={styles.avatar}>
        <Link className={styles.avatar__icon} to="/">
          <FaRegAddressCard size={24} />
        </Link>

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
        {hasVisibleValues ? <FiEyeOff size={24} /> : <FiEye size={24} />}

        <span>{hasVisibleValues ? 'Ocultar' : 'Mostrar'} valores</span>
      </button>
    </div>
  )
}
