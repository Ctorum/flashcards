import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import { AiOutlinePlus } from "react-icons/ai";

import api from "../services/api";
import { Container, CreateFlashCard } from "./styles";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Courses() {
  const [list, setList] = useState([]);
  const [open, setOpen] = useState(false);
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [privacity, setPrivacity] = useState();

  const handleFlashcards = async () => {
    const response = await api.get("api/colecoes");
    setList(response.data);
  };

  const handlePostFlashcards = async (e) => {
    e.preventDefault();
    const data = {
      colecaoId: list.length + 1,
      nome: name,
      descricao: description,
      publico: privacity,
    };
    await api
      .post("api/colecoes", data)
      .then((response) => {
        console.log(response);
        toast("Criado com sucesso");
      })
      .catch((error) => {
        console.log(error);
        toast("Erro");
      })
      .finally((index) => console.log(index));
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
          <section className="flashcard-list">
            {list.map((index) => (
              <div className="flashcard" key={index.colecaoId}>
                <h3>{index.nome}</h3>
                <p>Coleção: {index.colecaoId}</p>
                <p>{index.descricao}</p>
                <p>{index.publico ? "Público" : "Privado"}</p>
              </div>
            ))}
          </section>
        </div>
        <button type="button" className="add" onClick={() => setOpen(true)}>
          <AiOutlinePlus></AiOutlinePlus>
        </button>
        <ToastContainer></ToastContainer>
      </Container>
      <CreateFlashCard open={open} onClose={() => setOpen(false)}>
        <div className="modal">
          <h2>Create FlashCard</h2>
          <form>
            <p>Nome do flashcard</p>
            <input
              type="text"
              value={name}
              required
              onChange={(value) => setName(value.target.value)}
            ></input>
            <p>Descrição</p>
            <input
              type="text"
              value={description}
              required
              onChange={(value) => setDescription(value.target.value)}
            ></input>
            <p>Publico ou Privado</p>
            <select
              value={privacity}
              required
              onChange={(value) => setPrivacity(value.target.value)}
            >
              <option value={true}>Publico</option>
              <option value={false}>Privado</option>
            </select>
            <button
              type="submit"
              className="post"
              onClick={handlePostFlashcards}
            >
              Send FlashCard
            </button>
          </form>
        </div>
      </CreateFlashCard>
    </>
  );
}

export default Courses;
