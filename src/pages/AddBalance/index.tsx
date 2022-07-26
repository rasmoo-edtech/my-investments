import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useWallet } from 'hooks/useWallet'
import { LayoutSimple } from 'components/LayoutSimple'
import { formattedCurrency, formattedNumber } from 'utils/format'

import styles from './styles.module.scss'

export function AddBalancePage () {
  const navigate = useNavigate()
  const { balance, updateBalance } = useWallet()
  const [newBalance, setBalance] = useState<string>('')

  const goToHomePage = () => {
    navigate('/')
  }

  const onSubmit = (event: FormEvent): void => {
    event.preventDefault()
    updateBalance(formattedNumber(newBalance))
    goToHomePage()
  }

  return (
    <LayoutSimple link="/" title="Adicionar saldo">
      <form className={styles.form} onSubmit={onSubmit}>
        <strong>Adicionar Valor</strong>
        <span className={styles.badge}>Saldo atual {formattedCurrency(balance)}</span>
        <input
          type="text"
          value={newBalance}
          placeholder="Adicionar novo saldo"
          onChange={e => setBalance(e.target.value)}
        />

        <footer className={styles.form__footer}>
          <button type="button" onClick={goToHomePage}>CANCELAR</button>
          <button type="submit">CONFIRMAR</button>
        </footer>
      </form>
    </LayoutSimple>
  )
}
