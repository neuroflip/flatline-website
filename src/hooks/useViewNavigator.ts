import * as React from 'react'
import { type ViewNavigatorState, MOVE_LEFT } from '../types/ViewNavigator'
import ViewNavigatorTransitionManager from '../ViewNavigatorTransitionManager'
import ColumnDataProvider from '../ColumnDataProvider'
import Utils from '../Utils'

function useViewNavigator(): Array<any> {
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
      columns: [React.useRef<HTMLDivElement>(null),
        React.useRef<HTMLDivElement>(null),
        React.useRef<HTMLDivElement>(null)]
    })
  
    React.useEffect(() => {
      const container = document.querySelector('.viewNavigatorContainer')
  
      columnWidth.current = container !== null ? container.clientWidth : 0
      setState(transitionManager.setInitialColumnWidth(state, columnWidth.current))
    }, [])
  
    function onPageChange (finalProgressX: number): void {
      setState((state: ViewNavigatorState) => {
        let newState = transitionManager.onPageChange({ ...state }, finalProgressX, columnWidth.current)
  
        newState = addTransitionEndToRemoveAnimation(newState)
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
        let newState = transitionManager.onResetColumns({ ...state }, columnWidth.current)
  
        newState = addTransitionEndToRemoveAnimation(newState)
        return newState
      })
    }
  
    function onArrowLeftClick (): void {
      onPageChange(Utils.WIDTH_TO_MOVE)
    }
  
    function onArrowRightClick (): void {
      onPageChange(-Utils.WIDTH_TO_MOVE)
    }
  
    function addTransitionEndToRemoveAnimation (state: ViewNavigatorState): ViewNavigatorState {
      const removeAnimation = (): void => {
        setState(transitionManager.removeAnimation(state))
      }
  
      state.columns[0]?.current?.addEventListener('transitionend', removeAnimation, { once: true })
      state.columns[0]?.current?.addEventListener('transitioncancel', () => {
        state.columns[0]?.current?.removeEventListener('transitionend', removeAnimation)
      }, { once: true })
  
      state.columns[1]?.current?.addEventListener('transitionend', removeAnimation, { once: true })
      state.columns[1]?.current?.addEventListener('transitioncancel', () => {
        state.columns[1]?.current?.removeEventListener('transitionend', removeAnimation)
      }, { once: true })
  
      state.columns[2]?.current?.addEventListener('transitionend', removeAnimation, { once: true })
      state.columns[2]?.current?.addEventListener('transitioncancel', () => {
        state.columns[2]?.current?.removeEventListener('transitionend', removeAnimation)
      }, { once: true })
  
      return state
    }
  
    [col1, col2, col3] = dataProvider.getData({
      col1Classes: state.col1Classes,
      col2Classes: state.col2Classes,
      index: state.index
    })

    return [state, col1, col2, col3, onPageChange, onMovePage, onResetColumns, onArrowLeftClick, onArrowRightClick]
}

export default useViewNavigator