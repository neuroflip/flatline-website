import type { ViewNavigatorState } from '../../types/ViewNavigator'

const ViewNavigatorTransitionManager = jest.fn().mockImplementation(() => {
  return {
    constructor: jest.fn().mockImplementation(()=>{
      console.log('init! constructor en mock de transitioner')
    }),
    setInitialColumnWidth: jest.fn().mockImplementation((state: ViewNavigatorState, width: number): ViewNavigatorState => {
      const newState: ViewNavigatorState = {
        index: 0,
        lastMove: 0,
        col1Classes: '',
        col2Classes: 'current',
        col3Classes: '',
        columns: [],
        col1Style: { transform: 'translate(0px, 0px)' },
        col2Style: { transform: 'translate(0px, 0px)' },
        col3Style: { transform: 'translate(0px, 0px)' }
      }

      return newState
    }),
    removeAnimation: jest.fn().mockImplementation((state: ViewNavigatorState): ViewNavigatorState => {
      const newState: ViewNavigatorState = {
        index: 0,
        lastMove: 0,
        col1Classes: '',
        col2Classes: 'current',
        col3Classes: '',
        columns: [],
        col1Style: { transform: 'translate(0px, 0px)' },
        col2Style: { transform: 'translate(0px, 0px)' },
        col3Style: { transform: 'translate(0px, 0px)' }
      }

      return newState
    }),
    onMovePage: jest.fn().mockImplementation((state: ViewNavigatorState, progressX: number, columnWidth: number): ViewNavigatorState => {
      const newState: ViewNavigatorState = {
        index: 0,
        lastMove: 0,
        col1Classes: '',
        col2Classes: '',
        col3Classes: 'current',
        columns: [],
        col1Style: { transform: 'translate(-300px, 0px)' },
        col2Style: { transform: 'translate(0px, 0px)' },
        col3Style: { transform: 'translate(300px, 0px)' }
      }

      return newState
    }),
    onResetColumns: jest.fn().mockImplementation((state: ViewNavigatorState, columnWidth: number): ViewNavigatorState => {
      const newState: ViewNavigatorState = {
        index: 0,
        lastMove: 0,
        col1Classes: '',
        col2Classes: 'current',
        col3Classes: '',
        columns: [],
        col1Style: { transform: 'translate(0px, 0px)' },
        col2Style: { transform: 'translate(0px, 0px)' },
        col3Style: { transform: 'translate(0px, 0px)' }
      }

      return newState
    }),
    onPageChange: jest.fn().mockImplementation((state: ViewNavigatorState, finalProgressX: number, columnWidth: number): ViewNavigatorState => {
      const newState: ViewNavigatorState = {
        index: 1,
        lastMove: 0,
        col1Classes: '',
        col2Classes: '',
        col3Classes: 'current',
        columns: [],
        col1Style: { transform: 'translate(300px, 0px)' },
        col2Style: { transform: 'translate(-300px, 0px)' },
        col3Style: { transform: 'translate(0px, 0px)' }
      }

      return newState
    })

  }
})

export default ViewNavigatorTransitionManager
