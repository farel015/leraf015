import React from "react";
import { Container, Form, Badge } from "react-bootstrap";
import BeritaComp from "../components/BeritaComp";
import CarouselComp from "../components/CarouselComp";
import TrendingComp from "../components/TrendingComp";

const HomePage = () => {
  return (
    <section id="homePage">
      <Container>
        <div className="mt-3">
          <CarouselComp />
        </div>
        <div className="d-flex mt-5">
          <div>
            <h5 className="fw-bold">
              <Badge bg="success" className="text-white">
                Trending
              </Badge>
            </h5>
          </div>
        </div>
        <Form.Text muted>latest trending news. </Form.Text>
        <TrendingComp />
        <BeritaComp />
      </Container>
    </section>
  );
};

export default HomePage;
