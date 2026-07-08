import { NavLink, useParams } from "react-router-dom";
import { useGetProductsCategoryQuery} from "../../redux/products/productsOperation"
import * as SC from "./category.styled"
export const Categories = () => {
   const {category} = useParams()
   const {data} = useGetProductsCategoryQuery(category)
   console.log('data',data);
   return<SC.ulStyled>
    {data?.map(({id, title, image, price}) =>
    <li key={id}>
    <NavLink to={`/details/${id}`}>
        <SC.titleStyled>{title}</SC.titleStyled>
        <img src={image} alt={title}/>
        <p>Price: ${price}</p>
    </NavLink>
    </li>)}
   </SC.ulStyled>
}