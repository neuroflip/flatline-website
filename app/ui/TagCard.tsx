import * as React from 'react'
import Tag from './Tag'

function TagCard() {
    return <div className='ml-6 mr-6 mb-6 mt-0 flew-row flex-wrap flex'>
    <Tag text='front-end'></Tag><Tag text='html'></Tag><Tag text='scss'></Tag><Tag text='javascript'></Tag><Tag text='ES6'></Tag>
    <Tag text='typescript'></Tag><Tag text='react'></Tag><Tag text='nextjs'></Tag><Tag text='pwa'></Tag><Tag text='workbox'></Tag>
    <Tag text='spa'></Tag><Tag text='storybook'></Tag><Tag text='cordova apps'></Tag><Tag text='app store'></Tag><Tag text='google play'></Tag>
    <Tag text='amp pages'></Tag><Tag text='instant articles'></Tag><Tag text='webpack'></Tag><Tag text='testing'></Tag><Tag text='jest'></Tag>
  </div>
}

export default TagCard