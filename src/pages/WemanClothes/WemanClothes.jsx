import {useGetWemanProductQuery} from '../../redux/products/productsOperation'
import * as SC from './weman.styled'
export const WemanClothes = () => {
    const {data} = useGetWemanProductQuery()
    return <SC.ulStyled>
        {data?.map(({id, title, image, price})=> 
        <li key={id}>
         <SC.titleStyled>{title}</SC.titleStyled>
         <img src={image} alt={title}/>
         <p>${price}</p>
        </li>)}
    </SC.ulStyled>
}