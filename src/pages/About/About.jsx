import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa"
import styles from './about.module.css'
export const About = () => {
   return <div className={styles.infoWraper}>
      <h1 className={styles.title}>Sanch1Films</h1>
   <div className={styles.info}>
   <p>This is not a pirated platform for watching movies, but you can see relevant information about the world of cinema ( but you can find pirates of the caribbean :) )</p>
   <p>This platform helps you find your favorite movies. You can also add them to your favorites and follow the latest news</p>
   <p>If you want to find a movie by name, go to the movie page </p>
   <p>On the home page you can see current movie for the week</p>
   <p>When you open a movie, you can view its details, leave comments, and rate it</p>
   <p>More datail information about this platform you will contact the author of the project(less 2000$ not propose ;) )  </p>
   </div>
  <div className={styles.links}>
   <a className={styles.social} href='https://drive.google.com/file/d/1NLIgHejd5_-bQob5h9XHei3y66IA9aIW/view?usp=sharing' target='_blank'><FaFileAlt/>My CV</a>
   <a className={styles.social} href='https://github.com/Sanchi-doc' target='_blank'><FaGithub/>My Github</a>
   <a href='https://www.linkedin.com/in/oleksandr-babichenko-471a103a7/' target='_blank'><FaLinkedin/>My Linkedin</a>
  </div>

   <ul>
   
      </ul>
      </div>
}