import * as React from 'react'
import IconLink from './IconLink'

import photo from '../../static/yo.png'
import cvLogo from '../../static/cvLogo.png'
import githubLogo from '../../static/logoGithub.png'
import linkedInLogo from '../../static/logoLinkedIn.png'

function Title() {
    return  <><div className='titleContainer'>
        <canvas id="mainContainer--canvas"></canvas>
        <img className='photo' src={photo} alt="it's me!"></img>
        <h1>José Ángel Anguita Rovira</h1>
        <h2>Crafting webs since the 0x5A's</h2>
        <p className='opentowork'>Barcelona 
            <br /><b>#OpenToWork</b>
        </p>
        </div>
        <p className='initialIcons'>
            <IconLink url="https://github.com/neuroflip/" iconImage={githubLogo} iconAlt='Github Profile'></IconLink>
            <IconLink url="https://www.linkedin.com/in/joseangelanguitarovira/" iconImage={linkedInLogo} iconAlt='Linkedin Profile'></IconLink>
            <IconLink url='http://flatline.hopto.org/JoseAAnguitaCV.pdf' iconImage={cvLogo} iconAlt="Download Curriculum Vitae"></IconLink>
        </p>
    </>
}

export default Title