import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Produtos from "./Components/Produtos";
import Produto from "./Components/Produto";
import Contato from "./Components/Contato";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="contentApp">
          <Routes>
            <Route path="react-produtosApp" element={<Produtos />} />
            <Route path="react-produtosApp/produto/:id" element={<Produto />} />
            <Route path="react-produtosApp/contato" element={<Contato />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
