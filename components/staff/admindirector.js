import Image from "next/image";
import { imgblurDataURL } from "../../lib/constants"; 
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

export default function AdminDirector({ profilePicture, name, role }) {
  return (
    <>
      <Col md={4}>
        <Card className="border-0 mb-5">
          <Card.Body>
            <div className="text-center">
            {profilePicture ? (
              <Image
                className="img-fluid mb-3"
                src={profilePicture}
                placeholder="blur"
                blurDataURL={imgblurDataURL}
                width="200"
                height="200"
                alt="Asian School Bharain"
              />
            ) : null} 
             {name ? ( <p className="text-center text-asb-secondary mb-0 fw-bold">{name}</p> ) : null}
             {role ? ( <h3 className="text-asb-main text-center fw-bold">{role}</h3> ) : null} 
            </div>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}
 
