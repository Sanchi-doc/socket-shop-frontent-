import { useEffect } from "react"

export const TestComponent = () => {
    useEffect(()=>{
       fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => console.log(data)); 
    },[])
    return <></>
}