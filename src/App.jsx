
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {CartProvider } from './context/CartContext'
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout'
import './App.css'



function App() {

  return (

      //    <div className='logo-container'><img className="logo-img" src="" alt="Logo" /> </div>
      
      <div className='container-app'>
        <div className='logo-container'><img className="logo-img" src="../ktienda.png" alt="Logo" /> </div>
        <BrowserRouter>
        <CartProvider> 
          <NavBar/>
            <Routes>
              <Route path="/" element={ <ItemListContainer greeting={"Bienvenidos a mi Tienda"} /> } />
              <Route path="/category/:idCategory" element={ <ItemListContainer greeting={"Categorías"} /> } />
              <Route path="/detail/:idProduct" element={ <ItemDetailContainer/> } />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
            </CartProvider>
        </BrowserRouter>
      </div>
  )
}

export default App

//<div className="logo-container"><a href="#"><img class="logo-img" src= "./src/assets/ktienda.png" alt=""></a></div>

// import { Icon } from '@iconify/react'
