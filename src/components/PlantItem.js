import CareScale from './CareScale'
import '../styles/PlantItem.scss'

function handleClick(plantName) {
	alert(`Vous voulez acheter 1 ${plantName}? Très bon choix 🌱✨`)
}

function PlantItem({ cover, name, water, light, category, price }) {
	return (
		<li className='ps-plant-item' onClick={() => handleClick}>
			<img className='ps-plant-item-cover' src={cover} alt={`${name} cover`} />
			<div className="name">{name}</div>
			<div className="caegory">{category}</div>
			<div className="price">{price} €</div>
			<div>
				<CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
			</div>
		</li>
	)
}

export default PlantItem