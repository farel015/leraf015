import React from "react";
import { Container, Card } from "react-bootstrap";

const AnnoucmentComp = () => {
  return (
    <>
      <Card className="border-0 py-2 text-center" bg="light">
        <Container>
          <span>
            jangan lupa mampir ke sosial media saya {""}
            <a href="https://github.com/farel015" target="_blank" rel="noopener noreferrer">
              klik disini
            </a>
          </span>
        </Container>
      </Card>
    </>
  );
};

export default AnnoucmentComp;
