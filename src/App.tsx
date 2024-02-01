import React, { SetStateAction, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import MainRouter from "./app/routing";
import styled from "styled-components";

const AppContainer = styled.div`
  max-width: 100vw;
  max-height: 100vh;
  margin: 0 auto;
  padding: 20px;
`;

const App: React.FC = () => {
  const [isAuth, setIsAuth] = useState<boolean>(false);

  return (
    <AppContainer
      // style={{
      //   maxWidth: "1200px",
      //   margin: "0 auto",
      //   padding: "20px",
      // }}
    >
      <Navbar setIsAuth={setIsAuth} isAuth={isAuth} />
      <MainRouter isAuth={isAuth} />
    </AppContainer>
  );
};

export default App;
