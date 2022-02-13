import React from 'react'
import classes from './contact.module.css'
const Contact = () => {
  return (
    <div className={classes.Contact}>
      <div className={classes.Contact_wrapper}>
        <div className={classes.Contact_rightside}>
          <h1 className={classes.Contact_heading}>Address</h1>
          <p className={classes.content}>
          5/292 E-10 Ajantha Nagar, Kanuvaai, Somayampalayam, Coimbatore, Tamil Nadu - 641108
          </p>
        </div>
        <div className={classes.Contact_leftside}>
        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21111.885272536783!2d76.91770532448437!3d11.02899611810102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba858a0c12ce26b%3A0xba339ace6c657bfc!2sAjantha%20Nagar!5e0!3m2!1sen!2sin!4v1642675566108!5m2!1sen!2sin" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy">Maps</iframe> */}
        </div>
      </div>
    </div>
  )
}
export default Contact