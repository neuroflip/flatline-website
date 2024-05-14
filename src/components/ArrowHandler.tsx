import * as React from 'react'

import '../css/ArrowHandler.scss'

interface ArrowHandlerProps {
    onLeftClick: React.MouseEventHandler<HTMLDivElement>,
    onRightClick: React.MouseEventHandler<HTMLDivElement>
}

function ArrowHandler ({ onLeftClick, onRightClick }: ArrowHandlerProps): React.JSX.Element {
  return (<>
    <div id='leftArrowHandler' className='left arrowHandler' onClick={onLeftClick}>&#60;</div>
    <div id='rigthArrowHandler' className='right arrowHandler' onClick={onRightClick}>&#62;</div>
    </>)
}

export default ArrowHandler
