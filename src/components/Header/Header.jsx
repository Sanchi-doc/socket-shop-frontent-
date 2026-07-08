import { MainNav } from "../MainNav/MainNav"
import { AuthNav } from "../authNav/authNav"
import { useAuth } from "../../hooks/useAuth"
import {logout} from "../../redux/auth/authOperations"
import { useDispatch } from "react-redux"
import {HeaderStyle} from './header.styled'
import { Cabinet } from "../../pages/Cabinet/Cabinet"
import * as SC from './header.styled'
import styled from './header.module.css'


export const Header = () => {
   const dispatch = useDispatch()
   const handleLogout = async() => {
    await dispatch(logout())
}
    const {isLoggedIn} = useAuth() 
    return <SC.HeaderStyle>
    <nav className={styled.nav}>
        <SC.h2Styled>Potuzhno Shop</SC.h2Styled>
    <MainNav/>
    {!isLoggedIn && <AuthNav/> }
    {isLoggedIn && <SC.NavStyled to={`/cabinet`}>cabinet</SC.NavStyled>}
   {isLoggedIn && <button className={styled.button} onClick = {handleLogout} type="button">logout</button>}
   </nav>
    </SC.HeaderStyle>
}