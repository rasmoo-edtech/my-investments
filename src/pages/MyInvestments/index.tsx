/* eslint-disable multiline-ternary */
import { FaSearch } from 'react-icons/fa'
import { useEffect, useState, ChangeEvent, useMemo } from 'react'

import { Layout } from '../../components/Layout'
import { ActionCard } from '../../components/ActionCard'

import styles from './styles.module.scss'
import { Action } from '../../types/action'
import actionsData from '../../data/actions.json'

export function MyInvestmentsPage () {
  const [searchActionName, setSearchActionName] = useState<string>('')
  const [actions, setActions] = useState<Action[]>([])

  useEffect(() => {
    setActions(actionsData)
  }, [])

  const handleSearchActionName = (e: ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value
    setSearchActionName(value.toLocaleLowerCase())
  }

  const isMatchName = (actionName: string): boolean => {
    return actionName.toLocaleLowerCase().includes(searchActionName)
  }

  const isEmptySearch: boolean = useMemo(() => {
    return !actions.some(action => isMatchName(action.name))
  }, [actions, searchActionName])

  return (
    <Layout>
      <div className={styles.page__header}>
        <h2>Meus Investimentos</h2>

        <div className={styles.field}>
          <FaSearch />
          <input
            type="text"
            placeholder="Pesquisar por nome"
            onChange={handleSearchActionName}
          />
        </div>
      </div>

      {isEmptySearch
        ? (
            <h3>Não foi possível localizar o nome da ação</h3>
          ) : (
            <div className={styles.actions}>
              {actions.map(action => isMatchName(action.name) && (
                <ActionCard key={action.name} {...action} />
              ))}
            </div>
          )}
    </Layout>
  )
}
