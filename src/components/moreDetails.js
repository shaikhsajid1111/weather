import React from 'react';
import '../assets/css/moreDetails.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import {WiBarometer,WiHumidity} from 'react-icons/wi';
import {GiPaperWindmill,GiWindsock} from 'react-icons/gi';
import {MdVisibility} from 'react-icons/md';
const MoreDetails = props => {
    return (
        /*
                pressure = "1012"
                humidity = "81"
                visibility = '10000'
                wind_speed = '125'
                wind_deg = '45'
                rain = "Heavy"
                snow = "Heavy"
                cloud = "Ssss"
                
                */ <div className="flex-container">
            


                <div className="box">
                <WiBarometer className="detail-icons"/>
                    <h3 className="catamaran">
                        {
                            props.pressure
                        }Pa</h3><span>&nbsp;&nbsp;</span>
                </div>
                <br/><span>&nbsp;&nbsp;</span>
                 
                <div className="box">
                <WiHumidity className="detail-icons"/>
                    <h3 className="catamaran">
                        {
                            props.humidity
                        }%</h3><span>&nbsp;&nbsp;</span>
                </div>
                <br/><span>&nbsp;&nbsp;</span>

                <div className="box">
                    <MdVisibility className="detail-icons"/>
                    <h3 className="catamaran">
                        {
                            props.visibility
                        }m</h3><span>&nbsp;&nbsp;</span>
                </div> 
                <br/><span>&nbsp;&nbsp;</span>
                <div className="box"> {/*<h6 className="rubik">Wind Speed</h6>*/}
                    <GiPaperWindmill className="detail-icons"/>
                    <h3 className="catamaran">
                        {
                            props.wind_speed
                        }
                        {
                            (props.degreeType == "celsius") ? 'm/s' : 'mi/h'
                        }</h3><span>&nbsp;&nbsp;</span>
                </div> <br/><span>&nbsp;&nbsp;</span>
                <div className="box">
                    <GiWindsock className="detail-icons"/>
                    <h3 className="catamaran">
                        {
                            props.wind_deg
                        }&#176;</h3><span>&nbsp;&nbsp;</span>
                </div> 
                <br/><span>&nbsp;&nbsp;</span>
            </div>

  
    )
}


export default MoreDetails;
