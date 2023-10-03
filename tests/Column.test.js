/**
 * @jest-environment jsdom
 */

import * as React from 'react'
import renderer from 'react-test-renderer'
import { render } from '@testing-library/react'
import { screen } from '@testing-library/dom'
import Column from '../src/components/Column'

let container = null

beforeEach(() => {
  container = window.document.createElement('div')
  container.id = 'root'
  window.document.body.appendChild(container)
})

afterEach(() => {
  window.document.body.removeChild(container)
})

it('Column renders as expected', () => {
  const component = renderer.create(<Column id='colId' className='colClassname' style='colStyle'>
      <div className='colChildren'></div>
    </Column>)
  const tree = component.toJSON()

  expect(tree).toMatchSnapshot()
})

it('Column renders the children', () => {
  render(<Column id='colId' className={'colClassname'} style={{ display: 'block' }}>
          <div className='colChildren'>Column Content</div>
      </Column>, container)

  expect(screen.getByText('Column Content')).toBeTruthy()
})
