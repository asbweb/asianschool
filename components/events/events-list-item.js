import Link from "next/link";
import Col from "react-bootstrap/Col";
import Image from "next/future/image";
import Card from "react-bootstrap/Card";
import DateFormatter from "../display-items/date-formatter"; 

export default function EventsListItem({ slug, title, date, featuredImage }) {
  return (
    <>
      <Col md={4} className="events-card">
        <Link href={`/student-life/events/${slug}`}>
          <a>
            <Card className="shadow-sm border p-3">
              <div className="text-center">
                <Image
                  className="img-fluid"
                  src={featuredImage}
                  layout="fixed"
                  // placeholder="blur"
                  // blurDataURL={imgblurDataURL}
                  width="360"
                  height="240"
                  alt={title}
                />
              </div>
              <Card.Body>
                <Card.Title className="text-center fw-bold mb-0">
                  {title}
                </Card.Title>
                <Card.Text className="text-center">
                  <DateFormatter dateString={date} />
                </Card.Text>
              </Card.Body>
            </Card> 
          </a>
        </Link>
      </Col>
    </>
  );
}
