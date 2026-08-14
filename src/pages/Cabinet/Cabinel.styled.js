import styled from "styled-components"

export const h2Styled = styled.h2`
   color: black
`
export const formStyled = styled.form`
  display: flex;
  justify-content: space-around;
  align-items: center;
`
export const divStyled = styled.div`
  margin: 20px
`

export const inputStyled = styled.input`
  display: block;
  margin: 20px;
  height: 50px;
  width: 300px;
  padding-right: 35px;
  border-radius: ${p => p.theme.borders.borderRadius};
`
export const buttonStyled = styled.button`
  border-radius: ${p => p.theme.borders.borderRadius};
  font-size: ${p => p.theme.fontSizes.ml}px
`

export const passStyled = styled.div`
 position: relative
`
export const hideButtonStyled = styled.button`
  position: absolute;
  bottom: 8px;
  right: 20px;
  font-size: ${p => p.theme.fontSizes.ml}px;
  background-color: transparent;
  outline: none;
  border: none;
`

export const paragrafStyled = styled.p`
  color: ${p => p.theme.colors.backdropBackground}
`
export const imageStyle = styled.img`
   border-radius: 16px;
   width: 200px;
   height: 200px;
`