import { useState, useEffect } from 'react'
import '../styles/Cart.scss'
import basketWhite from '../assets/basket-white.svg'

function Cart({ cart, updateCart, amount }) {
	const [isOpen, setIsOpen] = useState(false)
	const items = Object.keys(cart)

	const total = items.reduce(
		// Total récupéré avec l'accumulateur de reduce
		(acc, item) => acc + cart[item].amount * cart[item].price,
		0
	)

	useEffect(() => {
		document.title = `ps: ${total}€ d'achats`
	}, [total])

	const product = items.reduce(
		(acc, item) => acc + cart[item].amount,
		0
	)

	return isOpen ? (

		
		<div className='ps-cart open'>
			<button
				className='ps-cart-toggle-button'
				onClick={() => setIsOpen(false)}
			>
				<img src={basketWhite} alt='Panier'  />

				<div className="number">
					{product}
				</div>

			</button>

			{cart.length > 0 ? (
				<div className="content-basket">
					<h2>Panier</h2>
					<ul>
						{cart.map(({ name, price, amount }, index) => (
							// Iteration avec map sur cart pour afficher le nom le prix et la quantité
							<div key={`${name}-${index}`}>
								{name} {price}€ x {amount}
							</div>
						))}
					</ul>
					<h3>Total : {total}€</h3>
					<button onClick={() => updateCart([])}>Vider le panier</button>
				</div>
			) : ( 
				<div className="content-basket">
					Votre panier est vide
				</div>
			)}
		</div>
	) : (
		<div className='ps-cart closed'>
			<button
				className='ps-cart-toggle-button'
				onClick={() => setIsOpen(true)}
			>
				<img src={basketWhite} alt='Panier'  />

				<div className="number">
					{product}
				</div>

			</button>
		</div>
	)
}

export default Cart
