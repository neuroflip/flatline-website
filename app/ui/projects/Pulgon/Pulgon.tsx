import * as Reacrt from 'react'
import Project from '../../Project/Project'
import PulgonTags from './PulgonTags'

const Pulgon = () => {
  return <Project linkUrl='http://flatline.hopto.org/pulgon/' 
    title="Pulgon shoot'm up Engine Demo"
    image="/flatline-website/projectPulgon.webp">
    <div className='p-5'>
      2D Shoote'm up 2D custom Canvas Engine. 2 Levels, several enemies, shoot upgrade, and others.
      <br /> Touch and keyboard controls.
      <PulgonTags></PulgonTags>
    </div>
  </Project>
}

export default Pulgon
