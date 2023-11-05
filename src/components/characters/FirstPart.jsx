import { LoadingOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { getPersons } from "../../slices/firstPageSlice";
import "./characters.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import uniqid from "uniqid";

const FirstPart = () => {
  const [currentImg, setCurrentImg] = useState(1);

  const dispatch = useDispatch();
  const persons = useSelector((state) => state?.persons?.persons);
  let currentPage = useSelector((state) => state?.persons?.currentPage);
  const loading = useSelector((state) => state.persons.isLoading);

  console.log(persons);
  const showFirstPage = () => {
    dispatch(getPersons(currentPage));
    setCurrentImg(1);
  };
  const showSecondPage = () => {
    dispatch(getPersons(currentPage + 1));
    setCurrentImg(11);
  };
  const showThirdPage = () => {
    dispatch(getPersons(currentPage + 2));
    setCurrentImg(22);
  };
  const showFourthPage = () => {
    dispatch(getPersons(currentPage + 3));
    setCurrentImg(32);
  };
  const showFifthPage = () => {
    dispatch(getPersons(currentPage + 4));
    setCurrentImg(42);
  };
  const showSixthPage = () => {
    dispatch(getPersons(currentPage + 5));
    setCurrentImg(52);
  };
  const showSeventhPage = () => {
    dispatch(getPersons(currentPage + 6));
    setCurrentImg(62);
  };
  const showeEighthPage = () => {
    dispatch(getPersons(currentPage + 7));
    setCurrentImg(72);
  };
  const showeNinethPage = () => {
    dispatch(getPersons(currentPage + 8));
    setCurrentImg(82);
  };

  return (
    <section className="persons-global-container">
      <div className="navigation-links">
        <a onClick={showFirstPage}>1</a>
        <a onClick={showSecondPage}>2</a>
        <a onClick={showThirdPage}>3</a>
        <a onClick={showFourthPage}>4</a>
        <a onClick={showFifthPage}>5</a>
        <a onClick={showSixthPage}>6</a>
        <a onClick={showSeventhPage}>7</a>
        <a onClick={showeEighthPage}>8</a>
        <a onClick={showeNinethPage}>9</a>
      </div>
       <h1>Characters</h1>

      {loading ? (
        <section className="first-part-global-container">
          {persons[persons.length - 1]?.results.map((person, index) => (
            <div key={uniqid()} className="characters-1">
              <div className="character">
                <span>{person.name}</span>
                <img
                  src={`https://starwars-visualguide.com/assets/img/characters/${
                    currentImg <= 89 ? index + currentImg : index
                  }.jpg`}
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
                  to="/character"
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
                      currentImg <= 89 ? index + currentImg : index
                    }.jpg`,

                    imgSrc: `https://starwars-visualguide.com/assets/img/planets/${
                      currentImg <= 60 ? index + currentImg : index
                    }.jpg`,
                  }}
                >
                  More Info
                </Link>
              </div>
            </div>
          ))}
        </section>
      ) : (
        <h1 style={{ color: "yellow", fontSize: "300px", textAlign: "center" }}>
          <LoadingOutlined />
        </h1>
      )}
    </section>
  );
};

export default FirstPart;
