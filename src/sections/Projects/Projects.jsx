import styles from './ProjectsStyles.module.css'
import ProjectCard from '../../common/ProjectCard'
import socialApp from '../../assets/social-app.png'
import hireApp from '../../assets/hipsster.png'
import videoApp from '../../assets/fitlift.png'
import hotelRatingMgmt from '../../assets/hotel-rating.jpg'

function Projects() {
  return (
    <section className={styles.container} id="projects">
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
      <ProjectCard 
            src={hotelRatingMgmt} 
            link="https://github.com/ashif-ali-official/hotel-rating-management" 
            h3="Hotel Rating Management" 
            p="A service for hotel rating management."
        />
        <ProjectCard 
            src={socialApp} 
            link="https://github.com/ashif-ali-official/social-app" 
            h3="Social App" 
            p="A social media app."
        />
        <ProjectCard 
            src={hireApp} 
            link="https://github.com/ashif-ali-official/HireAndGetHired" 
            h3="Hire & Get Hired App" 
            p="A workforce hiring app."
        />
        <ProjectCard 
            src={videoApp} 
            link="https://github.com/ashif-ali-official/video-sharing-app" 
            h3="Video Sharing App" 
            p="A video sharing app."
        />
      </div>
    </section>
  )
}

export default Projects
