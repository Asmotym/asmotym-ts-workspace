import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// import from workspace packages
import { capitalize } from '@asmotym-js-workspace/utilities'

console.log(capitalize('toaster!'));

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
