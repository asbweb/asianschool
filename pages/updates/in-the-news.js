import Head from "next/head"; 
import Container from "react-bootstrap/Container"; 
import AsbGallery from "../../components/display-items/gallery";
import images from "../../data/in-the-news.json";

export default function InTheNews() {
  return (
    <div>
      <Head>
        <title>Asian Scool Bharain</title>
        <meta name="description" content="Asian Scool Bharain" />
        <link rel="icon" href="/images/asbfavicon.png" />
      </Head>

      <main>
      <h2 className="page-title">In The News</h2> 
        <section className="my-5">
          <Container>  
            <AsbGallery images={images.inthenews}/> 
          </Container>
        </section>
      </main>
    </div>
  );
}
