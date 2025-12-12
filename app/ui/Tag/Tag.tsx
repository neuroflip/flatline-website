import * as React from 'react';
import type { TagProps } from './Tag.types';

const Tag = ({ text }: TagProps) => {
    return <div className='bg-slate-900 flex-auto rounded-xl text-sm p-3 m-1 inline-block text-center'> 
        { text }
    </div>
}

export default Tag