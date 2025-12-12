import Project from "../../Project/Project";
import ImageGalleryTags from "./ImageGalleryTags";

const ImageGallery = () => {

  return <Project linkUrl='https://neuroflip.github.io/ITAcademy-Sprint5-ImageGallery/' 
    title="Image Gallery"
    image="/flatline-website/ImageGallery.webp">
    <div className='p-5'>
      A React Lorem Picsum Image Gallery example with features such as reordering using the Drag and Drop API,
      image selection, or deletion. Context menu to access some of the functionalities.
      <ImageGalleryTags></ImageGalleryTags>
    </div>
  </Project>
}

export default ImageGallery;
