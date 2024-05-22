import * as React from 'react'
import '../css/IconLink.scss'

interface IconLinkProps {
    url: string
    iconImage: string
    iconAlt?: string
    imageClassName?: string
}

function IconLink({ url, iconImage, iconAlt, imageClassName }: IconLinkProps) {
    return  <a href={ url } className="iconLink" target='_blank'>
        <img className={imageClassName} src={iconImage} alt={ iconAlt || ''} />
    </a> 
}

export default IconLink