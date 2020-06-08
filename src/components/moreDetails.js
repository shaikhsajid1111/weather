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
                <div className="box ">
                    <h6 className="rubik">Pressure</h6>
                    <h3 className="catamaran">{props.pressure}</h3>
                </div>
                <div className="box">
                <h6 className="rubik">Humidity</h6>
                    <h3 className="catamaran">{props.humidity}</h3>
                </div>
                <div className="box">
                <h6 className="rubik">Visibility</h6>
                    <h3 className="catamaran">{props.visibility}</h3>
                </div>
                <div className="box">
                <h6 className="rubik">Wind Speed</h6>
                    <h3>{props.wind_speed}</h3>
                </div>

            </div>
        </div>
    )
}



export default MoreDetails;