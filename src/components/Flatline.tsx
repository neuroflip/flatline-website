import * as React from 'react'
import ViewNavigator from './ViewNavigator'
import Header from './Header'
import Tag from './Tag'
import IconLink from './IconLink'
import Engine from '../ObsoleteEngine/Engine'

import photo from '../../static/yo.png'
import cvLogo from '../../static/cvLogo.png'
import githubLogo from '../../static/logoGithub.png'
import crawlearLogo from '../../static/logocrawlear.png'
import '../css/Flatline.scss'

function Flatline (): React.JSX.Element {
  const [state, setState] = React.useState(false)

  function renderProjects() {
    setState(true)
  }

  function onClose() {
    setState(false)
  }

  React.useEffect(() => {
    const t = new Engine(document.getElementById('mainContainer--canvas'));
    t.init();
  }, [])

  return (<>
      <Header></Header>
      <div className='flatline-mainContainer'>
        <img className='photo' src={photo} alt="it's me!"></img>
        <h1>José Ángel Anguita Rovira</h1>
        <h2>Crafting webs since the 0x56's</h2>
        <p>Barcelona. 46 years old. 
          <br />#Open to work.</p>
        <p>
          <IconLink url="https://github.com/neuroflip/" iconImage={githubLogo} iconAlt='Github page'></IconLink>
          <IconLink url='http://flatline.hopto.org/JoseAAnguitaCV.pdf' iconImage={cvLogo} iconAlt="Download Curriculum Vitae"></IconLink>
        </p>
        <p>Social and friendly person interested in web sites since the late 90’s. 
          Passionate about innovation in all that I do. Working since 2007 in the startup ecosystem with international and multidisciplinary teams.</p>
        <p>
          <IconLink url="https://crawlear.com" imageClassName='crawlearLogo' iconImage={crawlearLogo} iconAlt='crawlear logo'></IconLink>
          Owner and main developer of <a href="https://crawlear.com">crawlear.com</a>, 
          an online service for professionals and fans of Rock and Scale Rc Crawlers trying to bring new technology and solutions for the hobby.</p>
        <div className='tagContainer'>
          <Tag text='front-end'></Tag><Tag text='html'></Tag><Tag text='scss'></Tag><Tag text='javascript'></Tag><Tag text='ES6'></Tag>
          <Tag text='typescript'></Tag><Tag text='react'></Tag><Tag text='nextjs'></Tag><Tag text='pwa'></Tag><Tag text='workbox'></Tag>
          <Tag text='spa'></Tag><Tag text='storybook'></Tag><Tag text='cordova apps'></Tag><Tag text='app store'></Tag><Tag text='google play'></Tag>
          <Tag text='amp pages'></Tag><Tag text='instant articles'></Tag><Tag text='webpack'></Tag><Tag text='testing'></Tag><Tag text='jest'></Tag>
        </div>

      { state ? 
        <ViewNavigator onClose={onClose}></ViewNavigator> : <></> }
        <button className='projectsButton' onClick={renderProjects}>View some projects</button>
      </div>      
    </>)
}

export default Flatline
