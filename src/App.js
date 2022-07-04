import React from "react";
import { HashRouter, Routes, Route, Switch } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Produtos from "./Components/Produtos";
import Produto from "./Components/Produto";
import Contato from "./Components/Contato";
import "./App.css";

function App() {
  return (
    <div className="App">
      <HashRouter basename="/react-produtosApp">
        <Header />
        <div className="contentApp">
          <Routes>
            <Route exact path="/" element={<Produtos />} />
            <Route exact path="/produto/:id" element={<Produto />} />
            <Route exact path="/contato" element={<Contato />} />
          </Routes>
        </div>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
