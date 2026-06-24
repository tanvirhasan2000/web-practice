export default function Price({oldPrice,newPrice}){
    let oldstyles ={
        textDecorationLine:"line-through",
    };
    let newStyles={
        fontWeight:"bold",
    };
    let style={
        backgroundColor:"#e0c367",
        height:"50px",
        borderBottomLeftRadius:"14px",
        borderBottomRightRadius:"14px",
    }
    return (
        <div style={style}>
            <span style={oldstyles}>{oldPrice}</span>
            <span style={newStyles}> {newPrice}</span>
        </div>
    )
}