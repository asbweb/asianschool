import React, { useState, useEffect } from "react";
import Image from "next/future/image";
import Head from "next/head";
import { Container } from "react-bootstrap"; 
import images from "../data/gallery-copy.json";
import ImageMosaic from "../components/lightbox-gallery/image-mosaic"; 
import ImageLightbox from "../components/lightbox-gallery/image-lightbox";
 



export default function Test() {
  const [isOpen, setOpen] = useState(false);
  const [currentImageIndex, setCurrentIndex] = useState(0);
  console.log(images)
   
  return (
    <div>
      <Head>
        <title>Asian Scool Bharain</title>
        <meta name="description" content="Asian Scool Bharain" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Container>
          <div className="my-5">
            

          <ImageMosaic
              // images={images}
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
      </main>
    </div>
  );
}
