import * as React from 'react'
import IconLink from '../IconLink'

import gitHubLogo from '../../../static/logoGithub.png'
import crawlearLogo from '../../../static/logocrawlear.png'
import '../../css/projects/Crawlear.scss'

function CrawlearCard() {
    return <div className='crawlear card'>
        <IconLink url="https://crawlear.com" imageClassName='crawlearLogo' iconImage={crawlearLogo} iconAlt='crawlear logo'></IconLink>

        <div className="textContainer crawlear">
            <div className="coverText">
                <IconLink url='https://github.com/crawlear-com/crawlear-com.github.io' iconImage={gitHubLogo}></IconLink>
                Owner and main developer of crawlear.com .
                <p>For <u>Rock Crawler</u> fans is a professional and social scoring board for your 1/10 or 1/24 Crawler events or competitions compatible with the rules of AECAR, ISRCC, Levante 1/24, Mini Crawler Passion and the ZonaRc Regional Championship.</p>
                <p>For <u>Scale Crawler</u> fans is a Route repository with a search map where pilots can create new public routes using actual GPS data</p>
            </div>
        </div>
    </div>
}

export default CrawlearCard