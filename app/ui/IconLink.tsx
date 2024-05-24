import * as React from 'react'
import Link from 'next/link'

interface IconLinkProps {
    url: string
    iconImage: string
    iconAlt?: string
    imageClassName?: string
}

function IconLink({ url, iconImage, iconAlt, imageClassName }: IconLinkProps) {
    return  <Link href={ url } className="">
        <img className={imageClassName} src={iconImage} alt={ iconAlt || ''} />
    </Link>}

export default IconLink