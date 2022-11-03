import React from "react";
import { Row, Col, Card } from "react-bootstrap";

import beritapertama from "../assets/berita/berita1.svg";
import beritakedua from "../assets/berita/berita2.svg";
import beritaketiga from "../assets/berita/berita3.svg";

const BeritaComp = () => {
  return (
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
  );
};

export default BeritaComp;
