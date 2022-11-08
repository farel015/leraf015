import React from "react";
import { Container, Form, Badge, Button, Stack } from "react-bootstrap";
import BeritaComp from "../components/BeritaComp";
import TrendingComp from "../components/TrendingComp";

const HomePage = () => {
  return (
    <section id="homePage">
      <div id="hero">
        <Container>
          <div>
            <h1 className="text-white">Collect your trendy knowledge</h1>
            <h6 className="text-white">"You don't have to be great to start, but you have to start to be great."</h6>
          </div>
          <Stack direction="horizontal" gap={3} className="mt-5">
            <div>
              <Button variant="primary" size="sm" className="text-white">
                See Article
              </Button>
            </div>
            <div>
              <Button variant="outline-secondary" size="sm" className="text-white">
                My Github
              </Button>
            </div>
          </Stack>
        </Container>
      </div>
      <Container>
        <div className="d-flex mt-5">
          <div>
            <h5 className="fw-bold">
              <Badge bg="primary" className="text-white">
                Trending News
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
