import {
  SITE_NAME,
  SITE_FAVICON,
  SITE_DESCRIPTION,
  imgblurDataURL,
  HOME_OG_IMAGE_URL,
} from "../../lib/constants";
import Head from "next/head"; 
import Container from "react-bootstrap/Container";
import HouseSystem from "../../components/display-items/house-system";

export default function HouseAndPrefectorialSystem({ contentCollection }) {
  return (
    <>
      <Head>
        {/* <title>{SITE_NAME} | House and Prefectorial System </title> */}
        <title> The Asian School Bahrain |  House and Prefectorial System </title>
        <meta name="description" content={SITE_DESCRIPTION} />
        <link rel="icon" href={SITE_FAVICON} />
      </Head>

      <main>
        <h2 className="page-title">House and Prefectorial System</h2>
        <section className="my-5">
          <Container>
            <div className="text-center mt-5"></div>
            

            {contentCollection.map((a) => (
              <HouseSystem
                key={a.sys.id}
                description={a.description}
                image={a.image.url}
                width={a.image.width}
                height={a.image.height}
              />
            ))}
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
          contentCollection(
            limit: 1
            where: { title: "House and Prefectorial system" }
          ) {
            items {
              sys{
                id
              }
              title
              subtitle
              image {
                url
                width
                height
              }
              description {
                json
                links {
                  assets {
                    block {
                      sys {
                        id
                      }
                      url
                      description
                    }
                  }
                }
              }
            }
          }
        }`,
      }),
    }
  );

  if (!result.ok) {
    console.error(result);
    return {};
  }

  const { data } = await result.json();
  const contentCollection = data.contentCollection.items;

  return {
    props: {
      contentCollection,
    },
    revalidate: 60,
  };
}
