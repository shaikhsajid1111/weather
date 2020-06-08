import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import TemperatureContainer from './components/temperatureContainer';
import MoreDetails from './components/moreDetails';
import Particles from 'react-particles-js';
require('dotenv').config();





/*parent component*/
/**http://openweathermap.org/img/w/10d.png */
 function App(){

    const [query,setQuery] = useState('');
    const [weather,setWeather] = useState({});
            const search = evt =>{
                if(evt.key == "Enter"){
                    /*ee6596241130f193adf1ba90e625cc10*/
                    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=886705b4c1182eb1c69f28eb8c520e20`)
                    .then(res=>res.json())
                    .then(result=>{
                        setWeather(result);
                        setQuery('');
                        console.log(result);
                    })
                }
            } 
      {console.log(weather.main)}
      if(weather.main == undefined){
            return(
        

              <div>
                <Particles id="particles" params={
                
                {
                  "particles": {
                    "number": {
                      "value": 190,
                      "density": {
                        "enable": true,
                        "value_area": 800
                      }
                    },
                    "color": {
                      "value": "#fff"
                    },
                    "shape": {
                      "type": "circle",
                      "stroke": {
                        "width": 0,
                        "color": "#000000"
                      },
                      "polygon": {
                        "nb_sides": 4
                      },
                      "image": {
                        "src": "img/github.svg",
                        "width": 100,
                        "height": 100
                      }
                    },
                    "opacity": {
                      "value": 0.15782952832645453,
                      "random": true,
                      "anim": {
                        "enable": false,
                        "speed": 0.5,
                        "opacity_min": 0.1,
                        "sync": false
                      }
                    },
                    "size": {
                      "value": 3.5,
                      "random": true,
                      "anim": {
                        "enable": false,
                        "speed": 15,
                        "size_min": 0.1,
                        "sync": false
                      }
                    },
                    "line_linked": {
                      "enable": false,
                      "distance": 500,
                      "color": "#ffffff",
                      "opacity": 0.4,
                      "width": 2
                    },
                    "move": {
                      "enable": true,
                      "speed": 2.017060304327615,
                      "direction": "bottom-left",
                      "random": true,
                      "straight": false,
                      "out_mode": "out",
                      "bounce": false,
                      "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                      }
                    }
                  },
                  "interactivity": {
                    "detect_on": "canvas",
                    "events": {
                      "onhover": {
                        "enable": true,
                        "mode": "bubble"
                      },
                      "onclick": {
                        "enable": true,
                        "mode": "repulse"
                      },
                      "resize": true
                    },
                    "modes": {
                      "grab": {
                        "distance": 200,
                        "line_linked": {
                          "opacity": 0.5
                        }
                      },
                      "bubble": {
                        "distance": 400,
                        "size": 2,
                        "duration": 0.3,
                        "opacity": 0.5,
                        "speed": 1
                      },
                      "repulse": {
                        "distance": 200,
                        "duration": 0.4
                      },
                      "push": {
                        "particles_nb": 4
                      },
                      "remove": {
                        "particles_nb": 2
                      }
                    }
                  },
                  "retina_detect": true
                }
                
                
                }/>
        <div className="search-box">
           
          <input 
          autoFocus
            type="text"
            className="search-bar"
            placeholder="Search City"
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        </div>
        
      )            
    }
    
    
    if(weather.main != undefined){
      return(
                
                <div className={(weather.main.temp > 16) ? 'warm' : 'normal'}>
                 <Particles id="particles" params={

{
  "particles": {
    "number": {
      "value": 190,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#fff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 4
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.15782952832645453,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 0.5,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3.5,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 15,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 500,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 2
    },
    "move": {
      "enable": true,
      "speed": 2.017060304327615,
      "direction": "bottom-left",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "bubble"
      },
      "onclick": {
        "enable": true,
        "mode": "repulse"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 200,
        "line_linked": {
          "opacity": 0.5
        }
      },
      "bubble": {
        "distance": 400,
        "size": 2,
        "duration": 0.3,
        "opacity": 0.5,
        "speed": 1
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}


                 }/>
                 <div className="search-box">
          <input 
            type="text"
            className="search-bar"
            placeholder="Search City"
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
            
          />
        </div>
       

        <TemperatureContainer 
                    city = {weather.name}
                    temp = { Math.round(weather.main.temp)}
                    main= {weather.weather[0].description}
                    description = {weather[0]}
                    temp_min = {weather.main.temp_min}
                    temp_max = {weather.main.temp_max}
                    country = {weather.sys.country}
                    date = {new Date()}
                    
                    feelslike = {weather.main.feels_like}
                    icons = {weather.weather[0].icon}
                    />
                    {console.log(weather)}
        <MoreDetails
                pressure = {weather.main.pressure}
                humidity = {weather.main.humidity}
                visibility = {weather.visibility}
                wind_speed = {weather.wind.speed}
                wind_deg = {weather.main.deg}
                rain = "Heavy"
                snow = "Heavy"
                cloud = "Ssss"
                        
                
                />
                
                 </div>
                
            )
                }
 }

 /*
 {lat, lon, alt_m, alt_ft, wx_desc, wx_code, wx_icon, temp_c, temp_f, feelslike_c, feelslike_f, humid_pct, windspd_mph,
     windspd_kmh, windspd_kts, windspd_ms,
     winddir_deg, winddir_compass, 
     cloudtotal_pct, vis_km, vis_mi, vis_desc, slp_mb, slp_in, dewpoint_c, dewpoint_f})
 */ 
ReactDOM.render(<App/>,document.getElementById('root'));