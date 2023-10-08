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
        onPageChange(-Utils.WIDTH_TO_MOVE)
        if (e.key === Utils.KEY_LEFT) {
          onPageChange(Utils.WIDTH_TO_MOVE)
        }
      }
    })
  }

  return children
})

export default KeyboardManager
