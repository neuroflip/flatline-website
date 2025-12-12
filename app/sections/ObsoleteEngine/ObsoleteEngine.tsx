"use client"

import type { ObsoleteEngineProps } from './ObsoleteEngine.types';
import * as React from 'react'
import Engine from './3dEngine/Engine';

const ObsoleteEngine = ({ children }: ObsoleteEngineProps) => {
  React.useEffect(() => {
    const t = new Engine(document.getElementById('mainContainer--canvas') as HTMLCanvasElement)
    t.init()
  }, []);

  return <>{children}</>
}

export default ObsoleteEngine