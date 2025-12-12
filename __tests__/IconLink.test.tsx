import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import IconLink from '@/app/ui/IconLink/IconLink'

describe('IconLink', () => {  
  it('renders correctly', () => {
    render(<IconLink url="https://crawlear.com"
      iconImage="/img.webp"
      iconAlt="Icon Alt"
    iconWidth={80}
    iconHeight={80}
    imageClassName="image classname" ></IconLink>)
    
    const renderedIconLinkImage = (screen.getByAltText('Icon Alt') as HTMLImageElement)
    const renderedIconLink = (renderedIconLinkImage.parentElement as HTMLLinkElement)

    expect(renderedIconLinkImage).toBeInTheDocument()
    expect(renderedIconLinkImage.src).toEqual("http://localhost/img.webp")
    expect(renderedIconLinkImage.className).toEqual("image classname")
    expect(renderedIconLinkImage.alt).toEqual("Icon Alt")
    expect(renderedIconLinkImage.width).toEqual(80)
    expect(renderedIconLinkImage.height).toEqual(80)

    expect(renderedIconLink.href).toEqual("https://crawlear.com/")
    expect(renderedIconLink.className).toEqual("")
    expect(renderedIconLink.getAttribute('aria-label')).toEqual("Icon Alt")
  })
})