import '../stylesheet/header.scss'
import Logo from '../images/logo.png'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className='header'>
      <Link to='/'>
        <img className='header--logo' src={Logo} alt='MadEventsLogo' />
      </Link>
    </header>
  )
}
