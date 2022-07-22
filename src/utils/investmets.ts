import api from '../service/api'
import { Action, ActionLocalStorage } from '../types/action'

export async function getLocalInvestments (): Promise<Action[]> {
  const { data } = await api.get<Action[]>('investments')

  const localActions: ActionLocalStorage[] = JSON.parse(localStorage.getItem('actions') || '') || []

  return localActions.map(action => {
    const dataAction = data.find(ac => ac.id === action.id)
    const resultAction = {
      ...dataAction,
      quant: action.quant
    }

    return resultAction as Action
  })
}

interface updateLocalInvestmentsProps {
  actions: Action[]
  newAction: Action
}

export function updateLocalStorage (actions: Action[]) {
  const result = actions.map(action => ({
    id: action.id,
    quant: action.quant
  }))
  localStorage.setItem('actions', JSON.stringify(result))
}

export function updateLocalInvestments ({ actions, newAction }: updateLocalInvestmentsProps): Action[] {
  const actionsUpdate = [...actions]
  const indexAction = actionsUpdate.findIndex(action => action.id === newAction.id)

  if (indexAction === -1) {
    actionsUpdate.push(newAction)
  } else {
    actionsUpdate[indexAction].quant += newAction.quant
  }

  updateLocalStorage(actionsUpdate)

  return actionsUpdate
}
