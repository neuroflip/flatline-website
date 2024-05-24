import * as React from 'react'
import IconLink from './IconLink'

function ContentHeader() {
    return  <>
        <div className='w-full p-15 mt-20'>
            <canvas id="mainContainer--canvas" className='absolute top-20 -z-10'></canvas>
                
            <img className='w-15 rounded-full border-gray-800 border w-20 inline float-left mb-5 ml-5 mr-5' src='/yo.png' alt="it's me!"></img>
            <h1 className='text-xl m-15 mt-15 mr-15 mb-0 ml-15'>José Ángel Anguita Rovira</h1>
            <h2 className='text-xs'>Crafting webs since the 0x5A's</h2>
            <p className='text-right'>
                Barcelona<br />
                <b>#OpenToWork</b>
            </p>
        </div>
        <p className='flex-row flex-wrap flex'>
            <IconLink imageClassName='m-5' url="https://github.com/neuroflip/" iconImage='/logoGithub.png' iconAlt='Github Profile'></IconLink>
            <IconLink imageClassName='m-5' url="https://www.linkedin.com/in/joseangelanguitarovira/" iconImage='/logoLinkedIn.png' iconAlt='Linkedin Profile'></IconLink>
            <IconLink imageClassName='m-5' url='http://flatline.hopto.org/JoseAAnguitaCV.pdf' iconImage='/cvLogo.png' iconAlt="Download Curriculum Vitae"></IconLink>
        </p>
    </>
}

export default ContentHeader