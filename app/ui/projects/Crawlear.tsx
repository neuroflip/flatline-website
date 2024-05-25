import * as Reacrt from 'react'
import Project from './Project'
import IconLink from '../IconLink'
import CrawlearTags from './CrawlearTags'

function Crawlear () {
  return <Project linkUrl='https://crawlear.com' 
    title="Crawlear.com"
    image="/crawlearSite.png">
    <div className='p-5'>
      <IconLink imageClassName='float-left m-4' url="https://github.com/crawlear-com/crawlear-com.github.io" iconImage="/logoGithub.png" iconAlt='github logo'></IconLink>
      Owner and main developer of <a href="https://crawlear.com">crawlear.com</a>, 
      an online service for professionals and fans of Rock and Scale Rc Crawlers trying to bring new technology and solutions for the hobby.
      <CrawlearTags></CrawlearTags>
    </div>
  </Project>

}

export default Crawlear