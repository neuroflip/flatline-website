import * as React from 'react'
import Title from './Title'
import Tunnel from './projects/Tunnel'
import Pulgon from './projects/Pulgon'
import SpaceTrash from './projects/SpaceTrash'
import Tetris from './projects/Tetris'

function Experiments() {
  return <div id="projects">
    <Title><>EXPERIMENTS</></Title>
    <Tunnel></Tunnel>
    <Pulgon></Pulgon>
    <SpaceTrash></SpaceTrash>
    <Tetris></Tetris>
  </div>
}

export default Experiments
