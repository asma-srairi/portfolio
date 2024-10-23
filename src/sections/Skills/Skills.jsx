import styles from './SkillsStyles.module.css';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';

function Skills() {
  const checkMarkIconDark = '/assets/checkmark-dark.svg';
  const checkMarkIconLight = '/assets/checkmark-light.svg';
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="C++ & Blueprints (Unreal Engine)" />
        <SkillList src={checkMarkIcon} skill="C# (Unity)" />
        <SkillList src={checkMarkIcon} skill="Physics Programming" />
        <SkillList src={checkMarkIcon} skill="AR/VR Development" />
        <SkillList src={checkMarkIcon} skill="Movie Rendering" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="UI/UX Design" />
        <SkillList src={checkMarkIcon} skill="Concept Design" />
        <SkillList src={checkMarkIcon} skill="Gameplay Mechanics" />
        <SkillList src={checkMarkIcon} skill="Economy Design" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Sketching" />
        <SkillList src={checkMarkIcon} skill="3D Modeling" />
        <SkillList src={checkMarkIcon} skill="Texture Painting" />
        <SkillList src={checkMarkIcon} skill="Environment Art" />
        <SkillList src={checkMarkIcon} skill="Particle Systems" />
      </div>
    </section>
  );
}

export default Skills;
