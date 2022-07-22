import React from 'react'
import ReactDOM from 'react-dom/client'

import { HomePage } from './pages/Home'
import { InvestPage } from './pages/Invest'
import { MyInvestmentsPage } from './pages/MyInvestments'
import { InvestmentsListPage } from './pages/InvestmentsList'

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import './styles/global.scss'
import { WalletProvider } from './hooks/useWallet'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <WalletProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/meus-investimentos" element={<MyInvestmentsPage />} />
          <Route path="/investir" element={<InvestmentsListPage />} />
          <Route path="/investir/:id" element={<InvestPage />} />
        </Routes>
      </BrowserRouter>
    </WalletProvider>
  </React.StrictMode>
)
