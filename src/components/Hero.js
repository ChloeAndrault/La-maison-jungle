import imgHero from '../assets/hero.png'
import '../styles/main/Hero.scss'

function Hero() {
  return (
    <div className='c-hero'>
      <div className="wrapper">
        <figure className='hero-img'>
          <img src={imgHero} alt='Plante a la une'  />
        </figure>

        <div className="content-plants">
          <h3>Indoor Plant</h3>
          <h4>Garden Plant</h4>
          <h5>35% off All type of plant purchase</h5>
        </div>
      </div>
    </div>
  )
}
export default Hero
