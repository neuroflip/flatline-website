import * as React from 'react'
import Project from './Project'
import IconLink from '../IconLink'
import TetrisTags from './TetrisTags'

function Tetris () {
  return <Project linkUrl='http://flatline.hopto.org/tetris/' 
    title="Tetris!"
    image="/projectTetris.png">
    <div className='p-5'>
    <IconLink imageClassName='float-left m-4' url="https://github.com/neuroflip/simple-tetris" iconImage="/logoGithub.png" iconAlt='github logo'></IconLink>
    2D Canvas simple Tetris as a dev exercise.
    <TetrisTags></TetrisTags>
    </div>
  </Project>

}

export default Tetris