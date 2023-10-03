/**
 * @jest-environment jsdom
 */
import ViewNavigatorTransitionManager from '../src/ViewNavigatorTransitionManager'

let container = null
const state = {
  col1Style: { },
  col2Style: { },
  col3Style: { },
  col1Classes: 'current animated',
  col2Classes: 'animated',
  col3Classes: 'animated'
}
const transitionManager = new ViewNavigatorTransitionManager()

beforeEach(() => {
  container = window.document.createElement('div')
  container.id = 'root'
  window.document.body.appendChild(container)
})

afterEach(() => {
  window.document.body.removeChild(container)
})

it('ViewNavigatorTransitionManager sets initial styles', () => {
  const newState = transitionManager.setInitialColumnWidth(state, 100)

  expect(newState.col1Style).toStrictEqual({ transform: 'translate(-100px,0) scale(0.5)' })
  expect(newState.col2Style).toStrictEqual({ transform: 'translate(0px, 0px)' })
  expect(newState.col3Style).toStrictEqual({ transform: 'translate(100px,0) scale(0.5)' })
})

it('ViewNavigatorTransitionManager removes animation classes', () => {
  const newState = transitionManager.removeAnimation(state, 100)

  expect(newState.col1Classes).toBe('current ')
  expect(newState.col2Classes).toBe('')
  expect(newState.col3Classes).toBe('')
})

it('ViewNavigatorTransitionManager sets correct styles while moving LEFT', () => {
  const newState = transitionManager.onMovePage(state, -100, 375)

  expect(newState.col1Style).toStrictEqual({ transform: 'translate(-100px,0)' })
  expect(newState.col2Style).toStrictEqual({ transform: 'translate(275px,0)' })
  expect(newState.col3Style).toStrictEqual({ transform: 'translate(-475px,0)' })
})

it('ViewNavigatorTransitionManager sets correct styles while moving RIGHT', () => {
  const newState = transitionManager.onMovePage(state, 100, 375)

  expect(newState.col1Style).toStrictEqual({ transform: 'translate(100px,0)' })
  expect(newState.col2Style).toStrictEqual({ transform: 'translate(475px,0)' })
  expect(newState.col3Style).toStrictEqual({ transform: 'translate(-275px,0)' })
})

it('ViewNavigatorTransitionManager changes correctly page', () => {
  const newState = transitionManager.onPageChange(state, -300, 375)

  expect(newState.col1Style).toStrictEqual({ transform: 'translate(-375px,0) scale(0.5)' })
  expect(newState.col2Style).toStrictEqual({ transform: 'translate(0px,0)' })
  expect(newState.col3Style).toStrictEqual({ transform: 'translate(375px,0) scale(0.5)' })
})
