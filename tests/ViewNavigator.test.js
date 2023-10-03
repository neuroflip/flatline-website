/**
 * @jest-environment jsdom
 */

import * as React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import renderer from 'react-test-renderer'
import ViewNavigator from '../src/components/ViewNavigator'
import DataProvider from '../src/DataProvider'
import TouchManager from '../src/TouchManager'
import ViewNavigatorTransitionManager from '../src/components/ViewNavigatorTransitionManager'
import '@testing-library/jest-dom'

let container = null

jest.mock('../src/TouchManager')
jest.mock('../src/DataProvider')
jest.mock('../src/components/ViewNavigatorTransitionManager')

beforeEach(() => {
  DataProvider.mockClear()

  container = window.document.createElement('div')
  container.id = 'root'
  window.document.body.appendChild(container)
})

afterEach(() => {
  window.document.body.removeChild(container)
})

it('ViewNavigator loads the first content in columns', () => {
  render(<ViewNavigator></ViewNavigator>, container)

  expect(screen.queryByText('column1 0')).toBeInTheDocument()
  expect(screen.queryByText('column2 0')).toBeInTheDocument()
  expect(screen.queryByText('column5 0')).toBeInTheDocument()
  expect(screen.queryByText('column3 0')).not.toBeInTheDocument()
  expect(screen.queryByText('column4 0')).not.toBeInTheDocument()
})

it('ViewNavigator loads the next content in columns', () => {
  render(<ViewNavigator></ViewNavigator>, container)

  fireEvent.mouseDown(container, {
    target: container,
    clientX: 10,
    clientY: 100
  })

  fireEvent.mouseMove(container, {
    target: container,
    clientX: -300,
    clientY: 100
  })

  fireEvent.mouseUp(container, {
    target: container,
    clientX: -300,
    clientY: 100
  })

  expect(screen.queryByText('column1 1')).toBeInTheDocument()
  expect(screen.queryByText('column2 1')).toBeInTheDocument()
  expect(screen.queryByText('column3 1')).toBeInTheDocument()
})

it('snapshot test', () => {
  const component = renderer.create(<ViewNavigator></ViewNavigator>)
  const tree = component.toJSON()

  expect(tree).toMatchSnapshot()
})

