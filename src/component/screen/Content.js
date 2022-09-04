import React from "react";
import {
  Navbar,
  Container,
  Image,
  Nav,
  Button,
  Form,
  Col,
  Row,
} from "react-bootstrap";
import gambar from "../comp/gambar.jpg";
import iconpln from "../comp/iconpln.jpg";
import { FaUserCircle } from "react-icons/fa";
import Select from "react-select";
import "../screen/style.css";

export default function Content() {
  const options = [
    { value: "H3C", label: "H3C" },
    { value: "CTCU", label: "CTCU" },
    { value: "BDCOM", label: "BDCOM" },
  ];
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100vw",
      }}
    >
      <div
        style={{
          display: "flex",
          backgroundColor: "#001048",
          width: "10vw",
          height: "100vh",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            backgroundColor: "#001048",
            borderBottom: "1px solid white",
            height: "56px",
            width: "100%",
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p
            style={{
              color: "white",
              textAlign: "center",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            AutoConfig
          </p>
        </div>
        <div
          style={{
            display: "flex",
            backgroundColor: "#001048",
            borderBottom: "1px solid white",
            height: "100%",
            width: "100%",
            textAlign: "center",
            // alignItems: "center",
            justifyContent: "center",
            // top: "0",
          }}
        >
          <Button
            style={{
              color: "white",
              height: "100px",
              width: "100px",
              display: "flex",
              textAlign: "center",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              marginTop: "10px",
              backgroundColor: "#001048",
              borderColor: "#001048",
            }}
          >
            <FaUserCircle
              style={{
                width: "70px",
                height: "70px",
                marginTop: "5px",
              }}
            />
            <p
              style={{
                marginTop: "5px",
              }}
            >
              SuperAdmin
            </p>
          </Button>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          width: "90vw",
          flexDirection: "column",
          backgroundColor: "#DAE6ED",
        }}
      >
        <Navbar bg="light">
          <Container style={{ display: "flex", flexDirection: "row" }}>
            <Nav className="me-auto">
              <Nav.Link href="#home">Content</Nav.Link>
              <Nav.Link href="#features">History</Nav.Link>
              <Nav.Link href="#pricing">About Us</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Container
          style={{
            marginTop: "2rem",
            // backgroundColor: "white",
            height: "50px",
            borderRadius: "25px",
            textAlign: "center",
            // justifyContent: "center",
            // alignItems: "center",
            display: "flex",
          }}
        >
          <p style={{ marginTop: "10px" }}>Perangkat :</p>
          <div style={{ marginTop: "6px", marginLeft: "10px" }}>
            <Select options={options} />
          </div>
        </Container>
        <div
          className="scrollable-div"
          style={{
            padding: "50px",
            marginTop: "10px",
            backgroundColor: "white",
            height: "25rem",
            borderRadius: "25px",
            flexDirection: "column",
          }}
        >
          <Form>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextEmail"
            >
              <Form.Label column sm="2">
                Nama Perangkat
              </Form.Label>
              <Col sm="10">
                <Form.Control />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextPassword"
            >
              <Form.Label column sm="2">
                Vlan Layanan
              </Form.Label>
              <Col sm="10">
                <Form.Control />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextPassword"
            >
              <Form.Label column sm="2">
                Vlan NMS
              </Form.Label>
              <Col sm="10">
                <Form.Control />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextPassword"
            >
              <Form.Label column sm="2">
                IP Address
              </Form.Label>
              <Col sm="10">
                <Form.Control />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextPassword"
            >
              <Form.Label column sm="2">
                Subnet
              </Form.Label>
              <Col sm="10">
                <Form.Control />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextPassword"
            >
              <Form.Label column sm="2">
                IP Route
              </Form.Label>
              <Col sm="10">
                <Form.Control />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextPassword"
            >
              <Form.Label column sm="2">
                Port Perangkat
              </Form.Label>
              <Col sm="10">
                <Form.Control />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextPassword"
            >
              <Form.Label column sm="2">
                Deskripsi Perangkat
              </Form.Label>
              <Col sm="10">
                <Form.Control />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextPassword"
            >
              <Form.Label column sm="2">
                Port Trunk
              </Form.Label>
              <Col sm="10">
                <Form.Control />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextPassword"
            >
              <Form.Label column sm="2">
                Deskripsi Trunk
              </Form.Label>
              <Col sm="10">
                <Form.Control />
              </Col>
            </Form.Group>
          </Form>
          <div
            style={{
              justifyContent: "flex-end",
              alignItems: "center",
              textAlign: "center",
              display: "flex",
            }}
          >
            <Button
              style={{
                width: "100px",
                height: "45px",
                display: "flex",
                justifyContent: "center",
                backgroundColor: "#001048",
              }}
            >
              <p style={{ fontWeight: "bold" }}>SAVE</p>
            </Button>
          </div>
        </div>
        <Container
          style={{
            marginTop: "4rem",
            backgroundColor: "white",
            height: "50px",
            borderRadius: "25px",
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <p style={{ marginTop: "10px" }}>Copyright &#169; 2022 - KP SANAK</p>
        </Container>
      </div>
    </div>
  );
}
