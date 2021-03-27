export const getClothes= async(category)=>{
    const url = 'https://fakestoreapi.com/products';
    const resp = await fetch(url)
    const {data} = await resp.json();
    
    console.log(data);
    return data
}