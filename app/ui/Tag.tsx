import * as React from 'react'

interface TagProps {
    text: string
}

function Tag({ text }: TagProps) {
    return <div className='bg-slate-900 flex-auto rounded-xl text-sm p-3 m-1 inline-block text-center'> { text } </div>
}

export default Tag