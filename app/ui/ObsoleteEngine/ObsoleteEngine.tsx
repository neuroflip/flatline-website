"use client"

import * as React from 'react'
import Engine from './js/Engine'

interface ObsoleteEngineProps {
  children?: React.JSX.Element
}

function ObsoleteEngine ({ children }: ObsoleteEngineProps) {
  React.useEffect(() => {
    const t = new Engine(document.getElementById('mainContainer--canvas'))
    t.init()
  }, [])

    return <>{ children }</>
}

export default ObsoleteEngine