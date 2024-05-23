import * as React from 'react'
import IconLink from '../IconLink'

import gitHubLogo from '../../../static/logoGithub.png'
import logo from '../../../static/logo1.png'
import '../../css/projects/Crawlear.scss'

function ObsoleteEngineCard() {
    return <div className='halfcard card'>
        <p>
          <IconLink url="http://flatline.hopto.org/3dEngine" imageClassName='logo' iconImage={logo} iconAlt='obsolete engine logo'></IconLink>
          <IconLink url="https://github.com/neuroflip/ObsoleteEngine" imageClassName='githubLogo' iconImage={gitHubLogo} iconAlt='github logo'></IconLink>
          <p>3D wireframe basic engine. It can use objects from Blender or other 3D edition program using RAW format. Demo of animated objects implemented in Obsolete Engine.</p>
        </p>
    </div>
}

export default ObsoleteEngineCard