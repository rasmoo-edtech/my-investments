import { useMemo } from 'react'
import { FiPlus } from 'react-icons/fi'

import styles from './styles.module.scss'
import { formattedCurrency } from '../../utils/format'

interface WalletInfoProps {
    balance: number
    invested: number
    hasVisibleValues: boolean
}

export function WalletInfo ({ balance, invested, hasVisibleValues }: WalletInfoProps) {
  const totalWallet: number = useMemo(() => balance + invested, [balance, invested])

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
            <strong>{hasVisibleValues ? formattedCurrency(totalWallet) : '*****'}</strong>
        </div>
    </div>
  )
}
