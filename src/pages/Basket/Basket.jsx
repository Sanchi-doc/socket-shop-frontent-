import { useState } from "react"
import {BasketListItem} from '../../components/BasketListItem/BasketListItem'
export const Basket = () => {
    const [basket, setBasket] = useState(()=>{
        const isStorage = JSON.parse(localStorage.getItem('basket'))??[]
        return isStorage
    })

    
    return <>
    {basket?.map(({id, title, image, price, count}) =>
    <BasketListItem key={id}  id={id} title={title} image={image} price={price} count={count}/>)}
    </>
}