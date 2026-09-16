import styled from "styled-components";
import { NavLink } from 'react-router-dom'

export const NavList = styled.ul`
    display: flex;
    justify-items: center;
    align-items: center;
    gap: 15px;
    font-size: 35px;
`
export const CategoryStyle = styled(NavLink)`
    text-decoration: none;
    &:hover {
        background-color: DodgerBlue;
    }

    &.active{
        color: Gold;
    }
`

export const HomeStyled = styled(NavLink)`
  margin-right: 13px;
` 