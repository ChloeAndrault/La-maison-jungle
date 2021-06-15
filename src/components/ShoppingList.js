import { plantList } from '../datas/plantList'
import CareScale from './CareScale'
import PlantItem from './PlantItem'
import '../styles/ShoppingList.css'

function ShoppingList() {
	const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
			// boolean
      // ? : operateur ternaire         
      // acc: Si ma categorie est déja dans l'accumulateur je fait rien
      // acc.concat(plant.category) : Si il n'est pas dedant alors tu rajoute la categorie
		[]
	)

	return (
		<div>
			<ul>
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>
			<ul className='lmj-plant-list'>
				{plantList.map((plant) => (
					<li key={plant.id} className='lmj-plant-item'>
						{plant.name}
						{plant.isBestSale && <span>Best sale🔥</span>}
						{/* Si en solde, ajout de la class */}

						{plant.isSpecialOffer && <div className='lmj-sales'>Soldes</div>}
						{/* Si en solde, ajout de la class  */}
						
						<CareScale careType='water' scaleValue={plant.water} />
						<CareScale careType='light' scaleValue={plant.light} />

					</li>
				))}
			</ul>
		</div>
	)
}

export default ShoppingList