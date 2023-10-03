/**
 * @jest-environment jsdom
 */

import ColumnDataProvider from '../src/ColumnDataProvider'
import DataProvider from '../src/DataProvider'
import '@testing-library/jest-dom'

let container
jest.mock('../src/DataProvider')

beforeEach(() => {
  container = window.document.createElement('div')
  container.id = 'root'
  window.document.body.appendChild(container)
})

afterEach(() => {
  window.document.body.removeChild(container)
})

it('ColumnDataProvider manages data correctly (1)', () => {
  const columnDataProvider = new ColumnDataProvider()
  const [col1, col2, col3] = columnDataProvider.getData({
    col1Classes: 'current',
    col2Classes: '',
    index: 0
  })

  expect(col1).toBe('<div>column1 0</div>')
  expect(col2).toBe('<div>column2 0</div>')
  expect(col3).toBe('<div>column5 0</div>')
})

it('ColumnDataProvider manages data correctly (2)', () => {
  const columnDataProvider = new ColumnDataProvider()
  const [col1, col2, col3] = columnDataProvider.getData({
    col1Classes: '',
    col2Classes: 'current',
    index: 1
  })

  expect(col1).toBe('<div>column1 1</div>')
  expect(col2).toBe('<div>column2 1</div>')
  expect(col3).toBe('<div>column3 1</div>')
})
