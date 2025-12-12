import * as React from 'react';
import type { CardProps } from './Card.types';

const Card = ({ children, extraClassName } : CardProps) => {
  const baseClassName = 'justify-normal bg-slate-500 rounded-xl mb-6'

  return <div className={`${baseClassName} ${extraClassName}`}>
      { children }
    </div>
}

export default Card