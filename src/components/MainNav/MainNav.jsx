// import data from '../../data/Navigation.json'
import { NavLink } from 'react-router-dom'
import { BsFillCameraReelsFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { TbHomeFilled } from "react-icons/tb";
import { useGetCategoriesQuery } from '../../redux/products/productsOperation';
import * as SC from './mainNav.styled'

export const MainNav = () => {
    const {data} = useGetCategoriesQuery()
    return <SC.NavList>
     {data?.data.map(({ id, href, category }) => 
    <li key={id}>
       <SC.CategoryStyle to={`/category/${href}`}>
       <p>{category}</p>
       </SC.CategoryStyle>
    </li>)}
    <li>
        <NavLink to={'/'}>Home</NavLink>
    </li>
    </SC.NavList>
}