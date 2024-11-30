import React from 'react'
import { useState } from 'react'
import FormCheckout from './FormCheckout'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Timestamp, addDoc, collection, doc, setDoc} from 'firebase/firestore'
import db from '../../db/db'
import { Link } from 'react-router-dom'
import "./Checkout.css"


const Checkout = () => {
    const[dataForm, setDataForm] = useState ({
        fullname:"",
        phone: "",
        email: "",
        adress: ""
    })

    const [idOrder, setIdOrder] = useState (null)
    const {cart, totalPrice, deleteCart} = useContext(CartContext)

    const handleChangeInput = (event)=> {
        setDataForm({...dataForm, [event.target.name]: event.target.value})
    }

    const handleSubmitForm = (event)=> {
        event.preventDefault()
        
        const order= {
            buyer: {...dataForm}, 
            products: [...cart],
            date: Timestamp.fromDate(new Date()),
            total: totalPrice()
        }

        uploadOrder (order)
    }

    const uploadOrder = (newOrder) => {
        const ordersRef = collection(db, "orders")
        addDoc(ordersRef, newOrder)
        .then((response)=> setIdOrder(response.id))
        .catch((error)=> console.log(error))
        .finally (()=> {
            updateStock()
        })
    }

    const updateStock = ()=> {
        cart.map(({id, quantity, ...dataProduct} )=> {
            const productRef = doc(db, "products", id)
            setDoc(productRef, {...dataProduct, stock: dataProduct.stock - quantity })
            })


        deleteCart()
    }

    return (
        <div>
            {
                idOrder === null ? (
                    <FormCheckout
                    dataForm={dataForm}
                    handleChangeInput={handleChangeInput}
                    handleSubmitForm={handleSubmitForm} />
                ) : (
                <div>
                    <h2>Su Orden se realizó correctamente 😁</h2>
                    <p>Por favor guarde su número de Orden 🧐: {idOrder}</p>
                    <div className="to-home"><Link to="/" ><button className="go-to-home">Volver al inicio 😜</button></Link></div>
                </div>
                )
            }

        </div>
    )
}

export default Checkout