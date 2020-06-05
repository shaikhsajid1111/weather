import React,{useState} from 'react';
import ReactDOM from 'react-dom';

import './assets/css/index.css';
import TemperatureContainer from './components/temperatureContainer';
require('dotenv').config();




/*parnts component*/

 function App(){

    const [query,setQuery] = useState('');
    const [weather,setWeather] = useState('');
            const search = evt =>{
                if(evt.key == "Enter"){
                    console.log(process.env.API_KEY)
                    //fetch(`http://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${process.env.REACT_APP_API_KEY}`)
                    .then(res=>res.json())
                    .then(result=>{
                        setWeather(result);
                        setQuery('');
                        console.log(result);
                    })
                }
            } 
            
            
            
            
                   return(
                
                <div>


        <div className="search-box">
          <input 
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        {console.log()}
        <TemperatureContainer 
                    city = "Mumbai"
                    temp = '26'
                    main='Drizzle'
                    description = "light intensity drizzle"
                    pressure = "1012"
                    humidity = "81"
                    temp_min = '289'
                    temp_max = '355'
                    visibility = '10000'
                    wind_speed = '125'
                    wind_deg = '45'
                    country = "India"
                    rain = "Heavy"
                    snow = "Heavy"
                    cloud = "Ssss"
                    date = '1485792967'
                    />
                
                 </div>
                
            )

 }

 /*
 {lat, lon, alt_m, alt_ft, wx_desc, wx_code, wx_icon, temp_c, temp_f, feelslike_c, feelslike_f, humid_pct, windspd_mph,
     windspd_kmh, windspd_kts, windspd_ms,
     winddir_deg, winddir_compass, 
     cloudtotal_pct, vis_km, vis_mi, vis_desc, slp_mb, slp_in, dewpoint_c, dewpoint_f})
 */ 
ReactDOM.render(<App/>,document.getElementById('root'));