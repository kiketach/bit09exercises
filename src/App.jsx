import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Exercises } from "./Components/Exercises";
import { Homepage } from "./Components/Homepage";

function App() {
  return (
    <>
      <div className="container text-center">
        <h1>Exercices with REACT</h1>
        <hr />
      </div>

      <div className="container">
        <BrowserRouter>
          <nav className="py-4 text-center">
            <Link className="px-3" to="/homepage">
              Home
            </Link>
            <Link className="px-3" to="/Exercises">
              Exercises
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
