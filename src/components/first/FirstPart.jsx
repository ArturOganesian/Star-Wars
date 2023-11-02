import { current } from '@reduxjs/toolkit';
import { getPersons } from '../../slices/firstPageSlice';
import './characters.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import uniqid from 'uniqid';



const FirstPart = () => {
 
 
    const dispatch = useDispatch();
    const persons = useSelector((state) => state?.persons?.persons)
    let currentPage = useSelector((state) => state?.persons?.currentPage)
  console.log(persons)
    
    persons.map((elem) => {
       console.log(elem)
   })
    const click2 = () => {
        dispatch(getPersons(currentPage + 1))
         
    }
  
  
    return ( 
        <>

              
              <button onClick={() => {dispatch(getPersons(currentPage))}}>default</button>
              <button onClick={click2}>next</button>
        
         
         
             <section className="first-part-global-container">
        
            
                {persons.map((person,index) => (
           <div key={uniqid()} className='characters-1'>
               
               <div className='character'>
               <span>{person[index + 1]?.results.name}</span>
                  <img src={`https://starwars-visualguide.com/assets/img/characters/${ index + 1}.jpg`}/> 
               </div>
           </div>
           
       ))}
          
            </section>
         
         
        </>
       
     );
}
 

export default FirstPart;