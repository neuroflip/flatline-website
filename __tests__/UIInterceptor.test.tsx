import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import UIIntersector from '@/app/ui/UIIntersector'

describe('UIInterceptor', () => {
  const observe = jest.fn()
  let intersectHandlerFromnObserver: Function

  beforeAll(() => {
    window.IntersectionObserver = jest.fn((intersectHandler, options) => {
      intersectHandlerFromnObserver = intersectHandler

      return {
        root: null,
        rootMargin: "0px",
        thresholds: [],
        disconnect: jest.fn(),
        takeRecords: jest.fn(),
        observe: observe,
        unobserve: jest.fn()
      }
    }) 
  })
  
  it('renders children correctly', () => {
    render(<UIIntersector>
      <div>div content</div>
    </UIIntersector>)
 
    expect(screen.getByText(/div content/i)).toBeInTheDocument()
  })

  it('creates intersection observer and observes', () => {
    render(<UIIntersector>
      <div>div content</div>
    </UIIntersector>)

    const container = screen.getByText(/div content/i)
 
    expect(IntersectionObserver).toHaveBeenCalled()
    expect(observe).toHaveBeenCalled()
  })

  it('initialization of elements', () => {
    render(<UIIntersector>
      <div>div content</div>
    </UIIntersector>)

    const container = screen.getByText(/div content/i)
    const parentElement = container.parentElement
 
    expect(parentElement?.style.scale).toEqual("0.8")
    expect(parentElement?.className).toEqual("relative")
  })

  it('on intercept changes styles correctly', () => {
    render(<UIIntersector>
      <div>div content</div>
    </UIIntersector>)
    const container = screen.getByText(/div content/i)
    const parentElement = container.parentElement
 
    expect(parentElement?.style.scale).toEqual("0.8")
    expect(parentElement?.className).toEqual("relative")

    intersectHandlerFromnObserver([{
      target: parentElement,
      intersectionRatio: 0.15
    }])
    
    expect(parentElement?.style.scale).toEqual("0.95")
    expect(parentElement?.style.opacity).toEqual("0.15")
  })
})