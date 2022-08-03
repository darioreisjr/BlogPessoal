import Home from "./paginas/home/Home";
import Login from "./paginas/login/Login";
import "./App.css";
import Navbar from "./componets/estaticos/navbar/Navbar";
import Footer from "./componets/estaticos/footer/Footer";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CadastroUsuario from "./paginas/cadastroUsuario/CadastroUsuario";
import ListaTema from './componets/temas/listatema/ListaTema';
import ListaPostagem from './componets/postagens/listapostagem/ListaPostagem';


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
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
