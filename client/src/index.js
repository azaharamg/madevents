import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './stylesheet/index.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './components/App'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
