import Home from "./paginas/home/Home";
import Login from "./paginas/login/Login";
import "./App.css";
import Navbar from "./componets/estaticos/navbar/Navbar";
import Footer from "./componets/estaticos/footer/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CadastroUsuario from "./paginas/cadastroUsuario/CadastroUsuario";
import ListaTema from "./componets/temas/listatema/ListaTema";
import ListaPostagem from "./componets/postagens/listapostagem/ListaPostagem";
import CadastroPost from "./componets/postagens/cadastroPost/CadastroPost";
import DeletarPostagem from "./componets/postagens/deletarPostagem/DeletarPostagem";
import CadastroTema from "./componets/temas/cadastroTema/CadastroTema";
import DeletarTema from "./componets/temas/deletarTema/DeletarTema";

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ minHeight: "100vh" }}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cadastrousuario" element={<CadastroUsuario />} />
          <Route path="/temas" element={<ListaTema />} />
          <Route path="/posts" element={<ListaPostagem />} />
          <Route path="/formularioPostagem" element={<CadastroPost />} />
          <Route path="/formularioPostagem/:id" element={<CadastroPost />} />
          <Route path="/formularioTema" element={<CadastroTema />} />
          <Route path="/formularioTema/:id" element={<CadastroTema />} />
          <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />
          <Route path="/deletarTema/:id" element={<DeletarTema />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
