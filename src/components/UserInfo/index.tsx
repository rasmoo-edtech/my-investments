import { FiEye } from 'react-icons/fi'
import { FaRegAddressCard } from 'react-icons/fa'

import styles from './styles.module.scss'

interface UserInfoProps {
  username: string
}

export function UserInfo ({ username }: UserInfoProps) {
  return (
    <div className={styles.header_primeira_linha}>
        <div className={styles.perfil_usuario}>
          <div className={styles.perfil_imagem}>
              <FaRegAddressCard />
          </div>
          <div className={styles.perfil_informacoes}>
              <span className={styles.span_fino}>Bem-vindo,</span>
              <span className={styles.span_grosso}>{username}</span>
          </div>
      </div>

      <div className={styles.ocultar_valores}>
          <FiEye />
          <span>Ocultar Valores</span>
      </div>
    </div>
  )
}
