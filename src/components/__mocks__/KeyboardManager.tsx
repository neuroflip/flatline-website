import * as React from 'react'
import type { KeyboardManagerProps } from '../../types/KeyboardManager'
import Utils from '../../Utils'

const KeyboardManager = jest.fn().mockImplementation(({ onPageChange, children }: KeyboardManagerProps): React.ReactElement => {
  React.useEffect(() => {
    addEvents()
  }, [])

  function addEvents (): void {
    document.onkeydown = jest.fn().mockImplementation((e) => {
      if (e.key === Utils.KEY_RIGHT) {
        onPageChange(-400)
        if (e.key === Utils.KEY_LEFT) {
          onPageChange(400)
        }
      }
    })
  }

  return children
})

export default KeyboardManager
