import * as React from 'react'
import InputManager from './InputManager'
import Column from './Column'
import ArrowHandler from './ArrowHandler'
import useViewNavigator from '../hooks/useViewNavigator'

import '../css/ViewNavigator.scss'
import { ViewNavigatorProps } from '../types/ViewNavigator'

function ViewNavigator ({ onClose }: ViewNavigatorProps): React.JSX.Element {
  const [state, col1, col2, col3, onPageChange, onMovePage, onResetColumns, onArrowLeftClick, onArrowRightClick] = useViewNavigator()

  return <InputManager onPageChange={onPageChange}
    onStartTouch={() => {}}
    onMovePage={onMovePage}
    onResetColumns={onResetColumns}>
      <>
        <div className='closeButton' onClick={onClose}>x</div>
        <div className='viewNavigatorContainer'>
            <Column ref={state.columns[0]} id='col1' className={`col1 ${state.col1Classes}`} style={state.col1Style}>
              <div className="columnContainer" dangerouslySetInnerHTML={{ __html: col1 }} />
            </Column>
            <Column ref={state.columns[1]} id='col2' className={`col2 ${state.col2Classes}`} style={state.col2Style}>
              <div className="columnContainer" dangerouslySetInnerHTML={{ __html: col2 }} />
            </Column>
            <Column ref={state.columns[2]} id='col3' className={`col3 ${state.col3Classes}`} style={state.col3Style}>
              <div className="columnContainer" dangerouslySetInnerHTML={{ __html: col3 }} />
            </Column>
        </div>
        <ArrowHandler onRightClick={onArrowRightClick} onLeftClick={onArrowLeftClick}></ArrowHandler>
      </>
  </InputManager>
}

export default ViewNavigator
