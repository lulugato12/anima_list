import React from "react";
import "./MenuBar.css";
import {
  Row,
  Col,
  Form,
  FormControl,
  Button,
  Container,
  Navbar,
  Nav,
  NavDropdown,
} from "react-bootstrap";

const MenuBar = () => {
  return (
    <Container className="header">
      <Navbar bg="light">
        <Row className="nav1" md="auto">
          <Row className="nav2">
            <Col md="auto">
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                  <Navbar.Brand className="logo" href="/">
                    Animalist
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                </Nav>
              </Navbar.Collapse>
            </Col>
            <Col>
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                  <Nav.Link href="/Anime">Anime</Nav.Link>
                  <Nav.Link href="/Movies">Movies</Nav.Link>
                  <Nav.Link href="/Ovas">OVAS</Nav.Link>
                  <NavDropdown title="My Lists" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/Watching">
                      Watching
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/Finished">
                      Finished
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/Favorites">
                      Favorites
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/Watchlist">
                      Watchlist
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Col>
          </Row>
          <Row className="nav2">
            <Col>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search Anime, Movie or OVA"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-dark">Search</Button>
              </Form>
            </Col>
            <Col md="auto">
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                  <Nav.Link href="/LogIn">Log in</Nav.Link>
                  <Nav.Link href="/SignUp">Sign up</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Col>
          </Row>
        </Row>
      </Navbar>
    </Container>
  );
};

export default MenuBar;
