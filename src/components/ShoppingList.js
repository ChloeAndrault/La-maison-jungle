import { plantList } from '../datas/plantList'


function ShoppingList() {
  const unique = [...new Set(plantList.map(item => item.category))];

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
      
      <div>
        <h2>Liste unique 1 </h2>
        <ul>
          {categories.map((cat) => (
            <li key={cat}>{cat}</li>
          ))}
        </ul>
        <ul>
          {plantList.map((plant) => (
            <li key={plant.id}>{plant.name}</li>
          ))}
        </ul>
      </div>

      <div>
        <h2>Liste unique 2</h2>
        <div>{unique}</div>
      </div>

      <div>
        <h2>Liste pas unique</h2>
        <ul>
          {plantList.map(plant=>(
            <li>{plant.category}</li>
          ))}
        </ul>

        <ul>
          {plantList.map(plant=>(
            <li>{plant.name}</li>
          ))}
        </ul>
      </div>
  
    </div>

  );
  
}


export default ShoppingList