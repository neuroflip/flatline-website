import * as React from 'react'
import TouchManager from './TouchManager'
import Column from './Column'
import ArrowHandler from './ArrowHandler'
import { type ViewNavigatorState, MOVE_LEFT } from '../types/ViewNavigator'
import ViewNavigatorTransitionManager from '../ViewNavigatorTransitionManager'
import ColumnDataProvider from '../ColumnDataProvider'

import '../../css/ViewNavigator.scss'

function ViewNavigator (): React.JSX.Element {
  let col1: TrustedHTML = ''
  let col2: TrustedHTML = ''
  let col3: TrustedHTML = ''
  const dataProvider = new ColumnDataProvider()
  const transitionManager = new ViewNavigatorTransitionManager()
  const columnWidth = React.useRef(0)
  const [state, setState] = React.useState<ViewNavigatorState>({
    index: 0,
    lastMove: MOVE_LEFT,
    col1Classes: '',
    col2Classes: 'current',
    col3Classes: '',
    col1Style: { transform: `translate(-${columnWidth.current}px,0) perspective(400px) rotateY(-45deg) scale(0.5)` },
    col2Style: { transform: 'translate(0px, 0px)' },
    col3Style: { transform: `translate(${columnWidth.current}px,0) perspective(400px) rotateY(-45deg) scale(0.5)` },
    columns: []
  })

  React.useEffect(() => {
    const container = document.querySelector('.viewNavigatorContainer')

    columnWidth.current = container !== null ? container.clientWidth : 0
    setState(transitionManager.setInitialColumnWidth(state, columnWidth.current))

    return () => {
      // destroy del touchmanager
    }
  }, [])

  function onPageChange (finalProgressX: number): void {
    setState((state: ViewNavigatorState) => {
      const newState = transitionManager.onPageChange({ ...state }, finalProgressX, columnWidth.current)

      return newState
    })
  }

  function onMovePage (progressX: number): void {
    setState((state: ViewNavigatorState) => {
      return transitionManager.onMovePage({ ...state }, progressX, columnWidth.current)
    })
  }

  function onResetColumns (): void {
    setState((state: ViewNavigatorState) => {
      const newState = transitionManager.onResetColumns({ ...state }, columnWidth.current)

      setTimeout(() => {
        transitionManager.removeAnimation(newState)
      }, 300)

      return newState
    })
  }

  function onArrowLeftClick (): void {
    onPageChange(400)
  }

  function onArrowRightClick (): void {
    onPageChange(-400)
  }

  [col1, col2, col3] = dataProvider.getData({
    col1Classes: state.col1Classes,
    col2Classes: state.col2Classes,
    index: state.index
  })

  return <TouchManager onPageChange={onPageChange}
    onStartTouch={() => {}}
    onMoveTouch={onMovePage}
    onResetColumns={onResetColumns}>
    <div className='viewNavigatorContainer'>
        <Column id='col1' className={`col1 ${state.col1Classes}`} style={state.col1Style}>
          <div className="columnContainer" dangerouslySetInnerHTML={{ __html: col1 }} />
        </Column>
        <Column id='col2' className={`col2 ${state.col2Classes}`} style={state.col2Style}>
          <div className="columnContainer" dangerouslySetInnerHTML={{ __html: col2 }} />
        </Column>
        <Column id='col3' className={`col3 ${state.col3Classes}`} style={state.col3Style}>
          <div className="columnContainer" dangerouslySetInnerHTML={{ __html: col3 }} />
        </Column>
    </div>
    <ArrowHandler onRightClick={onArrowRightClick} onLeftClick={onArrowLeftClick}></ArrowHandler>
  </TouchManager>
}

export default ViewNavigator
