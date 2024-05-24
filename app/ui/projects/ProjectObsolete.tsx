import * as React from 'react'
import Project from './Project'
import IconLink from '../IconLink'
import ProjectObsoleteTags from './ProjectObsoleteTags'

function ProjectObsolete () {
  return <Project linkUrl='http://flatline.hopto.org/3dEngine/' 
    title="Obsolete Engine"
    image="/projectObsolete.png">
    <><div className='p-5'>
        <IconLink imageClassName='float-left m-4' url="https://github.com/neuroflip/ObsoleteEngine/" iconImage="/logoGithub.png" iconAlt='github logo'></IconLink>
        3D wireframe basic engine. It can use objects from Blender or other 3D edition program using RAW format.
      </div>
      <div className='p-5'>
        <b>Check the top of the page. The rotating wireframe sphere is done in realtime with the 3dEngine</b>
        <ProjectObsoleteTags></ProjectObsoleteTags>
      </div></>    
  </Project>

}

export default ProjectObsolete