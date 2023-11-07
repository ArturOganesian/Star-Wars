import "./planet.css";
import { getPlanets } from "../../slices/planetsSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import uniqid from "uniqid";
import { Link } from "react-router-dom";
import { Button } from "antd";
import { LeftOutlined, RightOutlined,LoadingOutlined } from "@ant-design/icons";

const Planets = () => {
  const [currentImg, setCurrentImg] = useState(1);
  const dispatch = useDispatch();
  const planets = useSelector((state) => state?.planets?.planets);
  const currentPage = useSelector((state) => state?.planets?.currentPage);
  const loading = useSelector((state) => state?.planets?.isLoading)
  const [currentPageState, setCurrentPageState] = useState(currentPage);
  const [prevPageState, setPrevPageState] = useState();

  console.log(currentPageState, "current");
  console.log(prevPageState, "prev");

  useEffect(() => {
    setCurrentPageState(currentPageState + 1);
    dispatch(getPlanets(currentPageState));
  }, []);

  const getNextPage = async () => {
    setCurrentPageState(currentPageState + 1);
    setPrevPageState(currentPageState - 1);
    setCurrentImg(currentImg + 10);

    await Promise.resolve(dispatch(getPlanets(currentPageState)));
  };

  const getPrevPage = async () => {
    setPrevPageState(prevPageState);
    setCurrentPageState(prevPageState + 1);
    if (currentImg >= 10) {
      setCurrentImg(currentImg - 10);
    }
    await Promise.resolve(dispatch(getPlanets(prevPageState)));
  };

  console.log(planets);
  return (
    <section className="global-planets-div">
       <h1>Planets</h1>
      <div className="navigation-links">
     

        <Button onClick={getPrevPage}>
          <LeftOutlined />
        </Button>
        <Button onClick={getNextPage}>
          <RightOutlined />
        </Button>
      </div>

      
      {loading ?   <div className="planets">
        {planets[planets.length - 1]?.results.map((planet, index) => (
          <div className="planet" key={uniqid()}>
            <span className="planet-name">{planet.name}</span>
            <img
              src={
                currentImg >= 1 && currentImg < 20
                  ? `https://starwars-visualguide.com/assets/img/planets/${
                      currentImg + index
                    }.jpg`
                  : "https://starwars-visualguide.com/assets/img/placeholder.jpg"
              }
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
                  search: `?sort=${planet.name}`,
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
      </div> : <LoadingOutlined  className="loading"/>}
     
    </section>
  );
};

export default Planets;
