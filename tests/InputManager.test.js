/**
 * @jest-environment jsdom
 */

import * as React from 'react'
import { render } from '@testing-library/react'
import { screen } from '@testing-library/dom'
import InputManager from '../src/components/InputManager'
import Utils from '../src/Utils'
import TouchManager from '../src/components/TouchManager'
import KeyboardManager from '../src/components/KeyboardManager'

let container = null
jest.mock('../src/Utils')
jest.mock('../src/components/TouchManager')
jest.mock('../src/components/KeyboardManager')

beforeEach(() => {
  container = window.document.createElement('div')
  container.id = 'root'
  window.document.body.appendChild(container)
})

afterEach(() => {
  window.document.body.removeChild(container)
})

it('InputManager renders children', () => {
  render(<InputManager onMovePage={() => {}}
    onPageChange={() => {}}
    onResetColumns={() => {}}
    onStartTouch={() => {}}>
      <div className='childrenClassname'>Content</div>
    </InputManager>)

  expect(screen.getByText('Content')).toBeTruthy()
})

it('InputManager instantiates TouchManager always', () => {
  const onTouchStart = jest.fn().mockName('onTouchStart')
  const onTouchMove = jest.fn().mockName('onTouchMove')
  const onTouchEnd = jest.fn().mockName('onTouchEnd')
  const onResetColumns = jest.fn().mockName('onResetColumns')
  Utils.isMobile = () => true

  render(<InputManager onMovePage={onTouchMove}
    onPageChange={onTouchEnd}
    onResetColumns={onResetColumns}
    onStartTouch={onTouchStart}>
      <div className='childrenClassname'>Content</div>
    </InputManager>)

  expect(document.onkeydown).not.toBeNull()
  // expect(KeyboardManager).not.toHaveBeenCalled()
})
