import Image from "next/future/image";
import Card from "react-bootstrap/Card";
import DateFormatter from "@display-items/date-formatter";

export default function EventsCard({ title, date, featuredImage }) {
  return (
    <>
      <Card className="shadow-sm border p-3">
        <div className="text-center">
          <Image
            className="img-fluid w-100 h-auto"
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
          <Card.Title className="text-center fw-bold mb-0">{title}</Card.Title>
          <Card.Text className="text-center">
            <DateFormatter dateString={date} />
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
