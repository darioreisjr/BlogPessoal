import Home from "./paginas/home/Home";
import Login from "./paginas/login/Login";
import "./App.css";
import Navbar from "./componets/estaticos/navbar/Navbar";
import Footer from "./componets/estaticos/footer/Footer";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CadastroUsuario from "./paginas/cadastroUsuario/CadastroUsuario";


function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ minHeight: "67.20vh" }}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cadastrousuario" element={<CadastroUsuario />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
