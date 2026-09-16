import styled from "styled-components";
import { NavLink } from "react-router-dom";
export const ulStyled =  styled.ul`
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
   align-items: center;
   gap: 20px;
   background-color: Gold;
`
export const titleStyled = styled.h2`
  color: #00adff;
  /* width: 100px */
`
export const LiStyled = styled.li`
  /* margin: 20px; */
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
  width: 350px;
  
`
export const ImagesProductStyled = styled.img`
  flex-grow: 1;
  display: block;
  margin: 0 auto;
  width: 300px;
  height: 350px;
`
export const navLinkImgStyled = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 500px;
`