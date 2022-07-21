import { useEffect, useState } from 'react'

import { Layout } from '../../components/Layout'
import { ActionCard } from '../../components/ActionCard'

import styles from './styles.module.scss'
import { Action } from '../../types/action'
import dataActions from '../../data/actions.json'

export function InvestmentsListPage () {
  const [actions, setActions] = useState<Action[]>([])

  useEffect(() => {
    setActions(dataActions)
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
