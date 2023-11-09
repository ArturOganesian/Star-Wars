
import "./App.css";
import Characters from "./components/characters/Characters";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import GlobalPage from "./components/globalPage/GlobalPage";
import { Route,Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<GlobalPage />} /> 
      </Routes>
      <Characters />
      <Footer />
    </div>
  );
}

export default App;
