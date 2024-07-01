import * as React from 'react'
import Project from './Project'
import IconLink from '../IconLink'
import AHXTags from './AHXTags'

function AHX () {
  return <Project linkUrl="https://neuroflip.github.io/AhxMidiPlayerSite/" 
    title="AHX Midi Player"
    image="/flatline-website/projectAHX.webp">
    <>
      <div className='p-5'>
        <IconLink imageClassName='float-left m-4 w-8 h-8' url="https://github.com/neuroflip/AhxMidiPlayer" iconImage="/flatline-website/logoGithub.webp" iconAlt='github logo'></IconLink>
        AMP is a try to get some MIDI features using the AHX engine sounds at Commodore Amiga Range of computers. You can assign midi channels to ahx instruments, bang notes using NOTE ON midi messages or edit ahx instrument parameters like the ADSR curve using CC midi commands.
        <AHXTags></AHXTags>
      </div>
    </>
  </Project>

}

export default AHX
