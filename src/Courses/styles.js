import styled from "styled-components";
import { Modal } from "@material-ui/core";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  height: 50%;
  color: white;
  .home-page {
    width: 100%;
    height: 100%;
    h3 {
      font-size: 50px;
      font-weight: normal;
      text-align: center;
      padding: 0;
      color: gray;
    }
    h1 {
      font-size: 110px;
      text-align: center;
      margin: 0;
      padding: 0;
    }
  }
  .flashcard-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 25px;
  }
  .add {
    width: 50px;
    height: 50px;
    background-color: white;
    border-radius: 50%;
    position: fixed;
    right: 50px;
    bottom: 50px;
    margin: 0;
    padding: 0;
    outline: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const CreateFlashCard = styled(Modal)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  .modal {
    width: 20%;
    height: 50%;
    background-color: #1f1f1f;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h2 {
      color: white;
    }
    form {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-between;
      p {
        color: white;
      }
      input {
        color: white;
        padding: 5px;
        border-radius: 5px;
        box-sizing: border-box;
        &:focus {
          padding: 5px;
          background-color: #2f2f2f;
        }
      }
      select {
        color: white;
      }
      button {
        width: 100%;
        height: 30px;
        margin-top: 15px;
        border-radius: 5px;
        color: white;
        transition: ease-in-out 300ms;
        &:hover {
          color: #1f1f1f;
          background-color: white;
        }
      }
    }
  }
`;
