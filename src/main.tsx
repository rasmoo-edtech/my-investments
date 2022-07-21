import React from 'react'
import ReactDOM from 'react-dom/client'

import { HomePage } from './pages/Home'
import { MyInvestmentsPage } from './pages/MyInvestments'
import { InvestmentsListPage } from './pages/InvestmentsList'

import './styles/global.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <InvestmentsListPage />
  </React.StrictMode>
)
