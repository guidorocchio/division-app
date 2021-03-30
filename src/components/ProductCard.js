import React from 'react';
import "./style-comp/ProductCard.css";

const ProductCard = ({name, img, price}) => {




    return (
        <div className="card-container" >
            <img className="image" src={img} alt={name}/>
            <div>
                <p value={name}>{name.slice(0,15)}</p>    
            </div>
            <div>
                <p>${price}</p>
            </div>
            <div>
                <button>ver</button>
                <button>agregar al carrito</button>
            </div>
        </div>
    )
}

export default ProductCard
