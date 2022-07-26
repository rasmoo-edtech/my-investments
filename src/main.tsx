import React from 'react'
import ReactDOM from 'react-dom/client'

import './styles/global.scss'
import { Routes } from 'routes'
import { WalletProvider } from './hooks/useWallet'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <WalletProvider>
      <Routes />
    </WalletProvider>
  </React.StrictMode>
)
