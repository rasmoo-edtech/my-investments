import { isPast } from 'date-fns/esm'
import { useMemo } from 'react'
import { Action } from '../../types/action'
import { formattedCurrency, formattedDate } from '../../utils/format'

import styles from './styles.module.scss'

interface ActionCardProps extends Action {
  isBuy?: boolean
}

export function ActionCard ({ isBuy = false, ...action }: ActionCardProps) {
  const modifierClass: string = useMemo(() => {
    if (isBuy) return ''
    return isPast(new Date(action.dueDate)) ? styles.action__disabled : ''
  }, [action.dueDate, isBuy])

  return (
    <div className={`${styles.action} ${modifierClass}`}>
      <div className={styles.action__info}>
        <h1>
          {action.name}<span>CDB</span>
        </h1>

        <p>IPCA + {action.ipca}</p>
      </div>

      <footer className={styles.action__footer}>
        <p>
          <strong>Valor investido:</strong>
          {formattedCurrency(action.minValue)}
        </p>
        <p>
          <strong>Vencimento:</strong>
          {formattedDate(new Date(action.dueDate))}
        </p>

        {isBuy && (
        <button>
          Comprar
        </button>)}
      </footer>
  </div>
  )
}
