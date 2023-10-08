/**
 * @jest-environment jsdom
 */

import * as React from 'react'
import KeyboardManager from '../src/components/KeyboardManager'
import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

let container
const onPageChange = jest.fn().mockName('onPageChange')

beforeEach(() => {
  container = window.document.createElement('div')
  container.id = 'root'
  window.document.body.appendChild(container)
})

afterEach(() => {
  window.document.body.removeChild(container)
})

it('KeyboardManager manages children', () => {
    render(<KeyboardManager onPageChange={onPageChange} nextKeyCode='ArrowRight' previousKeyCode='ArrowLeft'>
            Content
        </KeyboardManager>)
    expect(screen.queryByText('Content')).not.toBeNull()
})

it('KeyboardManager manages children', () => {
    render(<KeyboardManager onPageChange={onPageChange} nextKeyCode='ArrowRight' previousKeyCode='ArrowLeft'>
            Content
        </KeyboardManager>)
    expect(document.onkeydown).not.toBeNull()
})

it('KeyboardManager manages children', () => {
    render(<KeyboardManager onPageChange={onPageChange} nextKeyCode='ArrowRight' previousKeyCode='ArrowLeft'>
            Content
        </KeyboardManager>)
    document.onkeydown({ key: 'ArrowLeft' })

    expect(onPageChange).toHaveBeenCalled()
})