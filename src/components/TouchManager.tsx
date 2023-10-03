import * as React from 'react'
import type { TouchManagerProps, TouchManagerState } from '../types/TouchManager'

const body = window.document.body
const MIN_SENSI = 100

function isMobile (): boolean {
  return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(window.navigator.userAgent))
}

function TouchManager ({
  onPageChange,
  onStartTouch,
  onMoveTouch,
  onResetColumns,
  children
}: TouchManagerProps): React.JSX.Element {
  const [state, setState] = React.useState({ startX: 0, startY: 0, isRealEvent: false })

  React.useEffect(() => {
    addEvents()
  }, [])

  function addEvents (): void {
    body.addEventListener(isMobile() ? 'touchstart' : 'mousedown', onTouchStart)
    body.addEventListener(isMobile() ? 'touchmove' : 'mousemove', onTouchMove)
    body.addEventListener(isMobile() ? 'touchend' : 'mouseup', onTouchEnd)
    window.addEventListener('resize', onResetColumns())
  }

  function removeEvents (): void {
    body.removeEventListener(isMobile() ? 'touchstart' : 'mousedown', onTouchStart)
    body.removeEventListener(isMobile() ? 'touchmove' : 'mousemove', onTouchMove)
    body.removeEventListener(isMobile() ? 'touchend' : 'mouseup', onTouchEnd)

    window.removeEventListener('resize', onResetColumns())
  }

  function destroy (): void {
    removeEvents()
  }

  function onTouchStart (nativeEvent: TouchEvent | MouseEvent): void {
    setState((state: TouchManagerState) => {
      const newState = { ...state }

      if (nativeEvent instanceof TouchEvent) {
        const touches = nativeEvent.touches

        if (Boolean(touches) && touches.length === 1) {
          newState.startX = touches[0].clientX
          newState.startY = touches[0].clientY
        }
      } else if (nativeEvent instanceof MouseEvent) {
        newState.startX = nativeEvent.clientX
        newState.startY = nativeEvent.clientY
      }
      newState.isRealEvent = true
      onStartTouch()

      return newState
    })
  }

  function onTouchMove (nativeEvent: TouchEvent | MouseEvent): void {
    setState((state: TouchManagerState) => {
      let progressX = 0
      let progressY = 0

      if (state.isRealEvent) {
        if (nativeEvent instanceof TouchEvent) {
          progressX = nativeEvent.touches[0].clientX
          progressY = nativeEvent.touches[0].clientY
        } else if (nativeEvent instanceof MouseEvent) {
          progressX = nativeEvent.clientX
          progressY = nativeEvent.clientY
        }

        progressX = Math.round(progressX) - state.startX
        progressY = Math.round(progressY) - state.startY

        if (Math.abs(progressX) > Math.abs(progressY)) {
          onMoveTouch(progressX)
        }
      }

      return state
    })
  }

  function onTouchEnd (nativeEvent: TouchEvent | MouseEvent): void {
    setState((state: TouchManagerState) => {
      const newState = { ...state }
      let finalProgressX = 0
      let finalProgressY = 0

      if (nativeEvent instanceof TouchEvent) {
        finalProgressX = nativeEvent.changedTouches[0].clientX
        finalProgressY = nativeEvent.changedTouches[0].clientY
      } else if (nativeEvent instanceof MouseEvent) {
        finalProgressX = nativeEvent.clientX
        finalProgressY = nativeEvent.clientY
      }

      finalProgressX = (finalProgressX) - newState.startX
      finalProgressY = (finalProgressY) - newState.startY
      newState.isRealEvent = false

      if (Math.abs(finalProgressX) > MIN_SENSI && Math.abs(finalProgressX) > Math.abs(finalProgressY)) {
        onPageChange(finalProgressX)
      } else if (finalProgressX !== 0) {
        onResetColumns()
      }

      return newState
    })
  }

  return children
}

export default TouchManager
