import styles from './HeroStyles.module.css'
import heroImg from '../../assets/hero-img.jpeg'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import twitterLight from '../../assets/twitter-light.svg'
import twitterDark from '../../assets/twitter-dark.svg'
import githubLight from '../../assets/github-light.svg'
import githubDark from '../../assets/github-dark.svg'
import linkedinLight from '../../assets/linkedin-light.svg'
import linkedinDark from '../../assets/linkedin-dark.svg'
import CV from '../../assets/cv.pdf'
import { useTheme } from '../../common/ThemeContext'

function Hero() {

    const { theme, toggleTheme } = useTheme();

    const themeIcon = theme === 'light' ? sun : moon;
    const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
    
  return (
    <section className={styles.container} id="hero">
        <div className={styles.colorModeContainer}>
            <img className={styles.hero} src={heroImg} alt='Profile picture of Ashif Ali'/>
            <img className={styles.colorMode} src={themeIcon} alt='Color mode icon' onClick={toggleTheme}/>
        </div>
        <div className={styles.info}>
            <h1>
                Ashif Ali
            </h1>
            <h2>Senior Software Engineer</h2>
            <span>
                <a href="https://twitter.com/" target="_blank"><img src={twitterIcon} alt="twitter Icon"/></a>
                <a href="https://github.com/ashif-ali-official" target="_blank"><img src={githubIcon} alt="Github Icon"/></a>
                <a href="https://linkedin.com/in/whoashif" target="_blank"><img src={linkedinIcon} alt="Linkedin Icon"/></a>
            </span>
            <p className={styles.description}>
            Experienced in Web Application Development with 4 years of dedicated experience in crafting innovative applications. A passionate professional adept at transforming visions into tangible digital solutions that align seamlessly with end-user expectations. Committed to delivering results that bridge the gap between concept and reality.
            </p>
            <a href={CV} download>
                <button className="hover">
                    Resume
                </button>
            </a>
        </div>
    </section>
  )
}

export default Hero
