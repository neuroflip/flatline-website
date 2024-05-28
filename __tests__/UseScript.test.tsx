import '@testing-library/jest-dom'
import { renderHook, screen } from '@testing-library/react'
import UseScript from '@/app/hooks/useScript'
import { createElement } from 'react'

describe('UseScript', () => {
  let addEventListenerMock: any

  beforeAll(() => {
    addEventListenerMock = { addEventListener: jest.fn() };

    jest.spyOn(document, 'addEventListener').mockImplementation(() => addEventListenerMock);
  })

  it('inits correctly', () => {
    const callback = jest.fn()
    
    const { result } = renderHook(() => UseScript('/ObsoleteEngine.js', 'obsolete', callback));
    const scriptTag = (screen.getByTestId('obsolete') as HTMLScriptElement)

    expect(scriptTag).not.toBeNull()
    expect(scriptTag.id).toEqual("obsolete")
    expect(scriptTag.src).toEqual("http://localhost/ObsoleteEngine.js")
    expect(scriptTag.async).toBeTruthy()
    expect(document.addEventListener).toHaveBeenCalled()
  })
})




