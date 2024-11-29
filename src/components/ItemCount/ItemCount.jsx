import { useState } from "react"
import "./ItemCount.css"

const ItemCount = ({stock, addProduct}) => {
    const [count, setCount] = useState(1)

    const handleClickRest =  () => {
        if (count > 1 ){
        setCount(count - 1)
    }
}

    const handleClickAdd =  () => {
        if(count < stock){
        setCount(count +1)
        }
    }


    return (        
    <div> 
        <div className="contador">   
            <button className="boton-menos" onClick={handleClickRest}>-</button>
            <p>{count}</p>
            <button className="boton-mas" onClick={handleClickAdd}>+</button>
        </div>
        <div >
            <button className="boton-agregar" onClick={ ()=> addProduct(count)}>Agregar al carrito</button>
        </div>
    </div>
)
}

export default ItemCount