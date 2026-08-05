import { useState } from "react"
import {BasketListItem} from '../../components/BasketListItem/BasketListItem'
export const Basket = () => {
    const [basket, setBasket] = useState(()=>{
        const isStorage = JSON.parse(localStorage.getItem('basket'))??[]
        return isStorage
    })
    console.log('basket', basket.length);
    
    const basketAverage = basket.reduce((acc, item) => {acc = acc + (item.price * item.count);
        return acc
    }, 0)
    return <>
    {basket?.map(({id, title, image, price, count}) =>
    <BasketListItem key={id}  id={id} title={title} image={image} price={price} count={count}/>)}
    <p>Total:${(basketAverage).toFixed(2)}</p>
    </>
}