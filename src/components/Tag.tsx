import * as React from 'react'
import '../css/tag.scss'

interface TagProps {
    text: string
}

function Tag({ text }: TagProps) {
    return <div className='tag'> { text } </div>
}

export default Tag