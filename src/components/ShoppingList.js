import { plantList } from '../datas/plantList'
import PlantItem from './PlantItem'
import '../styles/ShoppingList.css'


function ShoppingList({ cart, updateCart }) {

	// PLANT CATEGORIES
	const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
			// boolean
      // ? : operateur ternaire         
      // acc: Si ma categorie est déja dans l'accumulateur je fait rien
      // acc.concat(plant.category) : Si il n'est pas dedant alors tu rajoute la categorie
		[]
	)

	// ADD TO CART FREATURE
	function addToCart(name, price) {
		const currentPlantSaved = cart.find((plant) => plant.name === name)
		// verifie si la planet est déja présente
		if (currentPlantSaved) {
			// si elle existe
			const cartFilteredCurrentPlant = cart.filter(
				// crer un tableau sans elle avec filter
				(plant) => plant.name !== name
			)
			updateCart([
				...cartFilteredCurrentPlant,
				// on ajoute ce nouveau tableau sans elle
				{ name, price, amount: currentPlantSaved.amount + 1 }
				// on rajoute dans ce tableau 1 object avec la quantité précedente +1
			])
		} else {
			updateCart([...cart, { name, price, amount: 1 }])
			// Si pas présent on récurere le cart déja existant avec le spread operator 
			// et on ajoute l'object correspondant a la plante ajouté
			// amount : 1 = initalistion
		}
	}

	return (
		<div className='lmj-shopping-list'>
			<ul>
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>
			<ul className='lmj-plant-list'>
				{plantList.map(({ id, cover, name, water, light, price }) => (
					<div key={id}>
						<PlantItem
							cover={cover}
							name={name}
							water={water}
							light={light}
							price={price}
						/>
						<button onClick={() => addToCart(name, price)}>Ajouter</button>
					</div>
				))}
			</ul>
		</div>
	)
}

export default ShoppingList