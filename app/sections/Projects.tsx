import Title from '../ui/Title/Title'
import Crawlear from './projects/Crawlear/Crawlear'
import ProjectObsolete from './projects/ProjectObsolete/ProjectObsolete'
import Portfolio from './projects/Portfolio/Portfolio'
import AHX from './projects/AHX/AHX'
import ImageGallery from './projects/ImageGallery/ImageGallery'

const Projects = () => {
  return <div id="projects">
    <Title><>PROJECTS</></Title>
    <Crawlear></Crawlear>
    <ImageGallery></ImageGallery>
    <ProjectObsolete></ProjectObsolete>
    <Portfolio></Portfolio>
    <AHX></AHX>
  </div>
}

export default Projects
