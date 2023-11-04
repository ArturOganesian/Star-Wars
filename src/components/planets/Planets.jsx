import './planet.css';
import { getPlanets } from '../../slices/planetsSlice';
import { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import uniqid from "uniqid";
import { Link, Route, Routes } from 'react-router-dom';
import Planet from './Planet';


const Planets = () => {
   const [currentImg,setCurrentImg] = useState(1)
  const dispatch = useDispatch();
  const planets = useSelector((state) => state?.planets?.planets);
  const currentPage = useSelector((state) => state?.planets?.currentPage);




  const testClick1 = () => {
    dispatch(getPlanets(currentPage))
    setCurrentImg(1)
  }
  const testClick2 = () => {
    dispatch(getPlanets(currentPage + 1))
    setCurrentImg(11)
    
  }
  const testClick3 = () => {
    dispatch(getPlanets(currentPage + 2))
    setCurrentImg(22)
  }
  const testClick4 = () => {
    dispatch(getPlanets(currentPage + 3))
    setCurrentImg(32)
  }
  const testClick5 = () => {
    dispatch(getPlanets(currentPage + 4))
    setCurrentImg(42)
  }
  const testClick6 = () => {
    dispatch(getPlanets(currentPage + 5))
    setCurrentImg(52)
  }
   const img = "https://starwars-visualguide.com/assets/img/placeholder.jpg"
  const onErrorImg = (image) => {
    return  image
  }

  console.log(planets)
  return (
        
    <section className="global-planets-div">
       
       <button onClick={testClick1}>Click1</button>
       <button onClick={testClick2}>Click2</button>
       <button onClick={testClick3}>Click3</button>
       <button onClick={testClick4}>Click4</button>
       <button onClick={testClick5}>Click5</button>
       <button onClick={testClick6}>Click6</button>
      <h1 style={{ color: "yellow" }}>Hello Planets</h1>

      <div className='planets'>
      {planets[planets.length - 1]?.results.map((planet, index) => (
        
<div className='planet' key={uniqid()}>
          <span className='planet-name'>{planet.name}</span>
          <img src={`https://starwars-visualguide.com/assets/img/planets/${currentImg <= 60 ? index + currentImg : index}.jpg`}
            onError={(e) => { e.target.onerror = null;  e.target.src="https://starwars-visualguide.com/assets/img/placeholder.jpg"}}
          />
          <div className='hover-info'>
            <span className='planet-name-hover'>{planet.name}</span>
            <span><span>Diamter:</span>{planet.diameter}</span>
            <span><span>Population:</span>{planet.population}</span>
            <Link to="/planet" state={{
              name: planet.name,
              population: planet.population,
              rotation_period: planet.orbital_period,
              orbital_period: planet.orbital_period,
              diameter: planet.diameter,
              gravity: planet.gravity,
              terrain: planet.terrain,
              surface_water: planet.surface_water,
              climate: planet.climate,
              imgSrc: `https://starwars-visualguide.com/assets/img/planets/${currentImg <= 60 ? index + currentImg : index}.jpg`,
            }}>More Info</Link>
               </div>
        </div>
         
      ))}
      </div>
    

        </section>
      );
}
 
export default Planets;