import Link from "next/link";
import Image from "next/future/image";
import Navbar from "react-bootstrap/Navbar"; 

export default function LogoHeader() { 
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="light" 
        className="justify-content-center d-none d-lg-block"
      >
        <Link href="/">
          <Navbar.Brand className="me-0"> 
            <div className="text-center">
              <Image
                className="img-fluid w-auto"
                src="/images/asblogo.png"
                // layout="fixed"
                // placeholder="blur"
                // blurDataURL={imgblurDataURL}
                width="720"
                height="60"
                alt="Asian School Bharain"
                priority
              />
            </div>
          </Navbar.Brand>
        </Link>
      </Navbar>
    </>
  );
}
