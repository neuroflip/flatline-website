import * as React from 'react';
import type { TitleProps } from './Title.types';

const Title = ({ children }: TitleProps) => {
  return <h1 className='text-cyan-400 text-sm text-right pt-14 w-full'>
    { children }
  </h1>
}

export default Title