import React from "react";
import { Container, Row, Col, Card, Form, Badge } from "react-bootstrap";
import beritapertama from "../assets/berita/berita1.svg";
import beritakedua from "../assets/berita/berita2.svg";
import beritaketiga from "../assets/berita/berita3.svg";
import iklan from "../assets/img/iklan.svg";
import trendingpertama from "../assets/berita/trending1.svg";
import trendingkedua from "../assets/berita/trending2.svg";

const HomePage = () => {
  return (
    <section id="homePage">
      <Container>
        <Row className="pt-5">
          <img src={iklan} alt="iklan blog" />
        </Row>
        <div className="d-flex mt-5">
          <div>
            <h5 className="fw-bold">
              <Badge bg="success" className="text-white">
                Trending
              </Badge>
            </h5>
          </div>
          <div className="ms-auto">
            <Form.Control type="search" size="sm" placeholder="Search ...." className="me-2" aria-label="Search" />
          </div>
        </div>
        <Form.Text muted>latest trending news. </Form.Text>
        <Row className="mt-3">
          <Col sm={4} className="mt-3">
            <Card className="border-0 shadow-sm">
              <Card.Body>
                <img src={trendingpertama} alt="trending pertama" className="img-fluid" width="100%" />
                <Card.Title className="fw-bolder">Whatsup error</Card.Title>
                <span className="text-muted"> WhatsApp error hari ini, Selasa (25/10/2022) siang mulai pukul 14.10 WIB.</span>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={8} className="mt-3">
            <Card className="border-0 shadow-sm">
              <Row>
                <Col sm={6}>
                  <img src={trendingkedua} alt="trending kedua" className="img-fluid" width="100%" />
                </Col>
                <Col sm={6} className="py-3">
                  <Card.Body>
                    <h5>
                      <Badge bg="danger text-white">HOT</Badge>
                    </h5>
                    <Card.Title className="fw-bolder fs-2">Destinasi Terbaik Indonesia 2022</Card.Title>
                    <p className="text-muted py-2 mr-5">Indonesia merupakan negara terluas ke-14 sekaligus negara kepulauan terbesar di dunia dengan luas wilayah sebesar 1.904.569 km², serta negara dengan pulau .</p>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col sm={4} className="mt-3">
            <Card className="border-0 shadow-sm">
              <img src={beritapertama} alt="whatsup error ada apa?" />
            </Card>
          </Col>
          <Col sm={4} className="mt-3">
            <Card className="border-0 shadow-sm">
              <img src={beritakedua} alt="the guardian of the galaxy vol 3 tahun 2023" />
            </Card>
          </Col>
          <Col sm={4} className="mt-3">
            <Card className="border-0 shadow-sm">
              <img src={beritaketiga} alt="next.js versi 13 muncul" />
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HomePage;
