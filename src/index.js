import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import TemperatureContainer from './components/temperatureContainer';
import MoreDetails from './components/moreDetails';
import Particles from 'react-particles-js';
require('dotenv').config();





/*parent component*/
/*
C->F = (celsius*1.8)+32
F->C = (f-32)/1.8
*/

/**http://openweathermap.org/img/w/10d.png */
function App() {

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  const [degreeType, setDegreeType] = useState('');

  console.log(weather)
  const updateForecastDegree = (evt) => {
    setDegreeType(evt.target.value);
  }
  //console.log(degreeType);

  const search = evt => {
    if (evt.key == "Enter") {
      /**/

      if (query != '' && degreeType != '') {
        try {
          fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${process.env.REACT_APP_API_KEY_3}`)
            .then(res => res.json())
            .then(result => {

              setWeather(result);

              setQuery('');

            })
        } catch (error) {
          console.log("error" + error)
        }



      }
    }




  }
  
  //{console.log(weather.main)}
  if (weather.main == undefined || weather.cod === '404') {
    return (


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


        } />
        <div className="search-box ">

          <input
            autoFocus
            type="text"
            className="search-bar"
            placeholder="Search City"
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
            title = "Enter City"
            required
          /><br></br><br></br>

          <div className="units catamaran">
            <input type="radio" title="Convert in farenheit" name="degree" value="farenheit" onChange={updateForecastDegree} required />Farenheit<br />
            <input type="radio" title="Convert in celsius" name="degree" value="celsius" onChange={updateForecastDegree} /> Celsius
        </div>

        </div>
      </div>

    )
  }

  if (weather.main != undefined) {
    return (
      
      
      <div >
        
        
        
        {   (weather.main.temp < 16) ? (<Particles id="particles" params={

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

} />): (
         <Particles id="particles" params={
           
          {
            "particles": {
              "number": {
                "value": 1,
                "density": {
                  "enable": true,
                  "value_area": 800
                }
              },
              "color": {
                "value": "#ededed"
              },
              "shape": {
                "type": "circle",
                "stroke": {
                  "width": 0,
                  "color": "#000"
                },
                "polygon": {
                  "nb_sides": 6
                },
                "image": {
                  "src": "img/github.svg",
                  "width": 100,
                  "height": 100
                }
              },
              "opacity": {
                "value": 0.04008530152163807,
                "random": true,
                "anim": {
                  "enable": false,
                  "speed": 1,
                  "opacity_min": 0.1,
                  "sync": false
                }
              },
              "size": {
                "value": 80.17060304327615,
                "random": false,
                "anim": {
                  "enable": true,
                  "speed": 10,
                  "size_min": 40,
                  "sync": false
                }
              },
              "line_linked": {
                "enable": false,
                "distance": 200,
                "color": "#ffffff",
                "opacity": 0.7,
                "width": 2
              },
              "move": {
                "enable": true,
                "speed": 8,
                "direction": "none",
                "random": false,
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
                  "mode": "repulse"
                },
                "onclick": {
                  "enable": true,
                  "mode": "push"
                },
                "resize": true
              },
              "modes": {
                "grab": {
                  "distance": 400,
                  "line_linked": {
                    "opacity": 1
                  }
                },
                "bubble": {
                  "distance": 400,
                  "size": 40,
                  "duration": 2,
                  "opacity": 0.8,
                  "speed": 3
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
        )}
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search City"
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}

          />
          <br></br><br></br>
          <div className="units catamaran">
            <input type="radio" name="degree" value="farenheit" onChange={updateForecastDegree} />Farenheit<br />
            <input type="radio" name="degree" value="celsius" onChange={updateForecastDegree} /> Celsius
        </div>
        </div>

        <div className="row">
        <TemperatureContainer
        className="column"
          city={weather.name}
          degreeType={degreeType}
          temp={(degreeType == "celsius") ? Math.round(weather.main.temp) : Math.round((weather.main.temp * 1.8) + 32)}
          main={weather.weather[0].description}
          description={weather[0]}
          temp_min= {(degreeType == "celsius") ? Math.round(weather.main.temp_min) : Math.round((weather.main.temp_min * 1.8) + 32) }
          temp_max={(degreeType == "celsius") ? Math.round(weather.main.temp_max) : Math.round((weather.main.temp_max * 1.8) + 32) }
          country={weather.sys.country}
          date={new Date(weather.dt * 1000)}

          feelslike={(degreeType == "celsius") ? Math.round(weather.main.feels_like) : Math.round((weather.main.feels_like * 1.8) + 32)}
          icons={weather.weather[0].id}
        />

        <MoreDetails
        className="column moreDetail"
          degreeType = {degreeType}
          pressure={weather.main.pressure}
          humidity={weather.main.humidity}
          visibility={weather.visibility}
          wind_speed={(degreeType == "celsius") ? weather.wind.speed : parseFloat(weather.wind.speed*0.00062137).toFixed(3)}
          wind_deg={weather.wind.deg}
          cloudiness = {weather.clouds.all}
          sunset = {new Date(weather.sys.sunset * 1000)}
          sunrise = {new Date(weather.sys.sunrise * 1000)}

        />
</div>
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
ReactDOM.render(<App />, document.getElementById('root'));