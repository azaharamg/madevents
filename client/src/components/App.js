import { Route, Switch } from 'react-router-dom'
import '../stylesheet/app.scss'
import Landing from './Landing'
import MainPage from './MainPage'
import Header from './Header'
import Footer from './Footer'

function App() {
  return (
    <div className='app--container'>
      <Header />
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/main' component={MainPage} />
      </Switch>
      <Footer />
    </div>
  )
}

export default App
