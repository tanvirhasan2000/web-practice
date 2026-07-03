
import {addToStoredCart, getStoredCart, removeFromCart} from '../utilites/LocalStorage.js'
import {use, useEffect, useState} from 'react'
import Bottle from './Bottle';
import "./Bottles.css"
import Cart from './Cart.jsx';
export default function Bottles({bottlesPromise}){
    const bottles = use(bottlesPromise);
    const [cart,setCart]=useState([]);
    const handleAddCart=(bottle)=>{
        setCart(prevCart => [...prevCart, bottle]);
        
        // save the bottle id to the storage 
        addToStoredCart(bottle.id);
    }
  
    useEffect(()=>{
        const storedCardIds=getStoredCart();
        const storedCart =[];

        for(const id of storedCardIds){
            const cartBottle = bottles.find(bottle=>bottle.id===id);
            if(cartBottle){
                storedCart.push(cartBottle);
            }
        }
        setCart(storedCart);
        // const storedCartids = getStoredCart();
        // const storedCart = bottles.filter(bottle => storedCartids.includes(bottle.id));
        // setCart(storedCart);
    }, [bottles])
    // console.log(bottles);
    const handleRemoveFromCart =(id)=>{
        const remainingCart=cart.filter(
            bottle=>bottle.id !==id
        );
        setCart(remainingCart);
        removeFromCart(id);
    }
    return(

        <div >
            <h3>Total Bottle : {bottles.length}</h3>
            <p>Added to cart:{cart.length}</p>
            <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
            <div className='Bottles'>
              {
                bottles.map(bottle=><Bottle 
                    handleAddCart={handleAddCart}
                    key={bottle.id} bottle={bottle}>

                    </Bottle>)
            }  
            </div>

            
        </div>
    )
}