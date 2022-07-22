import { useContext, createContext, useMemo, useState, useEffect } from 'react'

import { Action } from '../types/action'
import { getLocalInvestments, updateLocalInvestments } from '../utils/investmets'

interface WalletContextProps {
  username: string
  balance: number
  invested: number
  total: number
  hasVisibleValues: boolean
  changeVisibleValues: () => void
  actions: Action[]
  updateInvestments: (newAction: Action) => void
}

interface WalletProviderProps {
  children: React.ReactNode
}

const WalletContext = createContext({} as WalletContextProps)

export function WalletProvider ({ children }: WalletProviderProps) {
  const [user, setUser] = useState({
    username: 'Leonardo Vargas',
    balance: 11661,
    invested: 27452
  })
  const [actions, setActions] = useState<Action[]>([])

  const total: number = useMemo(() => user.balance + user.invested, [user])

  const [hasVisibleValues, setHasVisibleValues] = useState<boolean>(false)

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

  useEffect(() => {
    loadInvestments()
  }, [])

  return (
    <WalletContext.Provider
      value={{ ...user, total, changeVisibleValues, hasVisibleValues, actions, updateInvestments }}
    >
      {children}
    </WalletContext.Provider>
  )
}

export function useWallet () {
  const context = useContext(WalletContext)
  return context
}
