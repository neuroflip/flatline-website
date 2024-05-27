import * as React from 'react'
import Title from './Title'
import Crawlear from './projects/Crawlear'
import ProjectObsolete from './projects/ProjectObsolete'
import Portfolio from './projects/Portfolio'
import AHX from './projects/AHX'

function Projects() {
  return <div id="projects">
    <Title><>PROJECTS</></Title>
    <Crawlear></Crawlear>
    <ProjectObsolete></ProjectObsolete>
    <Portfolio></Portfolio>
    <AHX></AHX>
  </div>
}

export default Projects
