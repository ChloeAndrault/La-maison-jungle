import { useState, useEffect } from 'react'
import '../styles/Cart.scss'

function Cart({ cart, updateCart }) {
	const [isOpen, setIsOpen] = useState(true)
	const items = Object.keys(cart)
	const total = items.reduce(
		// Total récupéré avec l'accumulateur de reduce
		(acc, item) => acc + cart[item].amount * cart[item].price,
		0
	)
	useEffect(() => {
		document.title = `ps: ${total}€ d'achats`
	}, [total])


	return isOpen ? (
		<div className='ps-cart'>
			<button
				className='ps-cart-toggle-button'
				onClick={() => setIsOpen(false)}
			>
				Fermer
			</button>
			{cart.length > 0 ? (
				<div>
					<h2>Panier</h2>
					<ul>
						{cart.map(({ name, price, amount }, index) => (
							// Iteration avec map sur cart pour afficher le nom le prix et la quantité
							<div key={`${name}-${index}`}>
								{name} {price}€ x {amount}
							</div>
						))}
					</ul>
					<h3>Total :{total}€</h3>
					<button onClick={() => updateCart([])}>Vider le panier</button>
				</div>
			) : (
				<div>Votre panier est vide</div>
			)}
		</div>
	) : (
		<div className='ps-cart-closed'>
			<button
				className='ps-cart-toggle-button'
				onClick={() => setIsOpen(true)}
			>
				Ouvrir le Panier
			</button>
		</div>
	)
}

export default Cart
