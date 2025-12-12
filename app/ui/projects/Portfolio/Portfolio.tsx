import Project from '../../Project/Project';
import IconLink from '../../IconLink/IconLink';
import PorfolioTags from './PortfolioTags';

const Portfolio = () => {
  return <Project linkUrl='https://neuroflip.github.io/flatline-website/' 
    title="JSLab And Experiments"
    image="/flatline-website/projectPortfolio.webp">
    <div className='p-5'>
      <IconLink imageClassName='float-left m-4 w-8 h-8' url="https://github.com/neuroflip/flatline-website"
        iconImage="/flatline-website/logoGithub.webp" iconAlt='github logo'></IconLink>
      This site. Personal portfolio of some projects and experiments during the last years.
      <PorfolioTags></PorfolioTags>
    </div>
  </Project>

}

export default Portfolio
