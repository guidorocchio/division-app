import React from 'react';
import "./style-comp/ProductGrid.css";
import {useFetchClothes} from './hooks/useFetchClothes';
import ProductCard from './ProductCard';


const ProductGrid = () => {
    const {items, error, isLoaded} = useFetchClothes();

    if(!isLoaded){
        return (
            <h1>TA CARGANDO</h1>
        )

    } 
    if (items){
        return (
            <>
               <ul className="cards-grid">
                   {items.map((item)=>(
                    <ProductCard name={item.title} img={item.images}/>
                     ))}
                </ul>
            
            </>
        )
    }



    
}

export default ProductGrid;
