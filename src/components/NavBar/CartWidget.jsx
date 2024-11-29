import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { TbShoppingCart } from "react-icons/tb";


const CartWidget = () => {
    const {totalQuantity} = useContext (CartContext)

    const quantity = totalQuantity()

    return (
        <Link to= "/cart" className="cartwidget"  >
            <TbShoppingCart className={ quantity === 0 ? "empty-cart" : "icon-cart" } color="#ff76a8"/>
            <p className="cart-number">{ quantity >= 1 && quantity } </p>
            </Link>
    )
}

//className="icon-cart" 
export default CartWidget


