"use client"

import * as React from 'react'

interface UIIntersectorProps {
  children: React.JSX.Element
  onIntersect?: IntersectionObserverCallback
}

function UIIntersector({ onIntersect, children }: UIIntersectorProps) {
  const elementRef = React.useRef<HTMLDivElement>(null)
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: buildThresholdList(),
  }
  const intersectHandler = onIntersect || function (entries, observer) {
    let prevRatio = 0;

    entries.forEach((entry)=>{
      const element = (entry.target as HTMLDivElement)
      const scaleValue = Math.max(0.95, entry.intersectionRatio)

      if (entry.intersectionRatio > prevRatio) { 
        element.style.scale = `${scaleValue}`
      } 

      element.style.opacity = `${entry.intersectionRatio}`
      prevRatio = entry.intersectionRatio;
    })
  }

  React.useEffect(() => {
    const observer = new IntersectionObserver(intersectHandler, options);
    if (elementRef.current) {
      elementRef.current.style.scale = "0.8";
    } 
    elementRef.current && observer.observe(elementRef.current);
  }, [])

  return <div className='relative' ref={elementRef}>
    { children }
  </div>
}

function buildThresholdList() {
  let thresholds = [];
  let numSteps = 80;

  for (let i = 1.0; i <= numSteps; i++) {
    let ratio = i / numSteps;
    thresholds.push(ratio);
  }

  thresholds.push(0);
  return thresholds;
}

export default UIIntersector