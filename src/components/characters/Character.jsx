import { useLocation } from "react-router-dom";
import "./character.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getWorlds } from "../../slices/planetsDetails";
import { useEffect } from "react";
import { LoadingOutlined } from "@ant-design/icons";

const Character = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const state = location.state;
  const world = useSelector((state) => state.worlds?.homeworlds);
  const isLoading = useSelector((state) => state.worlds?.isLoading);

  useEffect(() => {
    dispatch(getWorlds(state.homeworld));
  }, []);

  return (
    <section className="character-info-container">
      {isLoading ? (
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
                  pathname: `/homeworld`,
                }}
                state={{
                  homeworldData: world,
                }}
              >
                {world[0]?.name}
              </Link>
            </p>
          </div>
        </div>
      ) : (
        <LoadingOutlined className="loading" />
      )}
    </section>
  );
};

export default Character;
