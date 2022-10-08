import { SITE_NAME, SITE_FAVICON, SITE_DESCRIPTION,  imgblurDataURL, HOME_OG_IMAGE_URL } from "../../lib/constants";
import React, { useState } from "react";
import Head from "next/head"; 
import Container from "react-bootstrap/Container"; 
// import AsbGallery from "../../components/display-items/gallery";
import ImageMosaic from "../../components/lightbox-gallery/image-mosaic"; 
import ImageLightbox from "../../components/lightbox-gallery/image-lightbox";
import images from "../../data/in-the-news.json";

export default function InTheNews() {
  const [isOpen, setOpen] = useState(false);
  const [currentImageIndex, setCurrentIndex] = useState(0);

  return (
    <>
      <Head>
        <title>{ SITE_NAME } </title>
        <meta name="description" content={SITE_DESCRIPTION} />
        <link rel="icon" href={SITE_FAVICON} />
      </Head>

      <main>
      <h2 className="page-title">In The News</h2> 
        <section className="my-5">
          <Container>  

          <div className="my-5">
            <ImageMosaic 
              images={images.map((image) => ({
                src: image.url,
                title: image.title,
                width: image.width, 
                height: image.height,
              }))}
              handleClick={(e, { index }) => {
                setCurrentIndex(index);
                setOpen(true);
              }}
            />

            <ImageLightbox
              currentImageIndex={currentImageIndex}
              setCurrentIndex={setCurrentIndex}
              isOpen={isOpen}
              onClose={() => setOpen(false)}
              images={images.map((image) => ({
                src: image.url,
                title: image.title,
                width: image.width, 
                height: image.height,
              }))}
            />
          </div>
          </Container>
        </section>
      </main>
    </>
  );
}
