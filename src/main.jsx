import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import('preline')
import './index.css'
import App from './App.jsx'
import { store } from './rudex/store.js'
import { Provider } from 'react-redux'


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>
)
