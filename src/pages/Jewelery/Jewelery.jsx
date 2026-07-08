import { useGetJeweleryProductQuery } from "../../redux/products/productsOperation"
import * as SC from './jewelery.styled'
export const Jewelery = () => {
    const {data} = useGetJeweleryProductQuery()
    return <SC.ulStyled>
        {data?.map(({id, title, image, price}) => 
        <li key={id}>
         <SC.titleStyled >{title}</SC.titleStyled>
         <img src={image} alt={title} />
         <p>${price}</p>
        </li>)}
    </SC.ulStyled>
}