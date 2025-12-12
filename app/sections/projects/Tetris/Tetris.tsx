import * as React from 'react'
import Project from '@/app/ui/Project/Project'
import IconLink from '@/app/ui/IconLink/IconLink'
import TetrisTags from './TetrisTags'

const Tetris = () => {
  return <Project linkUrl='https://neuroflip.github.io/simple-tetris/' 
    title="Tetris!"
    image="/flatline-website/projectTetris.webp">
    <div className='p-5'>
    <IconLink imageClassName='float-left m-4 w-8 h-8' url="https://github.com/neuroflip/simple-tetris"
      iconImage="/flatline-website/logoGithub.webp" iconAlt='github logo'></IconLink>
    2D Canvas simple Tetris as a dev exercise.
    <TetrisTags></TetrisTags>
    </div>
  </Project>
}

export default Tetris
