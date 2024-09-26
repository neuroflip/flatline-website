import * as React from 'react'

interface TitleProps {
  children: React.JSX.Element
}

function Title ({ children }: TitleProps) {
  return <h1 className='text-cyan-400 text-sm text-right pt-14 w-full'>
    { children }
  </h1>
}

export default Title