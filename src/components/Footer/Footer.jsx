import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa"
import { NavLink } from 'react-router-dom'
import * as SC from './footer.styled'

export const Footer = () => {
    return<SC.FooterStyle>
      <div >
          {/* <img  width='100px' src={Img} alt="tmgb_image" /> */}
      <div>
        <a href='https://drive.google.com/file/d/1NLIgHejd5_-bQob5h9XHei3y66IA9aIW/view?usp=sharing' target='_blank'><FaFileAlt/>My CV</a>
        <a href='https://github.com/Sanchi-doc' target='_blank'><FaGithub/>My Github</a>
        <a href='https://www.linkedin.com/in/oleksandr-babichenko-471a103a7/' target='_blank'><FaLinkedin/>My Linkedin</a>
      </div>
      <div>
        <SC.NavStyle to='/about'>about</SC.NavStyle>
        <NavLink to='/privacy-policy'>privacy-policy</NavLink>
      </div>
      </div>
      <p>
        © {new Date().getFullYear()} Oleksandr Babichenko. All rights reserved.
      </p>
    </SC.FooterStyle>
}
