import * as React from 'react'
import Project from './Project'
import IconLink from '../IconLink'

function AHX () {
  return <Project linkUrl="http://ahxmidiplayer.hopto.org/" 
    title="AHX Midi Player"
    image="/projectAHX.png">
    <p className='p-5'>
      <IconLink imageClassName='float-left m-4' url="https://github.com/neuroflip/AhxMidiPlayer" iconImage="/logoGithub.png" iconAlt='github logo'></IconLink>
      AMP is a try to get some MIDI features using the AHX engine sounds at Commodore Amiga Range of computers. You can assign midi channels to ahx instruments, bang notes using NOTE ON midi messages or edit ahx instrument parameters like the ADSR curve using CC midi commands.
    </p>
  </Project>

}

export default AHX