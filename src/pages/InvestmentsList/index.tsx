import { useEffect, useState } from 'react'
import { isFuture, parseISO } from 'date-fns'

import { Layout } from '../../components/Layout'
import { ActionCard } from '../../components/ActionCard'

import api from '../../service/api'
import styles from './styles.module.scss'
import { Action } from '../../types/action'

export function InvestmentsListPage () {
  const [actions, setActions] = useState<Action[]>([])

  const loadInvestments = async () => {
    const { data } = await api.get<Action[]>('investments')

    const actionsApi = data.filter(action => isFuture(parseISO(action.time)))

    setActions(actionsApi)
  }

  useEffect(() => {
    loadInvestments()
  }, [])

  return (
    <Layout>
      <div className={styles.page__header}>
        <h2>Investir</h2>

        <div className={styles.filter}>
          <span />
          <span />
        </div>
      </div>

      <div className={styles.actions}>
        {actions.map(action => (
          <ActionCard key={action.name} {...action} isBuy />
        ))}
      </div>
    </Layout>
  )
}
