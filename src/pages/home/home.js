import React from 'react'
import classes from './home.module.css';
import logo from '../../components/topbar/Bake&Take.png'
import fssai from './fssai.png'
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
      <main >
        <img data-aos="zoom-in" data-aos-once="true"  className={classes.flyer} src={logo} alt='BnT-flyer'></img>
        <mark data-aos="zoom-in" data-aos-once="true">Bake N' Take</mark>
      </main>

      <section className={classes.greetingwrapper} data-aos="zoom-in" data-aos-once="true" >
        <h1 className={classes.heading} >Home Baked<br/>&<br/>Eggless</h1>
        <p>Experience the unique taste of the home baked cakes..! </p>
      </section>

      <div className={classes.cake_gallery} data-aos="zoom-in" data-aos-once="true">
        <h1 className={classes.heading}>Wanna see the cake gallery?</h1>
        <a href='/gallery'>View cake gallery.....</a>
      </div>

      <div className={classes.fssai} data-aos="zoom-in" data-aos-once="true">
        <div className={classes.fssai_wrapper}>
        <h1 className={classes.heading}>We are</h1>
        <img src={fssai} alt='fssai_logo'/>   
        <h1 className={classes.heading}>approved!</h1> 
        </div>
        <div className={classes.fssai_btn}>
          <a href='./about'>See more about us...</a>
        </div>
      </div>
       
      <div className={classes.home_order} data-aos="zoom-in" data-aos-once="true">
       <h2 className={classes.heading}>Mouth watering right?<br/>Order now</h2>
       <a href='./order'>Order here!</a>
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
