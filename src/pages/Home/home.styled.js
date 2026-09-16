import styled from "styled-components";
export const NavWrap = styled.div`
  background-color: ${p => p.theme.colors.basketCount};
  padding: ${p => p.theme.space[3]}px
`

export const UlHomeStyled = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`