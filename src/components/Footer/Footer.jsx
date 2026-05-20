import styles from './footer.module.css'
import Img from '../../images/logo.svg'
import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa"
import { NavLink } from 'react-router-dom'

export const Footer = () => {
    return<footer className={styles.footer}>
      <div className={styles.main}>
          <img className={styles.img} width='100px' src={Img} alt="tmgb_image" />
      <div>
        <a  className={styles.infoWrap}href='https://drive.google.com/file/d/1NLIgHejd5_-bQob5h9XHei3y66IA9aIW/view?usp=sharing' target='_blank'><FaFileAlt/>My CV</a>
        <a  className={styles.infoWrap}href='https://github.com/Sanchi-doc' target='_blank'><FaGithub/>My Github</a>
        <a className={styles.infoWrap} href='https://www.linkedin.com/in/oleksandr-babichenko-471a103a7/' target='_blank'><FaLinkedin/>My Linkedin</a>
      </div>
      <div>
        <NavLink className={styles.nav}to='/about'>about</NavLink>
        <NavLink className={styles.nav} to='/privacy-policy'>privacy-policy</NavLink>
      </div>
      </div>
      <p className={styles.copyright}>
        © {new Date().getFullYear()} Oleksandr Babichenko. All rights reserved.
      </p>
    </footer>
}
