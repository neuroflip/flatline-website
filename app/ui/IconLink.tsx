import * as React from 'react'
import Link from 'next/link'

interface IconLinkProps {
    url: string
    iconImage: string
    iconAlt?: string
    iconWidth?: number
    iconHeight?: number
    imageClassName?: string
}

function IconLink({ url, iconImage, iconAlt, imageClassName, iconWidth, iconHeight }: IconLinkProps) {
    const prefetch = url.indexOf('.pdf') < 0

    return  <Link href={ url } 
        className="" 
        aria-label={iconAlt}
        prefetch={prefetch}>
        <img src={iconImage} 
            className={imageClassName}
            alt={ iconAlt || ''} 
            width={iconWidth} 
            height={iconHeight} />
    </Link>}

export default IconLink