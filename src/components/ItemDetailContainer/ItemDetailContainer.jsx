import {useState, useEffect} from "react"
import {doc, getDoc} from "firebase/firestore"
import db from "../../db/db.js"
import {useParams} from "react-router-dom"
import ItemDetail from "./ItemDetail.jsx"
import "./ItemDetailContainer.css"



const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const {idProduct} = useParams()

    const getProductById =()=> {
        const docRef = doc( db, "products", idProduct)
        getDoc(docRef)
        .then((dataDb)=> {
            const productDb = { id: dataDb.id, ...dataDb.data()}

            setProduct (productDb)
        })
    }


    useEffect( ()=> {
        getProductById  ()

    }, [idProduct])

    return(
        <div className="item-detail-container">
        <ItemDetail product={product} />
        </div>
    )

}

export default ItemDetailContainer

