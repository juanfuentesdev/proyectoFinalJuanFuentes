import { useState, useEffect } from "react"
import ItemList  from "./ItemList.jsx"
import { getProducts } from "../../data/data.js"
import { useParams} from "react-router-dom"
import "./ItemListContainer.scss"



const ItemListContainer = ( { greeting} )=> {
    const [products, setProducts] = useState ([])
    const [loading, setLoading] = useState(true)
    const {idCategory}= useParams ()

    useEffect (()=> {
        setLoading (true)

        getProducts ()
        .then( (dataProducts)=> {
            if (idCategory){
                //// filtramos la data por esa categoria

            const filterProducts = dataProducts.filter ( (product) => product.category === idCategory )
                setProducts (filterProducts)
            }else{

                setProducts(dataProducts)
            }
            





    })
        .catch((error)=> {
            console.error(error)
        })
        .finally (()=> {
            setLoading (false)
        })
    }, [idCategory])





    return (
    <div className= "item-list-container">
        <h1>{greeting} </h1>
        {
            loading === true ? (
                <div>Cargando...</div>
            ) : (
                <ItemList products={products} />
        )
    }
    </div>
    )
}

export default ItemListContainer