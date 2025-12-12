import * as React from 'react'
import Link from 'next/link'
import type { IconLinkProps } from './IconLink.types'

const IconLink = ({ url, iconImage, iconAlt, imageClassName, iconWidth, iconHeight }: IconLinkProps) => {
    const prefetch = url.indexOf('.pdf') < 0

    return  <Link href={ url } 
        aria-label={iconAlt}
        prefetch={prefetch}>
        <img src={iconImage} 
            className={imageClassName}
            alt={ iconAlt || ''} 
            width={iconWidth} 
            height={iconHeight} />
    </Link>}

export default IconLink