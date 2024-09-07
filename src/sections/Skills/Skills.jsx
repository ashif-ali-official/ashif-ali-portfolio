import styles from './SkillsStyles.module.css'
import checkMarkLight from '../../assets/checkmark-light.svg'
import checkMarkDark from '../../assets/checkmark-dark.svg'
import SkillList from '../../common/SkillList'
import { useTheme } from '../../common/ThemeContext'

function Skills() {

    const { theme, toggleTheme } = useTheme();
    const checkMarkIcon = theme === 'light' ? checkMarkLight : checkMarkDark;

  return (
    <section id="skills" className={styles.container}>
        <h1>Skills</h1>
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="JAVA Core" />
            <SkillList src={checkMarkIcon} skill="Microservices" />
            <SkillList src={checkMarkIcon} skill="Spring Boot" />
            <SkillList src={checkMarkIcon} skill="Hibernate" />
        </div>
        <hr />
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="ReactJS" />
            <SkillList src={checkMarkIcon} skill="JavaScript" />
            <SkillList src={checkMarkIcon} skill="HTML" />
            <SkillList src={checkMarkIcon} skill="CSS" />
            <SkillList src={checkMarkIcon} skill="Bootstrap" />
        </div>
        <hr />
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="MySQL" />
            <SkillList src={checkMarkIcon} skill="Oracle Database" />
            <SkillList src={checkMarkIcon} skill="Postgres" />
        </div>
        <hr />
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="Agile Methodolies" />
            <SkillList src={checkMarkIcon} skill="ServiceNow" />
            <SkillList src={checkMarkIcon} skill="AWS ECS" />
            <SkillList src={checkMarkIcon} skill="Docker" />
            <SkillList src={checkMarkIcon} skill="VersionOne" />
        </div>
    </section>
  )
}

export default Skills
