import React from "react";
import { Navbar, Container, Image, Nav, Button } from "react-bootstrap";
import gambar from "../comp/gambar.jpg";
import iconpln from "../comp/iconpln.jpg";
import { FaUserCircle } from "react-icons/fa";

export default function LandingPage() {
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
              <Nav.Link href="">Content</Nav.Link>
              <Nav.Link href="">History</Nav.Link>
              <Nav.Link href="#pricing">About Us</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Container
          style={{
            padding: "50px",
            marginTop: "2rem",
            backgroundColor: "white",
            height: "20rem",
            borderRadius: "25px",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              height: "150px",
              backgroundColor: "white",
              textAlign: "left",
              flexDirection: "row",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <div style={{ marginTop: "20px" }}>
              <h2>Selamat Datang, Super Admin</h2>
              <h3>
                Selamat Datang di AutoConfig, <br />
                Mudahkan Pekerjaanmu
              </h3>
            </div>
            <div>
              <Image src={gambar} style={{ width: "350px", height: "200px" }} />
            </div>
          </div>
          <div
            style={{
              height: "50px",
              backgroundColor: "white",
              alignItems: "end",
              display: "flex",
              justifyContent: "end",
              marginTop: "3rem",
            }}
          >
            <Image src={iconpln} style={{ width: "100px", height: "80px" }} />
          </div>
        </Container>
        <Container
          style={{
            marginTop: "14rem",
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
