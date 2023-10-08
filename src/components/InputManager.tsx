import * as React from 'react'
import Utils from '../Utils'
import { InputManagerProps } from '../types/InputManager'
import TouchManager from './TouchManager'
import KeyboardManager from './KeyboardManager'

const KEY_LEFT = Utils.KEY_LEFT
const KEY_RIGHT = Utils.KEY_RIGHT

function InputManager ({
  onPageChange,
  onMovePage,
  onResetColumns,
  onStartTouch,
  children
}: InputManagerProps): React.JSX.Element {
  return <TouchManager onPageChange={onPageChange}
    onStartTouch={onStartTouch}
    onMoveTouch={onMovePage}
    onResetColumns={onResetColumns}>
      { Utils.isMobile()
        ? children
        : <KeyboardManager previousKeyCode={KEY_LEFT} nextKeyCode={KEY_RIGHT} onPageChange={onPageChange}>
            { children }
          </KeyboardManager> }
    </TouchManager>
}

export default InputManager
