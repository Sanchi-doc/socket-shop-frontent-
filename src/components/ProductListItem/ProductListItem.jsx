import { NavLink } from "react-router-dom";
import * as SC from '../ProductListItem/ProductListItem.styled'
export const ProductListItem = ({id, category, img}) => {
   return <SC.LiCategoryStyled>
       <NavLink to = {`/category/${category}`}>
       <SC.ImageCategoryStyled src={img} alt={category} />
         <SC.CategoryStyle>{category}</SC.CategoryStyle>
       </NavLink>
    </SC.LiCategoryStyled>
}