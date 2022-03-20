import React from 'react'
import classes from './about.module.css'
import logo from '../../components/topbar/Bake&Take.png'
import fssai from '../home/fssai.png'
function About() {
  return (
    <div className={classes.About}>
      <div className={classes.About_wrapper}>
        <div className={classes.contentwrapper}  data-aos="zoom-in" data-aos-once="true"> 
          <h1 className={classes.About_heading}>About</h1>
          <article className={classes.content}>
            We are home bakers, offering different kinds of cakes. The speciality of our cakes is they are <strong>Eggless</strong>.<br></br>
            We provide home delivery in and around Kanuvai within 6km 
           radius. Delivery charge depends on the distance.<br></br>We offer customized cakes at extra cost. 
         </article>
        </div>
        <div  data-aos="zoom-in" data-aos-once="true">
          <img className={classes.img} src={logo} alt='BnT-logo'></img>
        </div>
      </div>
      <div className={classes.fssai} data-aos="zoom-in" data-aos-once="true">
        <div className={classes.fssai_wrapper}>
        <h1>We are</h1>
        <img src={fssai} alt='fssai_logo'/>   
        <h1>approved!</h1> 
        </div>
      </div>
    </div>
  )
}

export default About
