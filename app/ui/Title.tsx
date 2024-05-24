import * as React from 'react'

interface TitleProps {
  children: React.JSX.Element
}

function Title ({ children }: TitleProps) {
  return <div className='text-cyan-400 text-sm text-right mt-8 w-full'>
    { children }
  </div>
}

export default Title