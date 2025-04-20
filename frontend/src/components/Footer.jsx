import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year

  return (
    <footer
      style={{
        backgroundColor: "#005e81",
        color: "white",
        padding: "20px 0",
        height: "150%",
      }}
    >
      {" "}
      {/* Increased height by 10% */}
      <Container>
        <Row>
          <Col className="text-center">
            <p style={{ fontSize: "16px", fontFamily: "Arial, sans-serif" }}>
              {" "}
              {/* Clear font */}
              &copy; {currentYear} Sayuru Samarawickrama. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
