import * as React from 'react'
import UIIntersector from './UIIntersector'

interface CardProps {
  children: React.JSX.Element,
  extraClassName?: string
}

function Card ({ children, extraClassName } : CardProps) {
  const baseClassName = 'justify-normal bg-slate-500 rounded-xl mb-6'
  return <UIIntersector>
    <div className={`${baseClassName} ${extraClassName}`}>
      { children }
    </div>
  </UIIntersector>
}

export default Card