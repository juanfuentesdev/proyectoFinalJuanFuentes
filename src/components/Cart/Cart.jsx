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
                <div className="to-home"><Link to="/" ><button className="back-to-home">Volver al inicio</button></Link></div>
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
                        <div className="c1"><img className="img-cart" src={productCart.image}  alt="" /></div>
                        <div className="c2"><p className="p-cart">{productCart.name}</p></div>                     
                        <div className="c3"><p className="p-cart">Cantidad: {productCart.quantity}</p></div>
                        <div className="c4"><p className="p-cart">Precio c/u: {productCart.price}</p></div>
                        <div className="c5"><p className="p-cart">Precio: {productCart.quantity * productCart.price}</p></div>
                        <div className="c6"><button className="boton-borrar-producto" onClick={ () =>  deleteProductById (productCart.id)}>Borrar producto</button></div>
                    </div>  
                ))
            }
        </div>

        <div className="total-container" >
            <div className="total-elements">
                    <div className="t0"><p></p></div>
                    <div className="t1"><Link to= "/checkout"><button className="go-to-checkout" >Finalizar mi compra</button></Link></div>
                    <div className="t2"> <p className="p-total">Precio total: {totalPrice()} </p></div>
                    <div className="t3"><button className="delete-everything" onClick={deleteCart} >Vaciar Carrito</button></div>
                        </div>
            </div>
        </div>
    )
}

export default Cart