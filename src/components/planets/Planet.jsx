import { useLocation } from "react-router-dom";
const Planet = () => {
    const location = useLocation();
    const state = location.state
    
        
    return ( 
        <section className="planet-more-info-container">
            <div className="planet-info-container">
                <img src={state.imgSrc} />
                <div className="planet-info">
                    <h3>{state.name}</h3>
                    <p>Population<span>{state.population}</span>people</p>
                    <p>Rotation_Period:<span>{state.rotation_period}</span>days</p>
                    <p>Orbital Period:<span>{state.orbital_period}</span>days</p>
                    <p>Diameter:<span>{state.diameter}</span>KM</p> 
                    <p>Gravity: <span>{state.gravity}</span></p>
                    <p>Terrain:<span>{state.terrain}</span></p> 
                    <p>Surface Water:<span>{state.surface_water}</span></p>
                    <p>Climate:<span>{state.climate}</span></p> 
                 </div>
              </div>
           
        </section>
     );
}
 
export default Planet;