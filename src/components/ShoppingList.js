import { plantList } from '../datas/plantList'

function isPresent (list, el){

  let result = false;

  // global
  list.forEach(element => {
    //local 
    if (el === element) {
      result = true;
    }
  });
  return result;
}

function ShoppingList() {

  const categories = [];

  plantList.forEach(plant => {
    if (!isPresent(categories, plant.category) ) {
      categories.push(plant.category);
    }
  });

  return (
    <div>
      <ul>
        {categories.map((category, index) => (
          <li key={`${category}-${index}`}>{category}</li>
        ))}
      </ul>
    </div>
  );
}


export default ShoppingList