import * as React from 'react'
import type { TouchManagerProps } from '../types/TouchManager'

const TouchManager = ({ onStartTouch, onMoveTouch, onPageChange, onResetColumns, children }: TouchManagerProps): React.ReactElement => {
  React.useEffect(() => {
    addEvents()
  }, [])

  function addEvents (): void {
    const root = document.getElementById('root') ?? window.document.body

    root.addEventListener('mousedown', () => {
      onStartTouch()
    })
    root.addEventListener('mousemove', () => {
      onMoveTouch(-100)
    })
    root.addEventListener('mouseup', () => {
      onPageChange(-400)
    })
  }

  return children
}
export default TouchManager
