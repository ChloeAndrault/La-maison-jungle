import { useState, useEffect } from 'react'
import Banner from './Banner'
import logo from '../assets/logo.png'
import Cart from './Cart'
import Footer from './Footer'
import ShoppingList from './ShoppingList'
import '../styles/Layout.scss'

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
		<div>
			<Banner>

				<figure className='ps-logo'>
					<img src={logo} alt='La maison jungle'  />
				</figure>

				<div className="content">
					<h1 className='ps-title'>Plant store</h1>
					<h2 className='ps-subtitle'>by Chloé A</h2>
				</div>

			</Banner>
			<div className='ps-layout-inner'>
				<Cart cart={cart} updateCart={updateCart} />
				<ShoppingList cart={cart} updateCart={updateCart} />
			</div>
			<Footer />
		</div>
	)
}

export default App