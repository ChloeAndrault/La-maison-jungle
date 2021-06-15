import Banner from './Banner';
import logo from '../assets/logo.png'
// import Description from './Description';
// import Cart from './Cart';
import ShoppingList from './ShoppingList';

function App(){

  return(
    <div>

      <Banner>
        <img className='lmj-logo' src={logo} alt='La maison jungle' />
        <h1 className='lmj-title'>La maison jungle</h1>
      </Banner>


      {/* <Description /> */}
      {/* <Cart /> */}
      <ShoppingList />
    </div>
  )

}

export default App;
