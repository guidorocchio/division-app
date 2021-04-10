import React from 'react';
import "./style-comp/ProductGrid.css";
import {useFetchClothes} from './hooks/useFetchClothes';
import ProductCard from './ProductCard';


const ProductGrid = () => {

    // cantidad de articulos //How many products;;
    let howMany = 16;

    const {items, error, isLoaded} = useFetchClothes(howMany);
    console.log(items);

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
                    <ProductCard name={item.title} img={item.images} price={item.price}/>
                     ))}
                </ul>
            
            </>
        )
    }



    
}

export default ProductGrid;
