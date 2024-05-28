"use client"

import * as React from 'react'
import UseScript from '@/app/hooks/useScript'

interface ObsoleteEngineProps {
  children?: React.JSX.Element
}

function ObsoleteEngine({ children }: ObsoleteEngineProps) {
  UseScript('/ObsoleteEngine.js', 'obsolete', () => {
    const t = new Engine(document.getElementById('mainContainer--canvas') as HTMLCanvasElement)
    t.init()
  })

  return <>{children}</>
}

export default ObsoleteEngine

export declare class Camera {
  xOff: number
  yOff: number
  zOff: number
  scaleFactor: number
	constructor()
	translateToCamera(object: any): void
	translateInverseToCamera(object: any): void
}

export declare class Light {
  position: any
  color: any
  constructor(position: any, color: any)
  rotateLight(angle: number): void
  translateLight(point: any): void
  getLight2DProjection(scaleFactor: number, width: number, height: number): void
  renderLight(canvas: HTMLCanvasElement, scaleFactor: number, width: number, height: number): void
  getLightDistance(p1: any): void
}

export declare class Engine {
  constructor(canvas: HTMLCanvasElement)
  init(): void
  reScaleViewport(): void
  renderScene(time: number): void

  requestAnimationFrameID: number
  object: any
  xAngle: number
  yAngle: number
  lastScreenX: number
  lastScreenY: number
  canvas: HTMLCanvasElement
  canvasCtx: CanvasRenderingContext2D
  camera: Camera
  light: Light
  deltaTime: number
  lastTime: number
}