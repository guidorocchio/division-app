import { useState, useEffect } from "react";
import {getClothes} from '../helpers/getClothes';

export const useFetchClothes= (category) =>{
    const [state, setstate] = useState({
        data:[],
        loading:true
    })
    
    useEffect(()=>{
    getClothes(category)
        .then(imgs=>{
            setTimeout(()=>{
                setstate({
                    data:imgs,
                    loading:false
                }, 3000);
            })
        
        });
    }, [category]);



    return state;

}