import { useState, useEffect } from 'react'

import Banner from './Banner'
import Cart from './Cart'
import Footer from './Footer'
import Hero from './Hero'
import ShoppingList from './ShoppingList'
import Phone from './Phone'

import '../styles/Layout.scss'

import imgHero from '../assets/hero.png'
import logo from '../assets/logo.svg'

function App() {
	// initialisation du state avec un tableau vide
	// const [cart, updateCart] = useState([]) 

	// Sauvegarde du panier
	const savedCart = localStorage.getItem('cart')
	const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart])
	
	return (
		<div className="body">

			<div className="container header">
				<Banner>
					<figure className='ps-logo'>
						<img src={logo} alt='La maison jungle'  />
					</figure>

					<div className="content">
						<h1 className='ps-title'>Plant store</h1>
						<h2 className='ps-subtitle'>by Chloé A</h2>
					</div>
				</Banner>

				<div className="right flex">
					<Phone></Phone>
					<Cart cart={cart} updateCart={updateCart} />
				</div>
			</div>

			<div className="container-body">
				<Hero>
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
				</Hero>

				<ShoppingList cart={cart} updateCart={updateCart} />
			</div>

			
			<Footer />
		</div>
	)
}

export default App