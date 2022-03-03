import React from 'react'
import flyer from '../../Bake&Take-home.png';
import classes from './home.module.css';
import AOS from 'aos';
import "aos/dist/aos.css"


function Home(props) {
  AOS.init({
    delay: 300,
    duration:800,
    offset:100
  });
  const offerings=props.data.offerings.map((item,pos)=>{
    return(
      <h5 data-aos="zoom-in" data-aos-once="true"  key={pos}  >{item.offerings}</h5>
    )
  });
   
  return (
    <div className={classes.Home}>
      <div >
        <img data-aos="zoom-in" data-aos-once="true"  className={classes.flyer} src={flyer} alt='BnT-flyer'></img>
      </div>
      <div className={classes.greetingwrapper} data-aos="zoom-in" data-aos-once="true" >
        <h1 className={classes.heading} >Home Baked<br/>&<br/>Eggless</h1>
        <p>Experience the unique taste of the home baked cakes..! </p>
      </div>
      
      <div   className={classes.offerings_wrapper}>
        <h1  data-aos="zoom-in" data-aos-once="true"  className={classes.greeting}>Our offerings</h1>
        <div className={classes.typography}>
          {offerings}
        </div>
      </div>
      </div>
     
  );

}
  
export default Home
