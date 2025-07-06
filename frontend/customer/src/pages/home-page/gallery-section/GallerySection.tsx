import React from "react";
import ImageGallery from "react-image-gallery";
// import stylesheet if you're not already using CSS @import
import "react-image-gallery/styles/css/image-gallery.css";
import "./style.css"

const modules = import.meta.glob("./../../../assets/images/gallery/*.jpg")
const paths = Object.keys(modules);
const VhPx = Math.round(window.innerHeight * 0.6);
const images = paths.map((path) => {
  path = "src" + path.slice(8);
  return {
    original: path,
    originalHeight: VhPx
  }
})
class GallerySection extends React.Component {
  render() {

    return (
      <section className="gallery">
        <h1 className="gallery-title">Một số hình ảnh của nhà hàng</h1>
        <ImageGallery items={images}
          showThumbnails={false}
          showFullscreenButton={false}
          showPlayButton={false}

        />
      </section>
    )
  }
}

export default GallerySection