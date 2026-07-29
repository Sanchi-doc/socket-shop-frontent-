import { useParams } from "react-router-dom"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { getBasket } from "../../redux/basket/basketReduser"
import { addToBasket } from "../../redux/basket/basketReduser"
import { useGetSingleProductQuery } from "../../redux/products/productsOperation"
import * as SC from './Details.styled'
import { useEffect, useState } from "react"
export const ShopDetails = () => {
    const {id} = useParams()
    const {data} = useGetSingleProductQuery(id)
    const dispatch = useDispatch()
    const basket = useSelector(getBasket)
    console.log(basket);
    const [isDisabled, setIsDisabled] = useState(false)

    useEffect(()=>{
      const isInBasket = basket.find(product => product.id === data?.id)
      if(isInBasket){
        setIsDisabled(true)
      }
    }, [basket])

    const handleBuy = () => {
        const isInStorage = JSON.parse(localStorage.getItem('basket'))??[]
        const isInBasket = basket.find(product => product.id === data?.id)
        
        const productToBuy = {
            id: data?.id,
            title: data?.title,
            image: data?.image,
            price: data?.price,
            count: 1
        }
        if(!isInBasket){
            dispatch(addToBasket(productToBuy))
            setIsDisabled(true)
            localStorage.setItem('basket', JSON.stringify([...isInStorage, productToBuy]))
        }
        
    }
    
    
    return <SC.divAboutStyled>
    <SC.imgStyled src={data?.image} alt={data?.title}/>
    <div>
   <SC.h2Styled> {data?.title}</SC.h2Styled>
    <p> About: {data?.description}</p>
   <p>Price: ${data?.price}</p>
   <p>Count: {data?.rating.count}</p>
   <p>Rate:{data?.rating.rate}</p>
    <SC.buttonStyled type="button" onClick={handleBuy} disabled={isDisabled}>buy</SC.buttonStyled>
    </div>
    </SC.divAboutStyled>
}