import CareScale from './CareScale'
import '../styles/main/PlantItem.scss'

function handleClick(plantName) {
	alert(`Vous voulez acheter 1 ${plantName}? Très bon choix 🌱✨`)
}

function PlantItem({ cover, name, water, light, category, price }) {
	return (
		<div className='c-plant-item' onClick={() => handleClick}>
			<figure>
				<img className='plant-item-cover' src={cover} alt={`${name} cover`} />
			</figure>
			<div className="name">{name}</div>
			<div className="caegory">{category}</div>
			<div className="price">{price} €</div>
			<div>
				Arrosage : <CareScale careType='water' scaleValue={water} />
				Lumière :<CareScale careType='light' scaleValue={light} />
			</div>
		</div>
	)
}

export default PlantItem