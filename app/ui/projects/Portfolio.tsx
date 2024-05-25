import * as Reacrt from 'react'
import Project from './Project'
import IconLink from '../IconLink'
import PorfolioTags from './PortfolioTags'

function Portfolio () {
  return <Project linkUrl='http://flatline.hopto.org' 
    title="JSLab And Experiments"
    image="/projectPortfolio.png">
    <div className='p-5'>
      <IconLink imageClassName='float-left m-4' url="https://github.com/neuroflip/flatline-website" iconImage="/logoGithub.png" iconAlt='github logo'></IconLink>
      This site. Personal portfolio of some projects and experiments during the last years.
      <PorfolioTags></PorfolioTags>
    </div>
  </Project>

}

export default Portfolio