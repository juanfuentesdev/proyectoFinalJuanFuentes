import {Link} from "react-router-dom"

const Item = ( {product} ) => {
    return (
    <div className="item">
    <img src={product.image} className="img-item"  alt="" width={300}/>
    <p className="text-item">{product.name}</p>
    <p clasName="text-item-price">${product.price}</p>

    <Link to={"/detail/" + product.id} className="detalles">Ver detalles</Link>
</div>
    )
}

export default Item