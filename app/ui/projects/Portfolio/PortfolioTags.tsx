import * as React from 'react'
import Tag from '../../Tag/Tag'

function PorfolioTags() {
    return <div className='m-6 flew-row flex-wrap flex'>
      <Tag text='React'></Tag>
      <Tag text='Nextjs'></Tag>
      <Tag text='tailwind css'></Tag>
      <Tag text='server components'></Tag>
      <Tag text='client components'></Tag>
      <Tag text='Intersection Observer'></Tag>
      <Tag text='jest'></Tag>
      <Tag text='integration tests'></Tag>
      <Tag text='unit tests'></Tag>
  </div>
}

export default PorfolioTags