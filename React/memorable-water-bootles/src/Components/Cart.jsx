
import './cart.css'
export default function Cart({cart,handleRemoveFromCart}){
    return(<div className='cart-container'>{
        cart.map(bottle=><div key={bottle.id}>
            <img src={bottle.img} height={200} width={200}  />
             <button onClick={()=>handleRemoveFromCart(bottle.id)}>X</button>
             </div>)
        }

    </div>);
}