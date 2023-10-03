import * as React from 'react'
import type { ColumnProps } from '../types/Column'

import '../../css/Column.scss'

function Column ({ id, className, style, children }: ColumnProps): React.JSX.Element {
  return (<div id={id} className={className} style={style} >
    {children}
  </div>)
}

export default Column
