import { SITE_NAME, SITE_FAVICON, SITE_DESCRIPTION,  imgblurDataURL, HOME_OG_IMAGE_URL } from "../../lib/constants";
import React, { useState } from "react";
import Head from "next/head"; 
import Container from "react-bootstrap/Container";  
import ImageMosaic from "../../components/lightbox-gallery/image-mosaic"; 
import ImageLightbox from "../../components/lightbox-gallery/image-lightbox";
// import images from "../../data/in-the-news.json"; 

export default function InTheNews({inTheNewsCollection}) {
  const [isOpen, setOpen] = useState(false);
  const [currentImageIndex, setCurrentIndex] = useState(0);
  const images = inTheNewsCollection;
  console.log(images)
  return (
    <>
      <Head>
        <title>{ SITE_NAME } | In The News </title>
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
                src: image.url.url,
                title: image.title,
                width: image.url.width, 
                height: image.url.height,
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
                src: image.url.url,
                title: image.title,
              }))}
            />
          </div>
          </Container>
        </section>
      </main>
    </>
  );
}


export async function getStaticProps() {
  const result = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master`,

    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.CONTENTFUL_DELIVERY_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `query {
          # add your query
          inTheNewsCollection (order: weight_ASC){
            items {
              weight
              url {
                title
                url
                width
                height
              }
              title
            }
          }
        }
        `,
      }),
    }
  );

  if (!result.ok) {
    console.error(result);
    return {};
  }

  const { data } = await result.json();
  const inTheNewsCollection = data.inTheNewsCollection.items; 

  return {
    props: {
      inTheNewsCollection, 
    },
  };
}