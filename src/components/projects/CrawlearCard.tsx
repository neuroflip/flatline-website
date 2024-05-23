import * as React from 'react'
import IconLink from '../IconLink'

import gitHubLogo from '../../../static/logoGithub.png'
import crawlearLogo from '../../../static/logocrawlear.png'
import '../../css/projects/Crawlear.scss'

function CrawlearCard() {
    return <div className='halfcard card'>
        <p>
          <IconLink url="https://crawlear.com" imageClassName='crawlearLogo' iconImage={crawlearLogo} iconAlt='crawlear logo'></IconLink>
          <IconLink url="https://github.com/crawlear-com/crawlear-com.github.io" imageClassName='githubLogo' iconImage={gitHubLogo} iconAlt='github logo'></IconLink>
          Owner and main developer of <a href="https://crawlear.com">crawlear.com</a>, 
          an online service for professionals and fans of Rock and Scale Rc Crawlers trying to bring new technology and solutions for the hobby.
        </p>
    </div>
}

export default CrawlearCard