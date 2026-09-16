import { NavLink, useParams } from "react-router-dom";
import { useGetProductsCategoryQuery} from "../../redux/products/productsOperation"
import * as SC from "./category.styled"
export const Categories = () => {
   const {category} = useParams()
   const {data} = useGetProductsCategoryQuery(category)
   return<SC.ulStyled>
    {data?.map(({id, title, image, price}) =>
    <SC.LiStyled key={id}>
    <SC.navLinkImgStyled to={`/details/${id}`}>
        <SC.titleStyled>{title}</SC.titleStyled>
        <SC.ImagesProductStyled src={image} alt={title}/>
        <p>Price: ${price}</p>
    </SC.navLinkImgStyled>
    </SC.LiStyled>)}
   </SC.ulStyled>
}