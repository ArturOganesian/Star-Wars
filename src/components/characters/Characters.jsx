import { Route, Routes } from "react-router-dom";
import FirstPart from "./FirstPart";
import Character from "./Character";

const Characters = () => {
  return (
    <div className="global-characters-div">
      <Routes>
        <Route path="/characters" element={<FirstPart />} />
        <Route path="/character" element={<Character />} />
      </Routes>
    </div>
  );
};

export default Characters;
