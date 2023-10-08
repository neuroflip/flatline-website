import * as React from 'react'
import Utils from '../Utils'
import type { TouchManagerProps } from '../types/TouchManager'

const body = window.document.body
const MIN_SENSI = 100

function TouchManager ({
  onPageChange,
  onStartTouch,
  onMoveTouch,
  onResetColumns,
  children
}: TouchManagerProps): React.JSX.Element {
  const stateRef = React.useRef({ startX: 0, startY: 0, isRealEvent: false })

  React.useEffect(() => {
    addEvents()

    return () => {
      removeEvents()
    }
  }, [])

  function addEvents (): void {
    body.addEventListener(Utils.isMobile() ? 'touchstart' : 'mousedown', onTouchStart)
    body.addEventListener(Utils.isMobile() ? 'touchmove' : 'mousemove', onTouchMove)
    body.addEventListener(Utils.isMobile() ? 'touchend' : 'mouseup', onTouchEnd)
    window.addEventListener('resize', onResetColumns())
  }

  function removeEvents (): void {
    body.removeEventListener(Utils.isMobile() ? 'touchstart' : 'mousedown', onTouchStart)
    body.removeEventListener(Utils.isMobile() ? 'touchmove' : 'mousemove', onTouchMove)
    body.removeEventListener(Utils.isMobile() ? 'touchend' : 'mouseup', onTouchEnd)

    window.removeEventListener('resize', onResetColumns())
  }

  function onTouchStart (nativeEvent: TouchEvent | MouseEvent): void {
    if (nativeEvent instanceof MouseEvent) {
      stateRef.current.startX = nativeEvent.clientX
      stateRef.current.startY = nativeEvent.clientY
    } else if (nativeEvent instanceof TouchEvent) {
      const touches = nativeEvent.touches

      if (Boolean(touches) && touches.length === 1) {
        stateRef.current.startX = touches[0].clientX
        stateRef.current.startY = touches[0].clientY
      }
    }
    stateRef.current.isRealEvent = true
    onStartTouch()
  }

  function onTouchMove (nativeEvent: TouchEvent | MouseEvent): void {
    let progressX = 0
    let progressY = 0

    if (stateRef.current.isRealEvent) {
      if (nativeEvent instanceof MouseEvent) {
        progressX = nativeEvent.clientX
        progressY = nativeEvent.clientY
      } else if (nativeEvent instanceof TouchEvent) {
        progressX = nativeEvent.touches[0].clientX
        progressY = nativeEvent.touches[0].clientY
      }
      progressX = Math.round(progressX) - stateRef.current.startX
      progressY = Math.round(progressY) - stateRef.current.startY

      if (Math.abs(progressX) > Math.abs(progressY)) {
        onMoveTouch(progressX)
      }
    }
  }

  function onTouchEnd (nativeEvent: TouchEvent | MouseEvent): void {
    let finalProgressX = 0
    let finalProgressY = 0

    if (nativeEvent instanceof MouseEvent) {
      finalProgressX = nativeEvent.clientX
      finalProgressY = nativeEvent.clientY
    } else if (nativeEvent instanceof TouchEvent) {
      finalProgressX = nativeEvent.changedTouches[0].clientX
      finalProgressY = nativeEvent.changedTouches[0].clientY
    }

    finalProgressX = (finalProgressX) - stateRef.current.startX
    finalProgressY = (finalProgressY) - stateRef.current.startY
    stateRef.current.isRealEvent = false

    if (Math.abs(finalProgressX) > MIN_SENSI && Math.abs(finalProgressX) > Math.abs(finalProgressY)) {
      onPageChange(finalProgressX)
    } else if (finalProgressX !== 0) {
      onResetColumns()
    }
  }

  return children
}

export default TouchManager
