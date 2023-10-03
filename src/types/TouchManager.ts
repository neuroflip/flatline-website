interface TouchManagerProps {
  children: any
  onPageChange: any
  onStartTouch: any
  onMoveTouch: any
  onResetColumns: any
}

interface TouchManagerState {
  startX: number
  startY: number
  isRealEvent: boolean
}
export type { TouchManagerProps, TouchManagerState }
