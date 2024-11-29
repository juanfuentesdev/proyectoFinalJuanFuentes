import ItemCount from "../ItemCount/ItemCount"
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";



const ItemDetail = ({ product }) => {
    const [showItemCount, setShowItemCount] = useState (true)
    const { addProductInCart } = useContext (CartContext)

const addProduct = (count) => {
    const productCart = { ...product, quantity: count}

    addProductInCart (productCart)
    setShowItemCount (false)
}

    return (
        <div className="item-detail"> 
            <img src={product.image} className="img-item-detail" width={300} alt="" />
            <h2 className="title-item-detail">{product.name}</h2>
            <p className="text-item-detail-description">{product.description}</p>
            <p className="text-item-detail-price">Precio: ${product.price}</p>
            {
                showItemCount === true ? (
                    <ItemCount stock={product.stock} addProduct={addProduct}/>

                ): (
                    <Link to="/cart" className="btn-item">Terminar mi compra</Link>
                )

            
                }

            <Link to="/" className="btn-item">Volver a la tienda</Link>
        </div>
    )

}

export default ItemDetail