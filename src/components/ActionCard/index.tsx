import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { isPast, parseISO } from 'date-fns/esm'

import styles from './styles.module.scss'
import { Action } from '../../types/action'
import { formattedCurrency, formattedDate } from '../../utils/format'

interface ActionCardProps extends Action {
  isBuy?: boolean
}

export function ActionCard ({ isBuy = false, ...action }: ActionCardProps) {
  const modifierClass: string = useMemo(() => {
    if (isBuy) {
      return ''
    }

    return isPast(parseISO(action.time)) ? styles.action__disabled : ''
  }, [action.time, isBuy])

  return (
    <div className={`${styles.action} ${modifierClass}`}>
      <div className={styles.action__info}>
        <h1>
          {action.name}
          {!isBuy && <span>{action.quant}</span>}
        </h1>

        <p>IPCA + {action.tax}</p>
      </div>

      <footer className={styles.action__footer}>
        <div>
          <p>
            <strong>Valor da ação:</strong>
            {formattedCurrency(action.minValue)}
          </p>
          {!isBuy && (
            <p>
              <strong>Total investido:</strong>
              {formattedCurrency(action.minValue * action.quant)}
            </p>
          )}
          <p>
            <strong>Vencimento:</strong>
            {formattedDate(new Date(action.time))}
          </p>
        </div>

        {isBuy && (
          <Link to={`/investir/${action.id}`}>
            Comprar
          </Link>
        )}
      </footer>
  </div>
  )
}
