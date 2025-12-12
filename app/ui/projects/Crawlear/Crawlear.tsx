import Project from '../../Project/Project';
import IconLink from '../../IconLink/IconLink';
import CrawlearTags from './CrawlearTags';

const Crawlear = () => {
  return <Project linkUrl='https://crawlear.com' 
    title="Crawlear.com"
    image="/flatline-website/crawlearSite.webp">
    <div className='p-5'>
      <IconLink imageClassName='w-8 h-8 float-left m-4' url="https://github.com/crawlear-com/crawlear-com.github.io" 
        iconImage="/flatline-website/logoGithub.webp" iconAlt='github logo'></IconLink>
      Owner and main developer of <a href="https://crawlear.com">crawlear.com</a>, 
      an online service for professionals and fans of Rock and Scale Rc Crawlers trying to bring new technology
      and solutions for the hobby.
      <CrawlearTags></CrawlearTags>
    </div>
  </Project>

}

export default Crawlear
