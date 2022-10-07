import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import images from "../../data/gallery.json";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Icon } from "@iconify/react";

export default function Gallery() {
  const [data, setData] = useState({ image: "", i: 0 });

  const viewImage = (image, i) => {
    console.log(image, i);
    setData({ image, i });
  };
  const imgAction = (action) => {
    let i = data.i;
    if (action === "next-img") {
      setData({ image: images[i + 1], i: i + 1 });
    }
    if (action === "prev-img") {
      setData({ image: images[i - 1], i: i - 1 });
    }
    if (!action) {
      setData({ image: "", i: 0 });
    }
  };

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
          <Row>
            {data.image && (
              <div className="gallery-overlay">
                <button
                  type="button"
                  className="close-btn"
                  aria-label="close"
                  onClick={() => imgAction()}
                >
                  <Icon icon="carbon:close-outline" color="white" width="36" />
                </button>
                <button
                  className="next-prev-btn"
                  onClick={() => imgAction("prev-img")}
                >
                  <Icon icon="carbon:chevron-left" color="white" width="36" />
                </button>
                <Image
                  className="img-fluid p-0"
                  src={data.image.src}
                  style={{ width: "auto", maxHeight: "90%", maxWidth: "90%" }}
                  alt={data.image.url}
                  layout="intrinsic"
                  width={1280}
                  height={720}
                />
                <button
                  className="next-prev-btn"
                  onClick={() => imgAction("next-img")}
                >
                  <Icon icon="carbon:chevron-right" color="white" width="36" />
                </button>
              </div>
            )}
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 576: 1, 768: 2, 992: 3 }}
            >
              <Masonry gutter="0.5rem">
                {images.map((image, i) => (
                  <div key={i}>
                    <Image
                      className="img-fluid p-0 gallery-grid-img"
                      src={image}
                      alt={image}
                      layout="responsive"
                      width={720}
                      height={480}
                      onClick={() => viewImage(image, i)}
                    />
                  </div>
                ))}
              </Masonry>
            </ResponsiveMasonry>
          </Row>
        </Container>
      </section>
    </>
  );
}
