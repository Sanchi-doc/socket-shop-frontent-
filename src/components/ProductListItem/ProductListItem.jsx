import { NavLink } from "react-router-dom";
import * as SC from './ProductListItem.styled'
export const ProductListItem = ({id, category, img}) => {
   return <SC.LiCategoryStyled>
       <NavLink to = {`/category/${category}`}>
         <SC.CategoryStyle>{category}</SC.CategoryStyle>
        <img src={img} alt={category} />
       </NavLink>
    </SC.LiCategoryStyled>
}