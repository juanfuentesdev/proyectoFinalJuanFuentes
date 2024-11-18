import { createContext, useState} from "react";

const CartContext= createContext ()
const CartProvider = ({children}) => {
    const [cart, setCart] = useState ([])

    const addProductInCart = (newProduct) => {
        const condicion = isIncart (newProduct.id)
        if (condicion){
            // suma cantidades
            const  tempCart = [...cart]
            const findIndex = tempCart.findIndex ( (productCart)=> productCart.id === newProduct.id )
            tempCart [findIndex].quantity =  tempCart[findIndex].quantity + newProduct.quantity  
            
            setCart(tempCart)
        }else {
            // guardarlo como producto nuevo
            setCart ([...cart, newProduct])
        }
setCart ([ ...cart, newProduct])
    }


const isIncart =(idProduct) => {
    return cart.some ((productCart) => productCart.id === idProduct )
}


    //Cantidad total de productos
const totalQuantity = () => {
    const quantity = cart.reduce( (total, productCart) => total + productCart.quantity, 0)
    return quantity
}

//Precio total de la compra
const totalPrice = ()=> {
    const price = cart.reduce( (total, productCart)=> total +  (productCart.quantity * productCart.price), 0 )
    return price
}

const deleteProductById = (idProduct) => {
    const filterProducts = cart.filter( (productCart) => productCart.id !== idProduct )
    setCart(filterProducts)
}

const deleteCart =  () =>{
        setCart ([])
}


    return(
        <CartContext.Provider value={{cart, addProductInCart, totalQuantity, totalPrice, deleteProductById, deleteCart, isIncart}}>
            {children}
        </CartContext.Provider>
    )  
}




export {CartProvider, CartContext}
