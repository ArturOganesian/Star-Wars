import { Route, Routes } from "react-router";
import "./App.css";
import Characters from "./components/characters/Characters";
import Header from "./components/header/Header";
import Planets from "./components/planets/Planets";
import Planet from "./components/planets/Planet";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <div className="App">
      <Header />
      <Characters />
    
      <Footer />
    </div>
  );
}

export default App;
