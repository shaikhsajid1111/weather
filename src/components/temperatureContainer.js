import React from 'react';
import '../assets/css/temperatureContainer.css';




const TemperatureContainer= (props) =>{
    const months = ["Jan","Feb","Mar","April","Maty","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    const weekdays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
    const icon = `http://openweathermap.org/img/w/${props.icons}.png`
    return(
    <div>
        <h1 className="text-center catamaran">{props.city},{props.country}</h1>
    <h3 className='rubik text-center'> {months[props.date.getMonth()]} {props.date.getDate()},{props.date.getFullYear()}, { weekdays[props.date.getDay()] }</h3>
    <div className="image-container">
        
        </div>
        <div className="container">

            
            <h1 id="temperature">{props.temp}<sup>°<small>C</small><img className="icon" src={icon}/></sup></h1>
    
                
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