import React from 'react'
import classes from './about.module.css'
import logo from '../../components/topbar/Bake&Take.png'

function About() {
  return (
    <div className={classes.About}>
     
      <div className={classes.About_wrapper}>
        <div className={classes.contentwrapper}>
          <h1 className={classes.About_heading}>About</h1>
          <p className={classes.content}>
            We are home bakers, offering different kinds of cakes. The speciality of our cakes is they are <strong>Eggless</strong>.<br></br>
            We provide home delivery in and around Kanuvai within 6km 
           radius. Delivery charge depends on the distance.<br></br>We offer customized cakes at extra cost. 
         </p>
       </div>
      <div>
         <img className={classes.img} src={logo} alt='BnT-logo'></img>
      </div>
     
      </div>
      
    </div>
  )
}

export default About
