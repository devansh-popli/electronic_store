import React from "react";
import { Container } from "react-bootstrap";

export const Footer = () => {
  return (
    <Container
      fluid
      className="bg-dark p-5 text-white d-flex align-items-center justify-content-center text-center"
    >
      <div>
        <h2 className="text-white">We provide best products</h2>
        <p>
          All Rights Reserved <b>Popli Technologies</b>
        </p>
      </div>
    </Container>
  );
};
