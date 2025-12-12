import * as React from 'react'
import Title from '../ui/Title/Title'
import Tunnel from './projects/Tunnel/Tunnel'
import Pulgon from './projects/Pulgon/Pulgon'
import SpaceTrash from './projects/SpaceTrash/SpaceTrash'
import Tetris from './projects/Tetris/Tetris'

const Experiments = () => {
  return <div id="experiments">
    <Title><>EXPERIMENTS</></Title>
    <Tunnel></Tunnel>
    <Pulgon></Pulgon>
    <SpaceTrash></SpaceTrash>
    <Tetris></Tetris>
  </div>
}

export default Experiments
