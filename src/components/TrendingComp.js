import React from "react";
import { Row, Col, Card, Badge } from "react-bootstrap";
import trendingpertama from "../assets/berita/trending1.svg";
import trendingkedua from "../assets/berita/trending2.svg";

const TrendingComp = () => {
  return (
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
  );
};

export default TrendingComp;
