import * as React from 'react'
import { type ForwardedRef, forwardRef } from 'react'
import type { ColumnProps } from '../types/Column'

import '../../css/Column.scss'

const Column = forwardRef(function Column ({ id, className, style, children }: ColumnProps, ref: ForwardedRef<HTMLDivElement>): React.JSX.Element {
  return (<div ref={ref} id={id} className={className} style={style} >
    {children}
  </div>)
})

export default Column
