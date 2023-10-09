import { type ViewNavigatorState, MOVE_LEFT, MOVE_RIGHT } from './types/ViewNavigator'

class ViewNavigatorTransitionManager {
  setInitialColumnWidth (state: ViewNavigatorState, width: number): ViewNavigatorState {
    const newState = { ...state }

    newState.col1Style = { transform: `translate(-${width}px,0) scale(0.5)` }
    newState.col2Style = { transform: 'translate(0px, 0px)' }
    newState.col3Style = { transform: `translate(${width}px,0) scale(0.5)` }

    return newState
  }

  removeAnimation (state: ViewNavigatorState): ViewNavigatorState {
    const newState = { ...state }

    newState.col1Classes = (newState.col1Classes.replace('animated', ''))
    newState.col2Classes = (newState.col2Classes.replace('animated', ''))
    newState.col3Classes = (newState.col3Classes.replace('animated', ''))

    return newState
  }

  onMovePage (state: ViewNavigatorState, progressX: number, columnWidth: number): ViewNavigatorState {
    addAnimationIfNeeded(state)

    if (state.col1Classes.includes('current')) {
      state.col1Style = { transform: `translate(${progressX}px,0)` }
      state.col2Style = { transform: `translate(${progressX + columnWidth}px,0)` }
      state.col3Style = { transform: `translate(${progressX - columnWidth}px,0)` }
    } else if (state.col2Classes.includes('current')) {
      state.col1Style = { transform: `translate(${progressX - columnWidth}px,0)` }
      state.col2Style = { transform: `translate(${progressX}px,0)` }
      state.col3Style = { transform: `translate(${progressX + columnWidth}px,0)` }
    } else if (state.col3Classes.includes('current')) {
      state.col1Style = { transform: `translate(${progressX + columnWidth}px,0)` }
      state.col2Style = { transform: `translate(${progressX - columnWidth}px,0)` }
      state.col3Style = { transform: `translate(${progressX}px,0)` }
    }

    return state
  }

  onResetColumns (state: ViewNavigatorState, columnWidth: number): ViewNavigatorState {
    if (state.lastMove === MOVE_LEFT) {
      if (state.col1Classes.includes('current')) {
        state.col1Style = { transform: 'translate(0px, 0px)' }
        state.col2Style = { transform: `translate(${columnWidth}px,0) scale(0.5)` }
        state.col3Style = { transform: `translate(${-columnWidth}px,0) scale(0.5)` }
      } else if (state.col2Classes.includes('current')) {
        state.col1Style = { transform: `translate(${-columnWidth}px,0) scale(0.5)` }
        state.col2Style = { transform: 'translate(0px,0)' }
        state.col3Style = { transform: `translate(${columnWidth}px,0) scale(0.5)` }
      } else if (state.col3Classes.includes('current')) {
        state.col1Style = { transform: `translate(${columnWidth}px,0) scale(0.5)` }
        state.col2Style = { transform: `translate(${-columnWidth}px,0) scale(0.5)` }
        state.col3Style = { transform: 'translate(0px,0)' }
      }
    } else {
      if (state.col1Classes.includes('current')) {
        state.col1Style = { transform: 'translate(0px, 0px)' }
        state.col2Style = { transform: `translate(${-columnWidth}px,0) scale(0.5)` }
        state.col3Style = { transform: `translate(${columnWidth}px,0) scale(0.5)` }
      } else if (state.col2Classes.includes('current')) {
        state.col1Style = { transform: `translate(${columnWidth}px,0) scale(0.5)` }
        state.col2Style = { transform: 'translate(0px,0)' }
        state.col3Style = { transform: `translate(${-columnWidth}px,0) scale(0.5)` }
      } else if (state.col3Classes.includes('current')) {
        state.col1Style = { transform: `translate(${-columnWidth}px,0) scale(0.5)` }
        state.col2Style = { transform: `translate(${columnWidth}px,0) scale(0.5)` }
        state.col3Style = { transform: 'translate(0px,0)' }
      }
    }

    return state
  }

  onPageChange (state: ViewNavigatorState, finalProgressX: number, columnWidth: number): ViewNavigatorState {
    addAnimationIfNeeded(state)

    if (finalProgressX <= 0) {
      state.lastMove = MOVE_LEFT
      if (state.col1Classes.includes('current')) {
        state.col1Style = { transform: `translate(${-columnWidth}px,0) scale(0.5)` }
        state.col2Style = { transform: 'translate(0px,0)' }
        state.col3Style = { transform: `translate(${columnWidth}px,0) scale(0.5)` }
        state.col1Classes = state.col1Classes.replace('current', '')
        state.col2Classes += 'current'
        state.col3Classes = state.col3Classes.replace('animated', '')
      } else if (state.col2Classes.includes('current')) {
        state.col1Style = { transform: `translate(${columnWidth}px,0) scale(0.5)` }
        state.col2Style = { transform: `translate(${-columnWidth}px,0) scale(0.5)` }
        state.col3Style = { transform: 'translate(0px,0)' }
        state.col2Classes = state.col2Classes.replace('current', '')
        state.col3Classes += 'current'
        state.col1Classes = state.col1Classes.replace('animated', '')
      } else if (state.col3Classes.includes('current')) {
        state.col1Style = { transform: 'translate(0px,0)' }
        state.col2Style = { transform: `translate(${columnWidth}px,0) scale(0.5)` }
        state.col3Style = { transform: `translate(${-columnWidth}px,0) scale(0.5)` }
        state.col3Classes = state.col3Classes.replace('current', '')
        state.col1Classes += 'current'
        state.col2Classes = state.col2Classes.replace('animated', '')
      }

      state.index += 1
    } else {
      state.lastMove = MOVE_RIGHT
      if (state.col1Classes.includes('current')) {
        state.col1Style = { transform: `translate(${columnWidth}px,0) scale(0.5)` }
        state.col2Style = { transform: `translate(${-columnWidth}px,0) scale(0.5)` }
        state.col3Style = { transform: 'translate(0px,0)' }
        state.col1Classes = state.col1Classes.replace('current', '')
        state.col3Classes += 'current'
        state.col2Classes = state.col2Classes.replace('animated', '')
      } else if (state.col2Classes.includes('current')) {
        state.col1Style = { transform: 'translate(0px,0)' }
        state.col2Style = { transform: `translate(${columnWidth}px,0) scale(0.5)` }
        state.col3Style = { transform: `translate(${-columnWidth}px,0) scale(0.5)` }
        state.col2Classes = state.col2Classes.replace('current', '')
        state.col1Classes += 'current'
        state.col3Classes = state.col3Classes.replace('animated', '')
      } else if (state.col3Classes.includes('current')) {
        state.col1Style = { transform: `translate(${-columnWidth}px,0) scale(0.5)` }
        state.col2Style = { transform: 'translate(0px,0)' }
        state.col3Style = { transform: `translate(${columnWidth}px,0) scale(0.5)` }
        state.col3Classes = state.col3Classes.replace('current', '')
        state.col2Classes += 'current'
        state.col1Classes = state.col1Classes.replace('animated', '')
      }

      state.index -= 1
    }

    return state
  }
}

function addAnimationIfNeeded (state: ViewNavigatorState): void {
  state.col1Classes = state.col1Classes.includes('animated') ? `${state.col1Classes}` : `animated ${state.col1Classes}`
  state.col2Classes = state.col2Classes.includes('animated') ? `${state.col2Classes}` : `animated ${state.col2Classes}`
  state.col3Classes = state.col3Classes.includes('animated') ? `${state.col3Classes}` : `animated ${state.col3Classes}`
}

export default ViewNavigatorTransitionManager
