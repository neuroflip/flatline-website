import * as Reacrt from 'react'
import Project from './Project'
import SpaceTrashTags from './SpaceTrashTags'

function SpaceTrash () {
  return <Project linkUrl='http://flatline.hopto.org/asteroid/' 
    title="Space Trash Demo"
    image="/projectSpaceTrash.png">
    <div className='p-5'>
      2D Vector game. Avoid space trash collisions with earth.
      <SpaceTrashTags></SpaceTrashTags>
    </div>
  </Project>

}

export default SpaceTrash