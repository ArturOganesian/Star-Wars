import { Route, Routes } from "react-router-dom";
import FirstPart from "./Personages";
import Character from "./Character";
import Planet from "../planets/Planet";
import Planets from "../planets/Planets";
import HomeWorld from "./HomeWorld";
const Characters = () => {
  return (
    <div className="global-characters-div">
      <Routes>
        <Route path="/characters" element={<FirstPart />} />
        <Route path="/character" element={<Character />} />
        <Route path="/planets" element={<Planets />} />
        <Route path="/planet" element={<Planet />} />
        <Route path="/homeworld" element={<HomeWorld />} />
      </Routes>
    </div>
  );
};

export default Characters;
