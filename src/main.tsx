import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './globals.css'
import App from './App.tsx'
import "../i18nConfig.ts"
import { Analytics } from '@vercel/analytics/react'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Analytics />
  </StrictMode>,
)
