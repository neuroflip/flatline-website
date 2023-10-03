/**
 * @jest-environment jsdom
 */

import * as React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import ArrowHandler from '../src/components/ArrowHandler'

let container = null

beforeEach(() => {
  container = window.document.createElement('div')
  container.id = 'root'
  window.document.body.appendChild(container)
})

afterEach(() => {
  window.document.body.removeChild(container)
})

it('ArrowHandler calls to eventHandlers (LEFT)', () => {
  const onLeft = jest.fn(),
    onRight = jest.fn()

    render(<ArrowHandler onLeftClick={onLeft} 
        onRightClick={onRight}></ArrowHandler>, container)

    const leftArrow = screen.queryByText('<')

    fireEvent(leftArrow, 
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }))

    expect(onLeft).toHaveBeenCalled()
})

it('ArrowHandler calls to eventHandlers (RIGHT)', () => {
    const onLeft = jest.fn(),
      onRight = jest.fn()
  
      render(<ArrowHandler onLeftClick={onLeft} 
          onRightClick={onRight}></ArrowHandler>, container)
  
      const rightArrow = screen.queryByText('>')
  
      fireEvent(rightArrow, 
        new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
        }))
  
      expect(onRight).toHaveBeenCalled()
  })
  