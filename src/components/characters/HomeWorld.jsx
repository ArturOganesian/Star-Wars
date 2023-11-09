import { useLocation } from "react-router-dom";
import uniqid from "uniqid";
import "./homeWorld.css";

const HomeWorld = () => {
  const location = useLocation();
  const state = location.state;
  const worlds = state.homeworldData;
  const currentImg = worlds[0].url.split("").splice(22, 9).join("");


  return (
    <section className="global-homeworld-section">
      {worlds.map((world, index) => (
        <div className="world-container" key={uniqid()}>
          <div className="picture-div">
            <img
              src={`https://starwars-visualguide.com/assets/img/${currentImg}.jpg`}
              alt={worlds[0].name}
              style={{ color: "red" }}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://starwars-visualguide.com/assets/img/placeholder.jpg";
              }}
            />
          </div>

          <div className="world-info">
            <h2>{world.name}</h2>
            <p>
              Population<span>{world.population}</span>people
            </p>
            <p>
              Rotation Period<span>{world.rotation_period}</span>days
            </p>
            <p>
              Orbital Period<span>{world.rotation_period}</span>days
            </p>
            <p>
              Diameter<span>{world.diameter}</span>KM
            </p>
            <p>
              Gravity<span>{world.gravity}</span>
            </p>
            <p>
              Terrain<span>{world.terrain}</span>
            </p>
            <p>
              Surface Water<span>{world.surface_water}</span>
            </p>
            <p>
              Climate<span>{world.climate}</span>
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default HomeWorld;
