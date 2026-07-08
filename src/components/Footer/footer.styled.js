import styled from "styled-components"
import { NavLink } from 'react-router-dom'
export const NavStyle = styled(NavLink)`
   padding: ${p => p.theme.space[3]}px
`
export const FooterStyle = styled.footer`
    background-color: ${p => p.theme.colors.backdropBackground}
`