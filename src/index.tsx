import React from 'react'
import ReactDOM from 'react-dom/client'
import './css/reset.css'
import './css/fonts.css'
import './css/index.css'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
