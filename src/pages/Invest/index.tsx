import { useParams, useNavigate } from 'react-router-dom'
import { FormEvent, useEffect, useMemo, useState } from 'react'

import { LayoutSimple } from '../../components/LayoutSimple'

import api from '../../service/api'
import styles from './styles.module.scss'
import { useWallet } from '../../hooks/useWallet'
import { formattedCurrency } from '../../utils/format'
import { Action, ActionLocalStorage } from '../../types/action'

export function InvestPage () {
  const params = useParams()
  const navigate = useNavigate()
  const { balance, updateInvestments } = useWallet()

  const [quantAction, setQuantAction] = useState<number>(0)
  const [action, setAction] = useState<Action | null>(null)
  const [actions, setActions] = useState<ActionLocalStorage[]>([])

  const loadAction = async () => {
    const response = await api.get<Action>(`investments/${params.id}`)
    setAction(response.data)
  }

  useEffect(() => {
    loadAction()

    const localActions = localStorage.getItem('actions')

    if (localActions) {
      setActions(JSON.parse(localActions))
    }
  }, [])

  const cancelInvestment = (): void => {
    console.log('cancelInvestment')
  }

  const maxQuantAction = useMemo(() => {
    if (action) {
      return Math.floor(balance / action.minValue)
    }

    return 0
  }, [action?.minValue])

  const buyInvestment = (event: FormEvent): void => {
    event.preventDefault()
    if (!action) return

    if (quantAction <= maxQuantAction) {
      updateInvestments({
        ...action,
        quant: quantAction
      })
    }

    setQuantAction(0)
    navigate('/meus-investimentos')
  }

  return (
    <LayoutSimple link="/investir" title="Investir">
      {action && (
        <div className={styles.invest}>
          <div className={styles.action}>
            <span className={styles.badge}>CDB</span>
            <h1>{action.name}</h1>
            <p>IPCA + {action.tax}%</p>
            <div>
              <p>
                <strong>Valor mínimo:</strong> {formattedCurrency(action.minValue)}
              </p>
              <p>
                <strong>Vencimento:</strong> {new Date(action.time).toLocaleDateString()}
              </p>
            </div>
          </div>

          <form className={styles.form} onSubmit={buyInvestment}>
            <strong>Adicionar Valor</strong>
            <span className={styles.badge}>Saldo atual {formattedCurrency(balance)}</span>
            <input
              type="number"
              max={maxQuantAction}
              value={quantAction}
              placeholder="Adicionar quantia"
              onChange={e => setQuantAction(Number(e.target.value))}
            />

            <footer className={styles.form__footer}>
              <button type="button" onClick={cancelInvestment} >CANCELAR</button>
              <button type="submit">CONFIRMAR</button>
            </footer>
          </form>
        </div>
      )}
    </LayoutSimple>
  )
}
