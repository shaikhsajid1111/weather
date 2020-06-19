import React from 'react';
import '../assets/css/footer.css';
import {AiFillHeart} from 'react-icons/ai';
import {BsDot} from 'react-icons/bs';
const Footer = () =>{
    return(
    <div className="footer-container">
        <p><BsDot/> Powered by <b>Openweathermap</b></p>
        <p>Made with <AiFillHeart className="heart" /> by <b>Sajid</b></p>
        </div>)
}


export default  Footer; 