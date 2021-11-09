import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";

import api from "../services/api";
import { Container } from "./styles";

function Courses() {
  const [list, setList] = useState([]);

  const handleFlashcards = async () => {
    const response = await api.get("api/colecoes");
    setList(response.data);
  };

  useEffect(() => {
    handleFlashcards();
  });

  return (
    <>
      <NavBar></NavBar>
      <Container>
        <div className="home-page">
          <h1>Courses</h1>
          {list.map((index) => (
            <>
              <h3>{index.nome}</h3>
              <p>Coleção: {index.colecaoId}</p>
              <p>{index.descricao}</p>
              <p>{index.publico ? "Público" : "Privado"}</p>
            </>
          ))}
        </div>
      </Container>
    </>
  );
}

export default Courses;
