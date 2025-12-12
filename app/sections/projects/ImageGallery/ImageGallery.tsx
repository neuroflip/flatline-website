import Project from "@/app/ui/Project/Project";
import IconLink from "@/app/ui/IconLink/IconLink";
import ImageGalleryTags from "./ImageGalleryTags";

const ImageGallery = () => {

  return <Project linkUrl='https://neuroflip.github.io/ITAcademy-Sprint5-ImageGallery/' 
    title="Image Gallery"
    image="/flatline-website/ImageGallery.webp">
    <div className='p-5'>
      <IconLink imageClassName='w-8 h-8 float-left m-4' url="https://github.com/neuroflip/ITAcademy-Sprint5-ImageGallery" 
        iconImage="/flatline-website/logoGithub.webp" iconAlt='github logo'></IconLink>

      A React Lorem Picsum Image Gallery example with features such as reordering using the Drag and Drop API,
      image selection, or deletion. Context menu to access some of the functionalities.
      <ImageGalleryTags></ImageGalleryTags>
    </div>
  </Project>
}

export default ImageGallery;
