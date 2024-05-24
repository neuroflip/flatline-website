import * as React from 'react'
import Tag from '../Tag'

function PorfolioTags() {
    return <div className='m-6 flew-row flex-wrap flex'>
      <Tag text='React'></Tag>
      <Tag text='Nextjs'></Tag>
      <Tag text='tailwind css'></Tag>
      <Tag text='server components'></Tag>
      <Tag text='client components'></Tag>
  </div>
}

export default PorfolioTags