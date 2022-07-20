import { FaPlus } from 'react-icons/fa'

import styles from './styles.module.scss'

export function WalletInfo () {
  return (
    <div className={styles.header_segunda_linha}>
      <div className={styles.header_card}>
          <div className={styles.header_card_infos}>
              <span className={styles.span_fino}>Saldo da Conta</span>
              <span className={styles.span_grosso}>R$45.000</span>
          </div>
          <button>
              <FaPlus />
          </button>
      </div>

      <div className={styles.header_card}>
          <div className={styles.header_card_infos}>
              <span className={styles.span_fino}>Total Investido</span>
              <span className={styles.span_grosso}>R$45.000</span>
          </div>
      </div>

      <div className={styles.header_card}>
          <div className={styles.header_card_infos}>
              <span className={styles.span_fino}>Saldo Total</span>
              <span className={styles.span_grosso}>R$45.000</span>
          </div>
      </div>
  </div>
  )
}
