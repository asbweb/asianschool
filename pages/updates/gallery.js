import React, { useState } from "react";
import Head from "next/head";
import Container from "react-bootstrap/Container"; 
import ImageMosaic from "../../components/lightbox-gallery/image-mosaic"; 
import ImageLightbox from "../../components/lightbox-gallery/image-lightbox";
import images from "../../data/gallery.json";

export default function Gallery() {
  const [isOpen, setOpen] = useState(false);
  const [currentImageIndex, setCurrentIndex] = useState(0);
  console.log(images)
  return (
    <>
      <Head>
        <title>Asian Scool Bharain</title>
        <meta name="description" content="Asian Scool Bharain" />
        <link rel="icon" href="/images/asbfavicon.png" />
      </Head>
      <h2 className="page-title">Gallery</h2>
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
              }))}
            />
          </div>
        </Container>
      </section>
    </>
  );
}
