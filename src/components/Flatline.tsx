import * as React from 'react'
import ViewNavigator from './ViewNavigator'
import Header from './Header'

import '../css/Flatline.scss'

function Flatline (): React.JSX.Element {
  return (<>
      <Header></Header>
      <ViewNavigator></ViewNavigator>
    </>)
}

export default Flatline
