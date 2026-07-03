
import "./Bottle.css"
export default function Bottle({bottle,handleAddCart}){
   
    return (
        <div className="Bottle">
            
            <img src={bottle.img}></img>
            <h4>
                {bottle.name}</h4>
                <p>{bottle.price}$</p>
                <p>Available:{bottle.stock} Remaining</p>
                <button onClick={()=>handleAddCart(bottle)}>Buy Now </button>
        </div>
    );
}