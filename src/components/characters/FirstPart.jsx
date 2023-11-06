import { LoadingOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Button } from "antd";
import { getPersons, setCurrentPage } from "../../slices/firstPageSlice";
import "./characters.css";
import { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import uniqid from "uniqid";

const FirstPart = () => {

  const [currentImg, setCurrentImg] = useState(1);
  const dispatch = useDispatch();
  const persons = useSelector((state) => state?.persons?.persons);
  let currentPage = useSelector((state) => state?.persons?.currentPage);
  const loading = useSelector((state) => state.persons.isLoading);
let [testState,setTestState] = useState(currentPage)
   let arr = persons
  
  const testFunc = async() => {
    setTestState(testState + 1)
    setCurrentImg(currentImg + 11)
    await Promise.resolve(dispatch(getPersons(testState)))
    
  
  }

  
  useEffect(() => {
  setTestState(testState + 1)
 dispatch(getPersons(testState))
},[window] );
  
  const prevFunc = async () => {
    setTestState(testState - 1)

     await Promise.resolve(dispatch(getPersons(testState)))
    
  }
  
  
  
  return (
    <section className="persons-global-container">
      <div className="navigation-links">
        {testState <= 9 ? <button onClick={testFunc}>next</button> : null}
        
        <div>
          gg
        </div>
        <button onClick={prevFunc}>prev</button>

  
      </div>
       <h1>Characters</h1>

    
        <section className="first-part-global-container">
          {persons[persons.length-1]?.results.map((person, index) => (
            <div key={uniqid()} className="characters-1">
              <div className="character">
                <span>{person.name}</span>
                <img
                  src={
                     currentImg + index !== 17 ? `https://starwars-visualguide.com/assets/img/characters/${
                   
                    currentImg + index
                    }.jpg` : "https://starwars-visualguide.com/assets/img/placeholder.jpg"}
                  alt={"errror"}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "https://starwars-visualguide.com/assets/img/placeholder.jpg";
                    }}
                />
              </div>
              <div className="persons-info-container">
                <p className="person-info">gender: {person.gender}</p>
                <p className="person-info">BirthDay:{person.birth_year}</p>
                <p className="person-info">
                  height: {person.height / 100}meter
                </p>
                <p className="person-info">mass: {person.mass}kg</p>
                <Link
                  to={{
                    pathname: '/character',
                    search: `?sort=${person.name}`
                  }}
                  state={{
                    name: person.name,
                    birth_year: person.birth_year,
                    species: person.species,
                    height: person.height,
                    mass: person.mass,
                    gender: person.gender,
                    hair_color: person.hair_color,
                    skin_color: person.skin_color,
                    homeworld: person.homeworld,
                    imgUrl: `https://starwars-visualguide.com/assets/img/characters/${
                      currentImg <= 89 ? index + currentImg  : index
                    }.jpg`,

                 
                  }}
                >
                  More Info
                </Link>
              </div>
            </div>
          ))}
        </section>
     
    </section>
  );
};

export default FirstPart;
