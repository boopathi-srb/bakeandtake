import React from 'react';
import classes from '../footer/footer.module.css'
import CallIcon from '../footer/Call Icon.png'
import LocationIcon from '../footer/Location icon.png'

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.footer_wrapper1}>
        <h3 className={classes.footer_heading}>Useful links</h3>
        <div className={classes.footer_links} >
         <a href="/">Home</a>
         <a href="/About">About</a>
         <a href="/Contact">Contact</a>
        </div>
      </div>
      <div className={classes.footer_wrapper2}>
         <h3 className={classes.footer_heading}>To order</h3>
         <div className={classes.footer_innerwrapper1}>
         <img className={classes.CallIcon} src={CallIcon} alt='Callicon'/>
         <p>
            +91 80727 51851
         </p>
         </div>
         
       </div>
       <div className={classes.footer_wrapper3}>
         <div className={classes.footer_innerwrapper2}>
         <img  src={LocationIcon} alt='locationicon'/>
         <p>5/292 E-10 Ajantha Nagar, Kanuvaai, Somayampalayam, Coimbatore, Tamil Nadu - 641108</p>
           
         </div>
       </div>
      
      </div>
  )
}

export default Footer
