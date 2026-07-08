import { useGetElectronicsProductQuery } from "../../redux/products/productsOperation"
import * as SC from './elecronics.styled'
export const Electronics = () => {
    const {data} = useGetElectronicsProductQuery()
    return <SC.ulStyled>
        {data?.map(({id, title, image, price})=> 
        <li key={id}>
          <SC.titleStyled>{title}</SC.titleStyled>
          <img src={image} alt={title}/>
          <p>${price}</p>
        </li>)}
    </SC.ulStyled>
}