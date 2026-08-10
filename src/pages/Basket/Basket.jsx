import { useState } from "react"
import {BasketListItem} from '../../components/BasketListItem/BasketListItem'
export const Basket = () => {
    const [basket, setBasket] = useState(()=>{
        const isStorage = JSON.parse(localStorage.getItem('basket'))??[]
        return isStorage
    })
    const [totalPrice, setTotalPrice] = useState(() =>{
        const isTotal = JSON.parse(localStorage.getItem('basket'))??[]
        const correctTotal = isTotal.reduce((acc, item) => {acc = acc + ( item.price * item.count)
        return acc
    },0)
    return correctTotal
    })
    
    const getTotalPrice = (value) => {
        setTotalPrice(value)
    }
    return <>
    {basket?.map(({id, title, image, price, count}) =>
    <BasketListItem key={id}  id={id} title={title} image={image} price={price} count={count} getTotalPrice={getTotalPrice}/>)}
    <p>Total:${(totalPrice).toFixed(2)}</p>
    </>
}