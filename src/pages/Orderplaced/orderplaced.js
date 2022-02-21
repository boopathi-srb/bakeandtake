import React from 'react';
import thumbsup from './thumbsup.png'
import classes from './orderplaced.module.css'
import AOS from 'aos';
import "aos/dist/aos.css"

function Orderplaced() {
  AOS.init({
    delay: 300,
    duration:800,
    offset:100
  });
  return <div  className={classes.Orderplaced}>
    <div className={classes.overlay} ></div>
    <div className={classes.outerwrapper}>
      <div  data-aos="zoom-in" data-aos-once="true"  data-aos-delay="400" className={classes.wrapper}>
     
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

