import { CiShoppingBasket } from "react-icons/ci";
import { MainNav } from "../MainNav/MainNav"
import { AuthNav } from "../authNav/authNav"
import { useAuth } from "../../hooks/useAuth"
import {logout} from "../../redux/auth/authOperations"
import { useDispatch } from "react-redux"
import {HeaderStyle} from './header.styled'
import { Cabinet } from "../../pages/Cabinet/Cabinet"
import * as SC from './header.styled'


export const Header = () => {
   const dispatch = useDispatch()
   const handleLogout = async() => {
    await dispatch(logout())
}
    const {isLoggedIn} = useAuth() 
    return <SC.HeaderStyle>
    <SC.navigateStyled >
        <SC.h2Styled>Potuzhno Shop</SC.h2Styled>
    <MainNav/>
    {!isLoggedIn && <AuthNav/> }
    {isLoggedIn && <SC.NavStyled to={`/cabinet`}>cabinet</SC.NavStyled>}
    {isLoggedIn && <SC.NavStyled to={`/basket`}>{CiShoppingBasket}</SC.NavStyled>}
   {isLoggedIn && <SC.logutStyled  onClick = {handleLogout} type="button">logout</SC.logutStyled>}
   </SC.navigateStyled>
    </SC.HeaderStyle>
}