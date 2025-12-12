"use client"

import * as React from 'react';
import type { UIIntersectorProps } from './UIIntersector.types';

const UIIntersector = ({ onIntersect, children }: UIIntersectorProps) => {
  const elementRef = React.useRef<HTMLDivElement>(null)
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: buildThresholdList(),
  }
  const intersectHandler = onIntersect || function (entries, observer) {
    entries.forEach((entry)=>{
      const element = (entry.target as HTMLDivElement)

      element.style.opacity = `${entry.intersectionRatio}`
    })
  }

  React.useEffect(() => {
    const observer = new IntersectionObserver(intersectHandler, options);

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