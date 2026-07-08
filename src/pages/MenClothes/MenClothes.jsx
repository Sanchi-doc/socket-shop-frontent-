import { useGetMenProductsQuery } from "../../redux/products/productsOperation"
import * as SC from './menClothes.styled'
export const MenClothes = () => {
    const {data} = useGetMenProductsQuery()
    console.log('data', data)
    return <SC.ulStyled>
        {data?.map(({id, title, image, price}) => 
        <li key={id}>
            <SC.titleStyled>{title}</SC.titleStyled>
            <img src={image} alt={title}/>
            <p>${price}</p>
        </li>)}
    </SC.ulStyled>
}