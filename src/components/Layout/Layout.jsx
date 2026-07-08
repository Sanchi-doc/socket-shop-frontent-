import {Header} from '../Header/Header'
import {Footer} from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
import * as SC from './layout.styled'
export const Layout = () => {
    return <><Header/>
    <SC.mainStyles><Outlet/></SC.mainStyles>
    <Footer/></>
}