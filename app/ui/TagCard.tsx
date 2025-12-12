import * as React from 'react'
import Tag from './Tag/Tag'

const TagCard = () => {
    return <div className='mb-6 mt-0 flew-row flex-wrap flex'>
      <Tag text='front-end'></Tag><Tag text='html'></Tag><Tag text='javascript'></Tag>
      <Tag text='ES6'></Tag><Tag text='typescript'></Tag><Tag text='SOLID principles'></Tag>
      <Tag text='clean code'></Tag><Tag text='patterns'></Tag><Tag text='scss'></Tag>
      <Tag text='taiwind css'></Tag><Tag text='react'></Tag><Tag text='nextjs'></Tag>
      <Tag text='pwa'></Tag><Tag text='workbox'></Tag><Tag text='spa'></Tag>
      <Tag text='storybook'></Tag>
      
      <Tag text='cordova apps'></Tag><Tag text='app store'></Tag><Tag text='google play'></Tag>
      <Tag text='amp pages'></Tag><Tag text='instant articles'></Tag><Tag text='webpack'></Tag>
      <Tag text='testing'></Tag>
    </div>
}

export default TagCard