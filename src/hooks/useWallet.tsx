import { useContext, createContext, useMemo, useState, useEffect } from 'react'

import { Action } from '../types/action'
import { extortInvestment, getLocalInvestments, updateLocalInvestments } from '../utils/investmets'

interface WalletContextProps {
  username: string
  balance: number
  invested: number
  total: number
  hasVisibleValues: boolean
  changeVisibleValues: () => void
  actions: Action[]
  updateInvestments: (newAction: Action) => void
  onSellAction: (actionId: string) => void
  updateBalance: (someBalance: number) => void
}

interface WalletProviderProps {
  children: React.ReactNode
}

const WalletContext = createContext({} as WalletContextProps)

export function WalletProvider ({ children }: WalletProviderProps) {
  const username = 'Leonardo Vargas'
  const [balance, setBalance] = useState<number>(0)
  const [invested, setInvested] = useState<number>(0)
  const [actions, setActions] = useState<Action[]>([])

  const total: number = useMemo(() => balance + invested, [balance, invested])

  const [hasVisibleValues, setHasVisibleValues] = useState<boolean>(true)

  const changeVisibleValues = (): void => {
    setHasVisibleValues(!hasVisibleValues)
  }

  const loadInvestments = async () => {
    const localAction = await getLocalInvestments()
    setActions(localAction)
  }

  const updateInvestments = (newAction: Action): void => {
    const newInvestments = updateLocalInvestments({ actions, newAction })
    setActions(newInvestments)
  }

  const loadBalance = (): void => {
    const isBalance = localStorage.getItem('balance')

    if (isBalance) {
      setBalance(Number(isBalance))
    }
  }

  useEffect(() => {
    loadInvestments()
    loadBalance()
  }, [])

  const onSellAction = (actionId: string): void => {
    const action = actions.find(action => action.id === actionId)

    if (action) {
      // ATUALIZAR O SALDO
      // console.log('valor', extortInvestment(action))

      const updateActions = actions.filter(action => action.id !== actionId)
      setActions(updateActions)
      localStorage.setItem('actions', JSON.stringify(updateActions))
    }
  }

  const updateBalance = (someBalance: number) => {
    setBalance(currentBalance => {
      const newBalance = currentBalance + someBalance
      localStorage.setItem('balance', String(newBalance))
      return newBalance
    })
  }

  return (
    <WalletContext.Provider
      value={{ username, balance, invested, total, changeVisibleValues, hasVisibleValues, actions, updateInvestments, onSellAction, updateBalance }}
    >
      {children}
    </WalletContext.Provider>
  )
}

export function useWallet () {
  const context = useContext(WalletContext)
  return context
}
