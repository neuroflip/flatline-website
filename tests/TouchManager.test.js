/**
 * @jest-environment jsdom
 */

import * as React from 'react'
import TouchManager from '../src/components/TouchManager'
import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

const onTouchStart = jest.fn().mockName('onTouchStart')
const onTouchMove = jest.fn().mockName('onTouchMove')
const onTouchEnd = jest.fn().mockName('onTouchEnd')
const onResetColumns = jest.fn().mockName('onResetColumns')

let container
let oldAddEventListener
let unmount

beforeEach(() => {
  container = window.document.createElement('div')
  container.id = 'root'
  window.document.body.appendChild(container)
  oldAddEventListener = window.document.body.addEventListener

  onTouchStart.mockClear()
  onTouchMove.mockClear()
  onTouchEnd.mockClear()
  onResetColumns.mockClear()
})

afterEach(() => {
  window.document.body.removeChild(container)
  window.document.body.addEventListener = oldAddEventListener
})

it('TouchManager manages children', () => {
  window.document.body.addEventListener = jest.fn()

  render(<TouchManager onPageChange={onTouchEnd}
    onStartTouch={onTouchStart}
    onMoveTouch={onTouchMove}
    onResetColumns={onResetColumns}>
      <div>Children content to test</div>
    </TouchManager>
  , container)

  expect(screen.queryByText('Children content to test')).toBeInTheDocument()
})

it('TouchManager attaches to events', () => {
  window.document.body.addEventListener = jest.fn()

  render(<TouchManager onPageChange={onTouchEnd}
    onStartTouch={onTouchStart}
    onMoveTouch={onTouchMove}
    onResetColumns={onResetColumns}>
      <div>Children content to test</div>
    </TouchManager>
  , container)

  expect(window.document.body.addEventListener).toHaveBeenCalledTimes(3)
  expect(window.document.body.addEventListener.mock.calls[0][0]).toBe('mousedown', onTouchStart)
  expect(window.document.body.addEventListener.mock.calls[1][0]).toBe('mousemove', onTouchMove)
  expect(window.document.body.addEventListener.mock.calls[2][0]).toBe('mouseup', onTouchEnd)
})

describe('TouchManager test the callbacks', () => {
  beforeEach(() => {
    ({ unmount } = render(<TouchManager onPageChange={onTouchEnd}
      onStartTouch={onTouchStart}
      onMoveTouch={onTouchMove}
      onResetColumns={onResetColumns}>
        <div>Children content to test</div>
      </TouchManager>
    , container))
  })

  it('TouchManager calls the callbacks: onTouchStart', () => {
    fireEvent.mouseDown(container, {
      target: container,
      clientX: 10,
      clientY: 100
    })

    expect(onTouchStart).toHaveBeenCalled()
  })

  it('TouchManager calls the callbacks: onTouchMove', () => {
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

    expect(onTouchStart).toHaveBeenCalled()
    expect(onTouchMove).toHaveBeenCalled()
  })

  it('TouchManager calls the callbacks: onTouchEnd', () => {
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

    expect(onTouchStart).toHaveBeenCalled()
    expect(onTouchMove).toHaveBeenCalled()
    expect(onTouchEnd).toHaveBeenCalled()
  })

  it('TouchManager dont calls to move callback when there is no previous mouseDown event', () => {
    fireEvent.mouseMove(container, {
      target: container,
      clientX: -300,
      clientY: 100
    })

    expect(onTouchStart).not.toHaveBeenCalled()
    expect(onTouchMove).not.toHaveBeenCalled()
    expect(onTouchEnd).not.toHaveBeenCalled()
  })

  it('TouchManager remove event handlers when unmounting', () => {
    unmount()

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

    expect(onTouchStart).not.toHaveBeenCalled()
    expect(onTouchMove).not.toHaveBeenCalled()
    expect(onTouchEnd).not.toHaveBeenCalled()
  })

  it('TouchManager does not call start callback moving mouse vertically', () => {
    fireEvent.mouseDown(container, {
      target: container,
      clientX: 10,
      clientY: 100
    })

    fireEvent.mouseMove(container, {
      target: container,
      clientX: 10,
      clientY: 300
    })

    fireEvent.mouseUp(container, {
      target: container,
      clientX: 10,
      clientY: 300
    })

    expect(onTouchStart).toHaveBeenCalled()
    expect(onTouchMove).not.toHaveBeenCalled()
    expect(onTouchEnd).not.toHaveBeenCalled()
  })
})
