import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

export default function FeesTypeItem({ title, text }) {
  return (
    <>
      <Col md={3}>
        <Card className="bg-asb-accent border border-asb-main rounded-0 mb-1">
          <Card.Body >
          <Card.Title>{title}</Card.Title>
            <Card.Text className="fs-6">{text}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}
