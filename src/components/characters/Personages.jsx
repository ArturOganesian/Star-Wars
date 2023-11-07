import { LoadingOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Button } from "antd";
import { getPersons, setCurrentPage } from "../../slices/firstPageSlice";
import "./characters.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

import uniqid from "uniqid";

const FirstPart = () => {
  const [currentImg, setCurrentImg] = useState(1);
  const persons = useSelector((state) => state?.persons?.persons);
  const currentPage = useSelector((state) => state?.persons?.currentPage);
  const loading = useSelector((state) => state.persons.isLoading);
  const [currentPageState, setCurrentPageState] = useState(currentPage);
  const [prevPageState, setPrevPageState] = useState();
  const dispatch = useDispatch();
  console.log(persons);

  useEffect(() => {
    setCurrentPageState(currentPageState + 1);
    dispatch(getPersons(currentPageState));
  }, []);
  const nextPage = async () => {
    setCurrentPageState(currentPageState + 1);
    setPrevPageState(currentPageState - 1);
    setCurrentImg(currentImg + 10);
    if (currentImg > 11) {
      setCurrentImg(currentImg + 11);
    }
    await Promise.resolve(dispatch(getPersons(currentPageState)));
  };

  const prevPage = async () => {
    setPrevPageState(prevPageState - 1);
    setCurrentPageState(prevPageState + 1);
    if (currentImg > 10) {
      setCurrentImg(currentImg - 10);
    }

    await Promise.resolve(dispatch(getPersons(prevPageState)));
  };

  return (
    <section className="persons-global-container">
       <h1>Characters</h1>
      <div className="navigation-links-characters">
        <Button onClick={prevPage}>
          <LeftOutlined />
        </Button>
        <Button onClick={nextPage}>
          <RightOutlined />
        </Button>
      </div>
     

      { loading ? <section className="first-part-global-container">
        {persons[persons.length - 1]?.results.map((person, index) => (
          <div key={uniqid()} className="characters-1">
            <div className="character">
              <span>{person.name}</span>
              <img
                src={
                  currentImg + index !== 17
                    ? `https://starwars-visualguide.com/assets/img/characters/${
                        currentImg + index
                      }.jpg`
                    : "https://starwars-visualguide.com/assets/img/placeholder.jpg"
                }
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
              <p className="person-info">height: {person.height / 100}meter</p>
              <p className="person-info">mass: {person.mass}kg</p>
              <Link
                to={{
                  pathname: "/character",
                  search: `?sort=${person.name}`,
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
                    currentImg <= 89 ? index + currentImg : index
                  }.jpg`,
                }}
              >
                More Info
              </Link>
            </div>
          </div>
        ))}
      </section> : <LoadingOutlined  className="loading"/>}
      
    </section>
  );
};

export default FirstPart;
