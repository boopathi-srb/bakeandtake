import React from 'react';
import classes from '../footer/footer.module.css'
// import CallIcon from '../footer/Call Icon.png'
import LocationIcon from '../footer/Location icon.png'
// import logo from '../topbar/Bake&Take.png'
import AOS from 'aos';
const Footer = () => {
  AOS.init();
  return (
    <div  className={classes.footer}>
      {/* <div  data-aos="zoom-in"data-aos-once="true" data-aos-offset="50px" className={classes.footer_wrapper1}>
        <div className={classes.footer_innerwrapper1} >
          <img src={logo} alt="logo"/>
        </div>
      </div> */}
      <div  data-aos="zoom-in"data-aos-once="true"  data-aos-offset="50px"  className={classes.footer_wrapper2}>
      <h3 className={classes.footer_heading}>Useful links</h3>
        <div className={classes.footer_links} >
         <a href="/">Home</a>
         <a href="/About">About</a>
         <a href="/Contact">Contact</a>
        </div>
         
       </div>
       <div  data-aos="zoom-in" data-aos-once="true" data-aos-offset="50px"  className={classes.footer_wrapper3}>
         <div className={classes.footer_innerwrapper2}>
         <img  src={LocationIcon} alt='locationicon'/>
         <p>5/292 E-10 Ajantha Nagar, Kanuvai, Somayampalayam, Coimbatore, Tamil Nadu - 641108</p>
           
         </div>
       </div>
      
    </div>
  )
}

export default Footer
