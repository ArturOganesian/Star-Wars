import { useLocation } from "react-router-dom";
import "./character.css";
import { Link } from "react-router-dom";

const Character = () => {
  const location = useLocation();
  const state = location.state;

  return (
    <section className="character-info-container">
      <div className="character-info-global">
        <img src={state?.imgUrl} alt="person Image" />
        <div className="character-info">
          <h3>{state?.name}</h3>
          <p>
            <span>Birth Year</span>
            {state?.birth_year}
          </p>

          <p>
            <span>Height</span>
            {state?.height}cm
          </p>
          <p>
            <span>Mass</span>
            {state?.mass}kg
          </p>
          <p>
            <span>Hair Color</span>
            {state?.hair_color}
          </p>
          <p>
            <span>Skin Color</span>
            {state?.skin_color}
          </p>
          <p>
            <span>Home World</span>
            <Link
              to={{
                pathname: `/planet`,
                
              }}
            >
              Link
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Character;
