import React from 'react'
import flyer from '../../Bake&Take-home.png';
import classes from './home.module.css';
import AOS from 'aos';
import "aos/dist/aos.css"


const Home=(props)=> {
  AOS.init({
    delay: 300,
    duration:800,
    offset:100
  });
  const offerings=props.data.offerings.map((item,pos)=>{
    return(
      <h5 data-aos="zoom-in-up" data-aos-once="true"  key={pos}  >{item.offerings}</h5>
    )
  });
  const cakeOptions=props.data.cakeOptions.map((item,pos)=>{
    return(
      <div className={classes.wrapper1} >
        <div className={classes.cakewrapper1}  >
         <img   key={pos} className={classes.productimage} src={item.imageSrc} alt={item.styleName}></img>
         <h1   key={pos}  >{item.styleName}</h1>
         <h3   key={pos}>Rate : {item.Rate}</h3>
        </div>
     </div>
    )
    })
   
  return (
    <div className={classes.Home}>
      <div data-aos="zoom-in-up" data-aos-once="true" >
        <img className={classes.flyer} src={flyer} alt='BnT-flyer'></img>
      </div>
      <div className={classes.greetingwrapper} data-aos="zoom-in-up" data-aos-once="true" >
        <h1 className={classes.heading} >Home Baked<br/>&<br/>Eggless</h1>
        <p>Experience the unique taste of the home baked cakes..! </p>
      </div>
      <div className={classes.cakeoptions}>
         <h1  className={classes.greeting} ata-aos="zoom-in-up" data-aos-once="true">Cake gallery</h1>
         {cakeOptions}
      </div>
      <div   className={classes.offerings_wrapper}>
        <h1  data-aos="zoom-in-up" data-aos-once="true"  className={classes.greeting}>Our offerings</h1>
        <div className={classes.typography}>
          {offerings}
        </div>
      </div>
      </div>
     
  );

}
  
export default Home
