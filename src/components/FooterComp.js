import React from "react";
import { Container } from "react-bootstrap";

const FooterComp = () => {
  return (
    <section id="Footer">
      <Container>
        <hr />
        <span className="fw-normal ">
          © 2022 Made with ♥ by{" "}
          <a href="https://github.com/farel015" target="_blank" rel="noopener noreferrer">
            Farel015
          </a>
        </span>
      </Container>
    </section>
  );
};

export default FooterComp;
