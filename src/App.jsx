import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Exercises } from "./Components/Exercises";
import { Homepage } from "./Components/Homepage";

function App() {
  return (
    <>
      <div className="container text-center">
        <h1>Ejercicios con REACT</h1>
        <hr />
      </div>

      <div className="container">
        <BrowserRouter>
          <nav className="py-4 text-center">
            <Link className="px-2" to="/homepage">
              Inicio
            </Link>
            <Link className="px-2" to="/Exercises">
              Ejercicios
            </Link>
          </nav>
          <hr />
          <Routes>
            <Route path="/homepage" element={<Homepage />}></Route>
            <Route path="/Exercises" element={<Exercises />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
