import { Route, Routes } from "react-router-dom";
import FirstPart from "../first/FirstPart";

const Characters = () => {
  return (
    <div className="global-characters-div">
      <Routes>
     <Route path="/characters" element={<FirstPart />} />
      </Routes>
      
    </div>
  );
};

export default Characters;
