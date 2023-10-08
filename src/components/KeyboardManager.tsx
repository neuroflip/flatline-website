import * as React from 'react'
import type { KeyboardManagerProps } from '../types/KeyboardManager'

const WIDTH_TO_MOVE = 400

function KeyboardManager ({
  children,
  onPageChange,
  nextKeyCode,
  previousKeyCode
}: KeyboardManagerProps): React.JSX.Element {
  function addEvents (): void {
    document.onkeydown = (e) => {
      if (e.key === nextKeyCode) {
        onPageChange(-WIDTH_TO_MOVE)
      } else if (e.key === previousKeyCode) {
        onPageChange(WIDTH_TO_MOVE)
      }
    }
  }

  React.useEffect(() => {
    addEvents()
  }, [])

  return <>{ children }</>
}

export default KeyboardManager
