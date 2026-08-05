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
      margin-left: 28px; 
      display: flex;
      justify-content: center;
      align-items: center;
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

export const parentDivStyled = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const basketLengthStyled = styled.div`
  position: absolute;
  top: 10px;
  right: 25px;
  border: 1px solid yellow;
  background-color: yellow;
  border-radius: 16px;
`