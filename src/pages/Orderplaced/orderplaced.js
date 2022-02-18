import React from 'react';
import thumbsup from './thumbsup.png'
import classes from './orderplaced.module.css'
import AOS from 'aos';
function Orderplaced() {
  AOS.init();
  return <div>
    <div  className={classes.Orderplaced}>
    <div  data-aos="zoom-out"data-aos-once="true"  data-aos-delay="400" className={classes.wrapper}>
     
     <img className={classes.thumbsup} src={thumbsup} alt="Order placed"/>
  
     <h1>Order placed!</h1>
     <p>
       Your order has been placed.<br/>
       We will contact you either by call or Mail once the order is confirmed!. <br/>Till then, please wait patiently🤗.
     </p>
     <a href="/"><b>Return to Home</b></a>
    </div>
   </div>
     
  </div>;
}

export default Orderplaced;

