import "./planet.css";
import { getPlanets } from "../../slices/planetsSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import uniqid from "uniqid";
import { Link} from "react-router-dom";



const Planets = () => {
  const [currentImg, setCurrentImg] = useState(1);
  const dispatch = useDispatch();
  const planets = useSelector((state) => state?.planets?.planets);
  const currentPage = useSelector((state) => state?.planets?.currentPage);

  const showFirstPage = () => {
    dispatch(getPlanets(currentPage));
    setCurrentImg(1);
  };
  const showSecondPage = () => {
    dispatch(getPlanets(currentPage + 1));
    setCurrentImg(11);
  };
  const showThirthPage = () => {
    dispatch(getPlanets(currentPage + 2));
    setCurrentImg(22);
  };
  const showFourthPage = () => {
    dispatch(getPlanets(currentPage + 3));
    setCurrentImg(32);
  };
  const showFifthPage = () => {
    dispatch(getPlanets(currentPage + 4));
    setCurrentImg(42);
  };
  const showSixthPage = () => {
    dispatch(getPlanets(currentPage + 5));
    setCurrentImg(52);
  };
  

  console.log(planets);
  return (
    <section className="global-planets-div">
      <div className="navigation-links">
      <a onClick={showFirstPage}>1</a>
      <a onClick={showSecondPage}>2</a>
      <a onClick={showThirthPage}>3</a>
      <a onClick={showFourthPage}>4</a>
      <a onClick={showFifthPage}>5</a>
      <a onClick={showSixthPage}>6</a>
      </div>
    
       <h1>Planets</h1>

      <div className="planets">
        {planets[planets.length - 1]?.results.map((planet, index) => (
          <div className="planet" key={uniqid()}>
            <span className="planet-name">{planet.name}</span>
            <img
              src={`https://starwars-visualguide.com/assets/img/planets/${
                currentImg <= 60 ? index + currentImg : index
              }.jpg`}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://starwars-visualguide.com/assets/img/placeholder.jpg";
              }}
            />
            <div className="hover-info">
              <span className="planet-name-hover">{planet.name}</span>
              <span>
                <span>Diamter:</span>
                {planet.diameter}
              </span>
              <span>
                <span>Population:</span>
                {planet.population}
              </span>
              <Link
                to={{
                  pathname: "/planet",
                  search: `?sort=${planet.name}`
                }}
                state={{
                  name: planet.name,
                  population: planet.population,
                  rotation_period: planet.orbital_period,
                  orbital_period: planet.orbital_period,
                  diameter: planet.diameter,
                  gravity: planet.gravity,
                  terrain: planet.terrain,
                  surface_water: planet.surface_water,
                  climate: planet.climate,
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
      </div>

    </section>
  );
};

export default Planets;
