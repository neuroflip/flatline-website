import Link from 'next/link'
import * as react from 'react'

function InternalLinks() {
  return <div className="text-center text-cyan-400 text-lg mt-8 w-full mx-auto">
    <Link href="#introduction">INTRODUCTION</Link> - <Link href="#interests">INTERESTS</Link>
     - <Link href="#projects">PROJECTS</Link> - <Link href="#experiments">EXPERIMENTS</Link>
  </div>
}

export default InternalLinks