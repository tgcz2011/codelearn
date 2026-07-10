import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import AppProviders from '@/providers/AppProviders'
import App from './App'
import './index.css'

// AppProviders 提供 i18n + 主题同步；BrowserRouter 提供路由上下文
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppProviders>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AppProviders>
  </React.StrictMode>,
)
