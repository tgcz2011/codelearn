import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import AppProviders from '@/providers/AppProviders'
import App from './App'
import './index.css'

// HashRouter：在 file://、tauri://、http:// 等所有协议下均可用，无需服务器 SPA fallback
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppProviders>
      <HashRouter>
        <App />
      </HashRouter>
    </AppProviders>
  </React.StrictMode>,
)
