import styles from './HeroStyles.module.css';
import heroImg from '../../assets/ImgAsma/AsmaHero.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import InstagramLight from '../../assets/InstagramLight.svg';
import InstagramDark from '../../assets/InstagramDark.svg';
import facebookLight from '../../assets/Facebook-light.svg';
import facebookDark from '../../assets/Facebook-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();
  const CV = new URL('../../assets/ImgAsma/AsmaSrairi_resume.pdf', import.meta.url).href;

  const themeIcon = theme === 'light' ? sun : moon;
  const InstagramIcon = theme === 'light' ? InstagramLight : InstagramDark;
  const facebookIcon = theme === 'light' ? facebookLight : facebookDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Asma Srairi"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Asma Srairi
        </h1>
        <h2>Software Engineer
        <br />Concept & Environment Artist | Storyboarder
        </h2>
        <span>
          <a href="https://twitter.com/" target="_blank">
            <img src={InstagramIcon} alt="Instagram icon" />
          </a>
          <a href="https://github.com/" target="_blank">
            <img src={facebookIcon} alt="facebook icon" />
          </a>
          <a href="https://linkedin.com/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p>
        I’m a Tunisian game developer <br />combining technical and artistic skills<br /> to create immersive, engaging experiences.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
