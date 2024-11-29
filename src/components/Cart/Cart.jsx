import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import "./Cart.css"


const Cart = () => {

    const {cart, totalPrice, deleteProductById, deleteCart} = useContext(CartContext)

    // Early Return 
    if (cart.length === 0) {
        return (
            <div>
                <h2>No hay productos en el carrito 😓 </h2>
                <Link to="/" >Volver al inicio</Link>
            </div>
        )
    }

    return (
        <div>
            <h2>Productos en el carrito</h2>
            {
                cart.map ((productCart)=> (
                    <div key={productCart.id}>
                        <img src={productCart.image}  alt="" />
                        <p>{productCart.name}</p>                       
                        <p>Cantidad: {productCart.quantity}</p>
                        <p>Precio c/u: {productCart.price}</p>
                        <p>Precio parcial: {productCart.quantity * productCart.price}</p>
                        
                        <button onClick={ () =>  deleteProductById (productCart.id)}>Borrar producto</button>
                    </div>  

                ))
            }
            <p>Precio total: {totalPrice()} </p>
            <button onClick={deleteCart} >Borrar todo el carrito</button>
        </div>
    )
}

export default Cart