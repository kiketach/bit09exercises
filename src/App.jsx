import "./App.css";
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import { About } from "./Components/About";
import { Products } from "./Components/Products";

function App() {
  return (
    <>
      <h1>Ejercicios con REACT</h1>

      <BrowserRouter>
          <nav>
            <Link to = '/'>Inicio</Link>
            <Link to = '/Nosotros'>Nosotros</Link>
            <Link to = '/Productos'>Productos</Link>
          </nav>
          <Routes>
            <Route path="/Nosotros" element={<About />}></Route>
            <Route path="/Productos" element={<Products />}></Route>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
