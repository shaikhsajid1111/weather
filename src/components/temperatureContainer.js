import React from 'react';
import '../assets/css/temperatureContainer.css';


const TemperatureContainer = (props) => {




    const months = [
        "Jan",
        "Feb",
        "Mar",
        "April",
        "Mar",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ];
    const weekdays = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ]
    var temperature = props.temp;
    const icon = `owf owf-${props.icons} owf-5x`





    return (


        <div className="card">
            <h1 className="text-center catamaran">
                {
                    props.city
                },{
                    props.country
                }</h1>
            <h3 className='rubik text-center'>
                {
                    months[props.date.getMonth()]
                }
                <span> </span>

                {
                    props.date.getDate()
                } ,{
                    props.date.getFullYear()
                }, {
                    weekdays[props.date.getDay()]
                }</h3>
                <div className="image-container">
            <i className={icon}></i>
            </div>
                       <div className="container">


                <h1 id="temperature">
             {
                        temperature
                    }
                    <sup><small> {(props.degreeType == "celsius") ? '°C' : '°F'}      </small>


                       </sup>
                </h1>

                <br />




            </div>
            <h3 className="catamaran text-center">Feels like <sup>{props.feelslike}{(props.degreeType == "celsius") ? '°C' : '°F'}</sup></h3>
            <div>

                <h2 className="text-center catamaran">
                    {
                        props.main
                    }</h2>
            </div>
            <div>
                <h2 className="text-center catamaran">
                    {
                        props.temp_min
                    }
                    <sup>
                        <small>
                            {(props.degreeType == "celsius") ? '°C' : '°F'}
                        </small>
                    </sup>/{
                        props.temp_max
                    }
                    <sup>
                        <small>{(props.degreeType == "celsius") ? '°C' : '°F'}
                        </small>
                    </sup>
                </h2>
            </div>
        </div>


    )
}

export default TemperatureContainer;
