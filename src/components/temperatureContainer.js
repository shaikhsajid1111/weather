import React from 'react';
import '../assets/css/temperatureContainer.css';




const TemperatureContainer= (props) =>{
    var date = new Date(Number(props.date));
    var fullDate = date.toDateString();
    return(
    <div>
        <h1 className="text-center catamaran">{props.city},{props.country}</h1>
    <h3 className='rubik text-center'>{fullDate}</h3>
        <div className="container">

            
            <h1 id="temperature">{props.temp}<sup>°<small>C</small></sup></h1>
                
        </div>
       
        <div>
        <h2 className="text-center catamaran">{props.main}</h2>
        </div>
        <div>
    <h2 className="text-center catamaran">{props.temp_min}<sup>°<small>C</small></sup>/{props.temp_max}<sup>°<small>C</small></sup></h2>
        </div>      
    </div>
    )}

export default TemperatureContainer;