import * as React from 'react'
import Card from '../Card'

interface ProjectProps {
  title: string,
  image: string,
  linkUrl: string,
  children: React.JSX.Element
}

function Project ( { title, image, linkUrl, children } : ProjectProps ) {
  return <Card extraClassName='bg-slate-800 p-0'>
    <div>
      <div className="w-full h-24 bg-no-repeat bg-cover rounded-t-xl" style={{ backgroundImage: `url('${image}')` }}></div>
      <div className="text-3xl text-center mt-5 mr-5 mb-0"> { title } </div>
      { children }
    </div>
  </Card>
}

export default Project