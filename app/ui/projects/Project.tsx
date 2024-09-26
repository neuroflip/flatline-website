import * as React from 'react'
import Card from '../Card'
import Link from 'next/link'
import UIIntersector from '../UIIntersector'

interface ProjectProps {
  title: string,
  image: string,
  linkUrl: string,
  children: React.JSX.Element
}

function Project ( { title, image, linkUrl, children } : ProjectProps ) {
  return <UIIntersector>
    <Card extraClassName='bg-slate-800 p-0'>
      <div>
        <Link prefetch={false} aria-label={`Link to ${linkUrl}`} href={linkUrl}>
          <div className="w-full h-24 bg-no-repeat bg-cover rounded-t-xl" style={{ backgroundImage: `url('${image}')` }}></div>
        </Link>
        <div className="text-3xl text-center mt-5 mr-5 mb-0">
          <Link prefetch={false} aria-label={`Link to ${linkUrl}`} href={linkUrl}>
            { title } 
          </Link>
        </div>
        { children }
      </div>
    </Card>
  </UIIntersector>
}

export default Project