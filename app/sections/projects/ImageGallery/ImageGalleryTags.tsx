import * as React from 'react';
import Tag from '@/app/ui/Tag/Tag';

const ImageGalleryTags = () => {
    return <div className='m-6  flew-row flex-wrap flex'>
      <Tag text='React'></Tag>
      <Tag text='Typescript'></Tag>
      <Tag text='vite'></Tag>
      <Tag text='Drag and Drop API'></Tag>
      <Tag text='dependency injection'></Tag>
      <Tag text='Context API'></Tag>
      <Tag text='shadcn/ui'></Tag>
      <Tag text='vitest'></Tag>
  </div>
}

export default ImageGalleryTags;