import React from 'react';
import "./style-comp/ProductCard.css";
import { useState, useEffect } from "react";


const ProductCard = () => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then((json)=>{
                setItems(json);
                setIsLoaded(true);
            }, (error) => {
                setIsLoaded(true);
                setError(error);
            })
    }, [])

    const clothes = items.map((item) =>{
        return{
            id: item.id,
            title: item.title,
            images:item.image
        }
    })

    console.log(clothes);

    return (
        <>
        {clothes.map((item)=>(
        <div className="card-container">
            <ul>
                <li>{item.id}</li>  
                <li>{item.title}</li>   
                <li>{item.image}</li>

            </ul>
        </div>
        ))}
        </>
    )
}

export default ProductCard;
