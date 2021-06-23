import { useState } from 'react'
import { plantList } from '../datas/plantList'
import '../styles/Categories.css'

function Categories() {

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

  return(
    <div className="lmj-categories">
      <select className="lmj-categories-select">
				{categories.map((cat) => (
					<option key={cat}>{cat}</option>
				))}
			</select>

    </div>
  )

}

export default Categories