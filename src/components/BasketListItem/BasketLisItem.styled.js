import styled from "styled-components";

export const H1Styled = styled.h2`
  font-size: ${p => p.theme.fontSizes.m}px;
  color: black;
`
export const ImgStyled = styled.img`
    width: ${p => p.theme.fontWeights.min}px;
`
export const LiStyled = styled.li`
   display: flex;
   align-items: center;
   margin: 20px;
   border-radius: 16px;
   background-color: ${p => {
    if(p.category === "men's clothing") {
      return "blue"
    }
    else if(p.category === "women's clothing"){
      return 'pink'
    }
    else if (p.category === "electronics") {
      return 'coral'
    }
    else if (p.catgory === "jewelery") {
      return 'gold'
    }
   }};
`
export const DivStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const buttonStyled = styled.button`
  border: none;
  background-color: transparent;
`

export const removeButtonStyled = styled.button`
   border-radius: 16px;
   font-size: 15px;
   margin: 10px auto;
`

export const divColumnStyled = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  width: 500px;
`