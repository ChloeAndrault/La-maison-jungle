import Banner from './Banner';
import logo from '../assets/logo.png'
// import Description from './Description';
import Cart from './Cart';
import ShoppingList from './ShoppingList';
import Footer from './Footer';

function App(){

  return(
    <div>
      <Banner>
        <img className='lmj-logo' src={logo} alt='La maison jungle' />
        <h1 className='lmj-title'>La maison jungle</h1>
      </Banner>

      {/* <Description /> */}

      <Cart />
      <ShoppingList />
      
      <Footer />

    </div>
  )

}

export default App;
