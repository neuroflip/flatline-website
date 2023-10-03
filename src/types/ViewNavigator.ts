interface ViewNavigatorState {
  index: number
  lastMove: number
  col1Classes: string
  col2Classes: string
  col3Classes: string
  col1Style: React.CSSProperties
  col2Style: React.CSSProperties
  col3Style: React.CSSProperties
  columns: TrustedHTML[]
}

export const MOVE_LEFT = 0
export const MOVE_RIGHT = 1

export type { ViewNavigatorState }
