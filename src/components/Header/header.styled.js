import styled from "styled-components";
import { NavLink } from "react-router-dom"

export const HeaderStyle = styled.header`
  background-color: #00adff;
   border-radius: 0 0 12px 12px;
`
export const h2Styled = styled.h2`
   margin: 10px;
   color: yellow;
`

export const NavStyled = styled(NavLink)`
      margin: 28px;
`
export const navigateStyled = styled.nav`
   display: flex;
  justify-content: center; 
`
export const logutStyled = styled.button`
    margin: 20px;
    padding: 10px;
    background-color: transparent;
    border-radius: ${p => p.theme.borders.borderRadius};
    cursor: pointer;
      &:hover{
         background-color:yellow;
        color: black;
      }
  
`