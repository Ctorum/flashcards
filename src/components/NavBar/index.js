import React from "react";
import { Container } from "./styles";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <Container>
      <nav>
        <div className="logo">FlashCards</div>
        <ul>
          <NavLink to="/" className="li">
            Home
          </NavLink>
          <NavLink to="/courses" className="li">
            Courses
          </NavLink>
        </ul>
      </nav>
    </Container>
  );
}
