/**
 * @jest-environment jsdom
 */

import * as React from 'react'
import renderer from 'react-test-renderer'
import Flatline from '../src/components/Flatline'

let container = null

beforeEach(() => {
  container = window.document.createElement('div')
  container.id = 'root'
  window.document.body.appendChild(container)
})

afterEach(() => {
  window.document.body.removeChild(container)
})

it('Flatline Integration test', () => {
  const component = renderer.create(<Flatline></Flatline>)
  const tree = component.toJSON()

  expect(tree).toMatchSnapshot()
})
