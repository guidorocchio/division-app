import React from 'react';
import "./style-comp/ProductCard.css";

const ProductCard = ({name, img}) => {

    return (
        <div className="card-container" >
            <div className="image-container">
                <img className="image" src={img} alt={name}/>
            </div>
           
        </div>
    )
}

export default ProductCard
