import React from 'react'
import classes from './about.module.css'
import logo from '../../components/topbar/Bake&Take.png'

function About() {
  return (
    <div className={classes.About}>
      <h1 className={classes.About_heading}>About</h1>
      <div className={classes.About_wrapper}>
      <p className={classes.content}>
        <span>       </span>We are home bakers, offering different kinds of cakes. The speciality of our cakes is they are <strong>Eggless</strong>. 
        We provide home delivery in and around Kanuvai within 6km 
        radius. Delivery charge depends on the distance.<br></br>We offer customized cakes at extra cost. 
      </p>
      <img src={logo} alt='BnT-logo'></img>
      </div>
      
    </div>
  )
}

export default About
