import React from 'react';
import  '../pages/Profile.css';
import Profileimg from '../images/ProfileMan.jpg';
import starone from '../images/star1.png';
import startwo from '../images/star2.png';
import starthree from '../images/star3.png';
import starfour from '../images/star4.png';

function Profile(){
    return(

    <div class="container4">
        <h6 class="proh6">What our Customer say</h6>
        <div class="profile">
        <img src={Profileimg} alt='image'/>
        </div>
        <div class="star">
        <img src={starone} alt='image'/>
        <img src={startwo} alt='image'/> 
        <img src={starthree} alt='image'/>
        <img src={starfour} alt='image'/>
        </div>
        <p>AMAN SINGH</p>
        <p class="pprofile">
            Lorem ipsum dolor sit amet, consecteture adipiscing elit,sed<br></br>diam nonummy nibh euismod tinciduunt ut laoreet dolore magna
        </p>   
    </div>
    );
}
export default Profile