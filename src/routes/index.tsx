import {
  BrowserRouter,
  Routes as RoutesRouterDom,
  Route
} from 'react-router-dom'

import { HomePage } from 'pages/Home'
import { InvestPage } from 'pages/Invest'
import { AddBalancePage } from 'pages/AddBalance'
import { MyInvestmentsPage } from 'pages/MyInvestments'
import { InvestmentsListPage } from 'pages/InvestmentsList'

export function Routes () {
  return (
    <BrowserRouter>
      <RoutesRouterDom>
        <Route path="/" element={<HomePage />} />
        <Route path="/meus-investimentos" element={<MyInvestmentsPage />} />
        <Route path="/investir" element={<InvestmentsListPage />} />
        <Route path="/investir/:id" element={<InvestPage />} />
        <Route path="/adicionar-saldo" element={<AddBalancePage />} />
      </RoutesRouterDom>
    </BrowserRouter>
  )
}
