import logoHeader from '../assets/logoHeader.svg'
import '../styles/header/Logo.scss'

function Logo() {
  return (
    <div className="c-logo">
      <figure className='logo'>
        <img src={logoHeader} alt='La maison jungle'  />
      </figure>

      <div className="content">
        <h1 className='title'>Plant store</h1>
        <h2 className='subtitle'>by Chloé A</h2>
      </div>
    </div>
  )
}

export default Logo
