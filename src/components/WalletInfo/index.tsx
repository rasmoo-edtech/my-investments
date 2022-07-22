import { FiPlus } from 'react-icons/fi'

import styles from './styles.module.scss'
import { useWallet } from '../../hooks/useWallet'
import { formattedCurrency } from '../../utils/format'

export function WalletInfo () {
  const { hasVisibleValues, balance, invested, total } = useWallet()

  return (
    <div className={styles.walletInfo}>
        <div>
            <p>Saldo da Conta</p>
            <strong>{hasVisibleValues ? formattedCurrency(balance) : '*****'}</strong>
            <button
                type="button"
                className={styles.walletInfo__button}
                onClick={() => console.log('ir para página de add saldo')}
            >
                <FiPlus size={26} />
            </button>
        </div>

        <div>
            <p>Total Investido</p>
            <strong>{hasVisibleValues ? formattedCurrency(invested) : '*****'}</strong>
        </div>

        <div>
            <p>Saldo Total</p>
            <strong>{hasVisibleValues ? formattedCurrency(total) : '*****'}</strong>
        </div>
    </div>
  )
}
