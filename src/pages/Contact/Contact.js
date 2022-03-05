import React from 'react'
import classes from './contact.module.css'
import AOS from 'aos';
import "aos/dist/aos.css"

const Contact = () => {
  AOS.init({
    delay: 300,
    duration:800,
    offset:100
  });
  return (
    <div className={classes.Contact}>
      <div className={classes.Contact_wrapper}>
        <div className={classes.Contact_rightside} data-aos="zoom-in" data-aos-once="true">
          <h1 className={classes.Contact_heading}>Address</h1>
          <p className={classes.content}>
          5/292 E-10 Ajantha Nagar, Kanuvai, Somayampalayam, Coimbatore, Tamil Nadu - 641108
          </p>
        </div>
      </div>
      <div className={classes.Contact_wrapper1}>
        <div className={classes.Contact_innerwrapper1} data-aos="zoom-in" data-aos-once="true">
          <h1 className={classes.Contact_heading}>Mail</h1>
          <h5 className={classes.content}>bakentake31@gmail.com</h5>
        </div>
        <div className={classes.Contact_innerwrapper1} data-aos="zoom-in" data-aos-once="true">
          <h1 className={classes.Contact_heading}>Contact</h1>
          <h5 className={classes.content}>+91 8072751851</h5>
        </div>
       
      </div>
    </div>
  )
}
export default Contact