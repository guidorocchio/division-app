import React from 'react';
import "./style-comp/ProductCard.css";

const ProductCard = ({name, img}) => {

    return (
        <div >
            <img className="image" src={img} alt={name}/>
        </div>
    )
}

export default ProductCard
