import { differenceInDays, parseISO } from 'date-fns'

import api from 'service/api'
import { Action, ActionLocalStorage } from 'types/action'

export async function getLocalInvestments (): Promise<Action[]> {
  const { data } = await api.get<Action[]>('investments')

  const isActions = localStorage.getItem('actions')

  if (isActions) {
    const localActions: ActionLocalStorage[] = JSON.parse(isActions)

    return localActions.map(action => {
      const dataAction = data.find(ac => ac.id === action.id)
      const resultAction = {
        ...dataAction,
        quant: action.quant
      }

      return resultAction as Action
    })
  }

  return []
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

function percentValueInRestDays (actionTime: string): number {
  const restDays = differenceInDays(parseISO(actionTime), new Date())

  if (restDays <= 30) {
    return 0.7
  } else if (restDays > 30 && restDays < 90) {
    return 0.5
  } else {
    return 0.3
  }
}

export function extortInvestment (action: Action): number {
  const currentValue = action.minValue * action.quant

  console.log('porcentagem', percentValueInRestDays(action.time))

  return currentValue * percentValueInRestDays(action.time)
}
