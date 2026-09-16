import styled from "styled-components";
import { NavLink } from "react-router-dom"

export const HeaderStyle = styled.header`
  background-color: DodgerBlue;
   border-radius: 0 0 12px 12px;
   padding-top: 20px;
   padding-bottom: 20px;
   width: 100vw;
`
export const h2Styled = styled.h2`
   color: Gold;
`

export const NavStyled = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 35px;
  margin: 10px
`
export const navigateStyled = styled.nav`
   display: flex;
  justify-content: center; 
`
export const logutStyled = styled.button`
    margin: auto 0;
    padding: 10px;
    background-color: transparent;
    display: block;
    width: 100px;
    height: 67px;
    border-radius: ${p => p.theme.borders.borderRadius};
    cursor: pointer;
      &:hover{
         background-color:Gold;
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
  border: 1px solid Gold;
  background-color: Gold;
  border-radius: 16px;
`
export const GifStyled = styled.img`
  width: 100px;
  display: block;
  border: 1px solid;
  border-radius: 16px;
  margin: 0 auto;
`

export const TitleDivStyled = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
`