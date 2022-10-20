import React, { useState } from "react";
import Link from "next/link";
import Image from "next/future/image";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Menuitems from "@data/menu.json";
import LogoHeader from "./header-logo";

export default function Header() {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      <LogoHeader />

      <Navbar
        className="menu py-0 bg-header position-relative"
        sticky="top"
        expand="lg"
        expanded={expanded}
      >
        <Navbar.Brand className="mx-auto">
          <div className="d-sm-block d-md-block d-lg-none">
            <Image
              className="mobile-logo img-fluid ms-lg-5"
              src="/images/asblogo.png"
              layout="fixed"
              width="300"
              height="60"
              alt="Asian School Bharain"
            />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle
          className="my-2 me-2 border-0"
          aria-controls="basic-navbar-nav"
          data-bs-toggle="collapse"
          data-bs-target="#basic-navbar-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setExpanded(expanded ? false : "expanded")}
        />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="mx-auto my-0">
            <ul className="navbar-nav">
              {Menuitems.menu.mainmenu.map((item, index) => {
                if (!item.children)
                  return (
                    <li
                      className="nav-item text-uppercase text-center mx-3"
                      key={index}
                    >
                      <Link href={item.URL}>
                        <a
                          className="header nav-link"
                          onClick={() => setExpanded(false)}
                        >
                          {item.name}
                        </a>
                      </Link>
                    </li>
                  );
                {
                  return (
                    <NavDropdown
                      className="text-uppercase text-center position-static"
                      title={item.name}
                      id="nav-dropdown"
                      key={index}
                    >
                      {item.children.map((item, index) => (
                        <li key={index} className="nav-item">
                          <Link href={item.URL}>
                            <a
                              className="dropdown-item"
                              onClick={() => setExpanded(false)}
                            >
                              {item.name}
                            </a>
                          </Link>
                        </li>
                      ))}
                    </NavDropdown>
                  );
                }
              })}
            </ul>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
