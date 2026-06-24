
import "./product.css";
import Price from "./Price.jsx";

function Product({ title, idx }) {
    let oldPrices = ["12,95", "11,900", "1,599", "599"];
    let newPrices = ["8,999", "9,199", "899", "277"];
    let description=[["9000 DPI","5 Programmable buttons"],["Intutive surface",""],["Designed for Ipad Pro","intutive surface"],["Wireles","optical orientation"]
    ]
    return (
        <div className="product">
            <p>{title}</p>
            <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>
            <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />

        </div>
    )
}

export default Product;