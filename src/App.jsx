import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Home from "./pages/inicio/home";
import NavBar from "./components/Navbar/Navbar";
import Carrinho from "./pages/carrinho/Carrinho";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={<NavBar cliente={true}/>}>
          <Route index element={<Home/>}/>
          <Route path="carrinho" element={<Carrinho/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
