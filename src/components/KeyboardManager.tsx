import * as React from 'react'
import type { KeyboardManagerProps } from '../types/KeyboardManager'
import Utils from '../Utils'

function KeyboardManager ({
  children,
  onPageChange,
  nextKeyCode,
  previousKeyCode
}: KeyboardManagerProps): React.JSX.Element {
  function addEvents (): void {
    document.onkeydown = (e) => {
      if (e.key === nextKeyCode) {
        onPageChange(-Utils.WIDTH_TO_MOVE)
      } else if (e.key === previousKeyCode) {
        onPageChange(Utils.WIDTH_TO_MOVE)
      }
    }
  }

  React.useEffect(() => {
    addEvents()
  }, [])

  return <>{ children }</>
}

export default KeyboardManager
