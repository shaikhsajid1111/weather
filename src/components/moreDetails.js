import React from 'react';
import '../assets/css/moreDetails.css';

const MoreDetails = props =>{
    return(
        /*
                pressure = "1012"
                humidity = "81"
                visibility = '10000'
                wind_speed = '125'
                wind_deg = '45'
                rain = "Heavy"
                snow = "Heavy"
                cloud = "Ssss"*/ 
        <div>
            <div className="flexbox-container">
                <div className="box">
                    <h6 >Pressure</h6>
                    <h3>{props.pressure}</h3>
                </div>
                <div className="box">
                <h6 >Humidity</h6>
                    <h3>{props.humidity}</h3>
                </div>
                <div className="box">
                <h6 >Visibility</h6>
                    <h3>{props.visibility}</h3>
                </div>
                <div className="box">
                <h6 >Wind Speed</h6>
                    <h3>{props.wind_speed}</h3>
                </div>

            </div>
        </div>
    )
}



export default MoreDetails;