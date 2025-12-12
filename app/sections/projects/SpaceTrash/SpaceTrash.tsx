import Project from '@/app/ui/Project/Project'
import SpaceTrashTags from './SpaceTrashTags'

const SpaceTrash = () => {
  return <Project linkUrl='http://flatline.hopto.org/asteroid/' 
    title="Space Trash Demo"
    image="/flatline-website/projectSpaceTrash.webp">
    <div className='p-5'>
      2D Vector game. Avoid space trash collisions with earth.
      <SpaceTrashTags></SpaceTrashTags>
    </div>
  </Project>
}

export default SpaceTrash
