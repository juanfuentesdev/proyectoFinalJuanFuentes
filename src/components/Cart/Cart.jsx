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
            <div className="cards-container-cart">
            {
                cart.map ((productCart)=> (
                    <div className="card-producto" key={productCart.id}>
                        <img className="img-cart" src={productCart.image}  alt="" />
                        <p className="p-cart">{productCart.name}</p>                       
                        <p className="p-cart">Cantidad: {productCart.quantity}</p>
                        <p className="p-cart">Precio c/u: {productCart.price}</p>
                        <p className="p-cart">Precio parcial: {productCart.quantity * productCart.price}</p>
                        <button className="boton-borrar-producto" onClick={ () =>  deleteProductById (productCart.id)}>Borrar producto</button>
                        <Link to= "/checkout">Terminar mi compra</Link>
                    </div>  
                ))
            }
            </div>

            <div className="total-y-borrar" >
                <p className="p-total">Precio total: {totalPrice()} </p>
                <button className="boton-borrar-todo" onClick={deleteCart} >Borrar todo el carrito</button>
            </div>
        </div>
    )
}

export default Cart