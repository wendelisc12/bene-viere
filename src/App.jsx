import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Home from "./pages/inicio/home";
import NavBar from "./components/Navbar/Navbar";
import Carrinho from "./pages/carrinho/Carrinho";
import './index.scss'
import Cadastro from "./pages/cadastro/Cadastro";

function App() {

  return (
    <div style={{background: '#E5EDDD'}}>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/cadastro" element={<Cadastro/>} />
        <Route path="/" element={<NavBar cliente={true}/>}>
          <Route index element={<Home/>}/>
          <Route path="carrinho" element={<Carrinho/>} />
        </Route>
      </Routes>
    </BrowserRouter>

    </div>
  )
}

export default App
