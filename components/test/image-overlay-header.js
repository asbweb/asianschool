import CloseButton from "./button-close";

export default function ImageOverlayHeader ({ title, images, currentIndex, onClose }) {
  return(
  <header className="top-header-bar">
    <div className="left-side-description-container">
      <h2 className="gallery-heading">{title}</h2>
      <h4 className="gallery-subheading text-center">{images[currentIndex].title}</h4>
    </div>

    <div className="right-side-container">
      <span className="page-indicator">
        {currentIndex + 1} / {images.length}
      </span>
      <CloseButton onClick={onClose}/> 
    </div>
  </header>
);
}