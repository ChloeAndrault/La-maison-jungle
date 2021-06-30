import { useState, useEffect } from 'react'

import Logo from './Logo'
import Cart from './Cart'
import Footer from './Footer'
import Hero from './Hero'
import ShoppingList from './ShoppingList'
import Phone from './Phone'

import '../styles/Layout.scss'
import '../styles/header/Header.scss'

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

			<header>
				<div className="left flex">
					<Logo />
				</div>
				<div className="right flex">
					<Phone />
					<Cart cart={cart} updateCart={updateCart} />
				</div>
			</header>

			<main>
				<Hero />
				<ShoppingList cart={cart} updateCart={updateCart} />
			</main>

			<Footer />
		</div>
	)
}

export default App