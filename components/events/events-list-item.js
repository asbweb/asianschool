import Link from "next/link";
import Col from "react-bootstrap/Col";
import Image from "next/image";
import Card from "react-bootstrap/Card";
import DateFormatter from "@display-items/date-formatter"; 

export default function EventsListItem({ slug, title, date, featuredImage }) {
  return (
    <>
      <Col md={4} className="events-card">
        <Link href={`/student-life/events/${slug}`}>
          
            <Card className="shadow-sm border p-3">
              <div className="text-center">
                <Image
                  // className="img-fluid"
                  src={featuredImage}
                  // layout="responsive"
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
        </Link>
      </Col>
    </>
  );
}
