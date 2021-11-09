import React from "react";
import NavBar from "../components/NavBar";

import { Container } from "./styles";

export default function Home() {
  return (
    <>
      <NavBar></NavBar>
      <Container>
        <div className="home-page">
          <h1>Home</h1>
        </div>
      </Container>
    </>
  );
}
