import React from "react";
import Link from "next/link";
import Image from "next/future/image";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Slides from "../../data/heroslider.json";

export default function HomeHero() {
  return (
    <Container fluid className="gx-0">
      <Carousel fade indicators={false} interval={1500}>
        {Slides.hero.slides.map((item, index) => (
          <Carousel.Item key={index}>
            <Image
              className="img-fluid home-hero-img"
              src={item.image}
              alt="ASB"
              width={1920}
              height={640} 
              // layout="fill"
              object-fit="contain "
            />
            <div className="hero-overlay"> </div>
            <Carousel.Caption>
              <h1 className="mb-3 text-center">{item.title}</h1>
              { item.btntext?
              <Link href={item.URL}>
                <a>
                  <Button
                    variant="light" 
                    className="rounded-5 py-2 px-4 shadow-sm text-asb-main text-uppercase fw-bold"
                  >
                    {item.btntext}
                  </Button>
                </a>
              </Link>
              : null
              }
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      <h1 className="text-center text-uppercase my-5">
        Welcome to The ASIAN School, Bahrain
      </h1>
    </Container>
  );
}
