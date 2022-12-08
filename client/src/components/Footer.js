import '../stylesheet/footer.scss'

export default function Footer() {
  return (
    <footer className='footer'>
      <p className='footer--information'>{`MadEvents ${new Date().getFullYear()}`}</p>
    </footer>
  )
}
