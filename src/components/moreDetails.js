import React from 'react';
import '../assets/css/moreDetails.css';
import {WiBarometer,WiHumidity} from 'react-icons/wi';
import {GiPaperWindmill,GiWindsock,GiSunset,GiSunrise} from 'react-icons/gi';
import {MdVisibility} from 'react-icons/md';
import {IoIosCloud} from 'react-icons/io';
const MoreDetails = props => {
    return (
      <div className="flex-container">
            


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


                <div className="box">
                    <IoIosCloud className="detail-icons"/>
                    <h3 className="catamaran">
                        {
                            props.cloudiness
                        }%</h3><span>&nbsp;&nbsp;</span>
                </div> 
                <br/><span>&nbsp;&nbsp;</span>

                <div className="box">
                    <GiSunset className="detail-icons"/>
                    <h3 className="catamaran">
                        {
                            props.sunset.getHours() +":"+props.sunset.getMinutes() +":" +  props.sunset.getSeconds()
                        }</h3><span>&nbsp;&nbsp;</span>
                </div> 
                <br/><span>&nbsp;&nbsp;</span>
                <div className="box">
         <GiSunrise className="detail-icons"/>
              <h3 className="catamaran">
                  {
                      props.sunrise.getHours() +":"+props.sunset.getMinutes() +":" +  props.sunset.getSeconds()
                  }</h3>
          </div> 
          
        
            </div>
        
            
          
  
    )
}


export default MoreDetails;
