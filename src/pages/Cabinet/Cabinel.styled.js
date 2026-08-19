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
   width: 300px;
`

export const inputFileStyled = styled.input`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;

  :active,
  :focus {
    clip: auto;
    height: auto;
    margin: 0;
    overflow: visible;
    position: static;
    white-space: normal;
    width: auto;
  }
`
export const spanStyled = styled.span`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;

  :active,
  :focus {
    clip: auto;
    height: auto;
    margin: 0;
    overflow: visible;
    position: static;
    white-space: normal;
    width: auto;
  }
`

export const divImageStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;

  transition: transform 250ms linear;

  &:hover {
    transform: scale(1.5);
  }

  @media screen and (max-width: 767px) {
    width: 8px;
    height: 8px;
  }

  @media screen and (min-width: 768px) {
    width: 18px;
    height: 18px;
  }
`;

export const LabelImageWraper = styled.label`
  position: relative;
  `