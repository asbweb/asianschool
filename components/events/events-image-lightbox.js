import Lightbox from "react-spring-lightbox";
import EventsImageOverlayHeader from "./events-image-overlay-header";
import RightButton from "./button-right";
import LeftButton from "./button-left";


export default function EventsImageLightbox({
    images,
    currentImageIndex,
    setCurrentIndex,
    isOpen,
    onClose
  }) {
    const gotoPrevious = () =>
    currentImageIndex > 0 && setCurrentIndex(currentImageIndex - 1);

  const gotoNext = () =>
    currentImageIndex + 1 < images.length &&
    setCurrentIndex(currentImageIndex + 1);
  return (
    <div>
        <Lightbox
            className="lightbox-overlay"
              isOpen={isOpen}
              onClose={onClose}
              onPrev={gotoPrevious}
              onNext={gotoNext}
              images={images}
              currentIndex={currentImageIndex}
              renderHeader={() => (
                <EventsImageOverlayHeader
                  // galleryTitle={images.title}
                  images={images}
                  currentIndex={currentImageIndex}
                  onClose={onClose}
                />
              )}
              renderPrevButton={({ canPrev }) => (
                <LeftButton onClick={gotoPrevious} disabled={!canPrev} />
              )}
              renderNextButton={({ canNext }) => (
                <RightButton onClick={gotoNext} disabled={!canNext} />
              )}
            />
    </div>
  )
}