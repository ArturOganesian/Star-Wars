import { Route, Routes } from "react-router";
import "./App.css";
import Characters from "./components/characters/Characters";
import Header from "./components/header/Header";
import Planets from "./components/planets/Planets";
import Planet from "./components/planets/Planet";

function App() {
  return (
    <div className="App">
      <Header />
      <Characters />
      <Routes>
        <Route path="/planets" element={<Planets />} />
        <Route path="/planet" element={<Planet />} />
      
      </Routes>
    </div>
  );
}

export default App;
