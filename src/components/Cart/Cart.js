import React, {useContext, useEffect, useState} from 'react'
import { cartContext } from '../context/cartContext';
import './Cart.css';
import CartVacio from './CartVacio';
import CartWithContent from './CartWithContent';


const Cart = () => {
    const {itemCounter} = useContext(cartContext)
    const [cartQty, setcartQty] = useState(0)
    const [content, setcontent] = useState(<CartVacio />)

    const cambio = () =>{
        if(cartQty  != 0){
            setcontent(<CartWithContent/>)
        }
        else{
            setcontent(<CartVacio/>)
        }
    }

    useEffect(() => {
        setcartQty(itemCounter);
        cambio()
        
    })

    return (
        <>
            {content}
        </>
    )
}

export default Cart;