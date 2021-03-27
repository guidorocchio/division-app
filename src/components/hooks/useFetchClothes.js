import { useState, useEffect } from "react";

export const useFetchClothes= () =>{
    
    const [state, setstate] = useState({
        items:[],
        error: null,
        isLoaded:false
    })


    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
            .then((json)=>{
                setstate({
                    items: json.map((item)=>{
                        return{
                            id: item.id,
                            title: item.title,
                            images:item.image
                        }
                    }),
                    isLoaded:true               
                })
            
            }, (error) => {
                setstate({
                    error:error
                })
            }
            )         

    }, [])



    return state;
    
}