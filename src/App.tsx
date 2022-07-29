import Home from "./paginas/home/Home";
import "./App.css";
import Navbar from "./componets/estaticos/navbar/Navbar";
import Footer from "./componets/estaticos/footer/Footer";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ minHeight: "67vh" }}>
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
