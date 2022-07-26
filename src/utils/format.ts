import { format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

const CURRENCY_OPTION = {
  style: 'currency',
  currency: 'BRL'
}

const DATE_OPTION = {
  locale: ptBR
}

export const formattedCurrency = (value: number): string => {
  return new Intl.NumberFormat('pt-BR', CURRENCY_OPTION).format(value)
}

export const formattedDate = (date: Date): string => {
  return format(date, "dd' de 'MMMM' de 'yyyy'", DATE_OPTION)
}

export const formattedNumber = (value: string): number => {
  return Number(value.replace(/\D/g, ''))
}
