import * as React from 'react'
import ViewNavigator from './ViewNavigator'
import Header from './Header'
import IconLink from './IconLink'
import Engine from '../ObsoleteEngine/Engine'
import Title from './Title'
import TagCard from './TagCard'
import CrawlearCard from './projects/CrawlearCard'

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
        <Title></Title>
        <p className='card'>Social and friendly person interested in web sites since the late 90’s. Passionate about innovation in all that I do.</p> 
        <p className='card'>Working with modern web applications since 2002, helping several bcn tech startups (MedHouses, Cybex, Layers, <b>Marfeel</b>) building awsome products 
          and working with international and multidisciplinary teams.</p>
        <TagCard></TagCard>

        <CrawlearCard></CrawlearCard>
      { state ? 
        <ViewNavigator onClose={onClose}></ViewNavigator> : <></> }
        <button className='projectsButton' onClick={renderProjects}>View some projects</button>
      </div>      
    </>)
}

export default Flatline
