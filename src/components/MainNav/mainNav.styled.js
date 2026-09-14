import styled from "styled-components";
import { NavLink } from 'react-router-dom'

export const NavList = styled.ul`
    display: flex;
    justify-items: center;
    align-items: center;
    gap: 20px;
    font-size: 35px;
`
export const CategoryStyle = styled(NavLink)`
    text-decoration: none;
    &:hover {
        background-color: blueviolet;
    }

    &.active{
        color: yellow;
    }
`

export const HomeStyled = styled(NavLink)`
  margin-right: 13px;
` 