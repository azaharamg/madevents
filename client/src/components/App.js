import { Route, Routes } from 'react-router-dom'
import '../stylesheet/app.scss'
import Landing from './Landing'
import MainPage from './MainPage'
import Header from './Header'
import Footer from './Footer'

function App() {
  return (
    <div className='app--container'>
      <Header />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/main' element={<MainPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
