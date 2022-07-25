/* eslint-disable multiline-ternary */
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useState, ChangeEvent, useMemo } from 'react'

import { Layout } from '../../components/Layout'
import { useWallet } from '../../hooks/useWallet'
import { BoxAlert } from '../../components/BoxAlert'
import { ActionCard } from '../../components/ActionCard'

import styles from './styles.module.scss'

export function MyInvestmentsPage () {
  const { actions } = useWallet()
  const [searchActionName, setSearchActionName] = useState<string>('')

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

        {!!actions.length && (
          <div className={styles.field}>
            <FaSearch />
            <input
              type="text"
              placeholder="Pesquisar por nome"
              onChange={handleSearchActionName}
            />
          </div>
        )}
      </div>

      { !actions.length ? (
        <BoxAlert>
          Você não possui nenhuma ação na sua carteira de investimentos.
          Para adquirir uma ação, acesse a página <Link to="/investir">clicando aqui.</Link>
        </BoxAlert>
      ) : (
        <>
          {isEmptySearch
            ? (
                <BoxAlert>
                  Não foi possível localizar o nome da ação pesquisada,
                  por favor, tente outro termo.
                </BoxAlert>
              ) : (
                <div className={styles.actions}>
                  {actions.map(action => isMatchName(action.name) && (
                    <ActionCard key={action.name} {...action} isSell />
                  ))}
                </div>
              )}
        </>
      )}

    </Layout>
  )
}
