export interface Action {
  id: string
  name: string
  tax: string
  time: string
  minValue: number
  quant: number
}

export interface ActionLocalStorage {
  id: string
  quant: number
}
