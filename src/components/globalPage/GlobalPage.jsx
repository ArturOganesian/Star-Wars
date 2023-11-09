import { Link } from 'react-router-dom';
import './globalPage.css';

const GlobalPage = () => {
    return ( 
        <section className="globalPage-global-section">
            <Link to={{
                pathname: '/characters'
            }}>
            <div className='to'>
                <h2 className='to-titles'>Characters</h2>
                <picture>
              <source srcSet='characters.jpg' />
                  <img src='charactersAlternative.jpg'  alt='Planets' style={{color: "yellow"}}/>
                </picture>
                
          </div>
            </Link>
            <Link to={{
                pathname: "/planets"
            }}>
            <div className='to'>
                <h2 className='to-titles'>Planets</h2>
              <picture>
                    <source srcSet='planets.webp' />
                    <img src='planetsAlternative.jpg'  alt='Planets' style={{color: "yellow"}}/>
                </picture>
                
          </div>
            </Link>
            
            
 </section>
     );
}
 
export default GlobalPage;