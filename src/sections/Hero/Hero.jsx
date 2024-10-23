import styles from './HeroStyles.module.css';


import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();
  const heroImg = '/assets/ImgAsma/AsmaHero.png';
  const sun = '/assets/sun.svg';
  const moon = '/assets/moon.svg';
  const InstagramLight = '/assets/InstagramLight.svg';
  const InstagramDark = '/assets/InstagramDark.svg';
  const facebookLight = '/assets/Facebook-light.svg';
  const facebookDark = '/assets/Facebook-dark.svg';
  const linkedinLight = '/assets/linkedin-light.svg';
  const linkedinDark = '/assets/linkedin-dark.svg';
  const CV = new URL('../../assets/ImgAsma/AsmaSrairi_Resume.pdf', import.meta.url).href;

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
