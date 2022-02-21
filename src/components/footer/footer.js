import React from 'react';
import classes from '../footer/footer.module.css'
// import CallIcon from '../footer/Call Icon.png'
import LocationIcon from '../footer/Location icon.png'
import logo from './instagram.png'
import AOS from 'aos';
import "aos/dist/aos.css"

const Footer = () => {
  AOS.init({
    delay: 300,
    duration:800,
    offset:100
  });
  return (
    <div  className={classes.footer}>
      <div  data-aos="zoom-in"data-aos-once="true"  data-aos-offset="50px"  className={classes.footer_wrapper1}>
        <h3 className={classes.footer_heading}>Useful links</h3>
        <div className={classes.footer_links} >
         <a href="/">Home</a>
         <a href="/About">About</a>
         <a href="/Contact">Contact</a>
        </div>
      </div>
      <div  data-aos="zoom-in"data-aos-once="true" data-aos-offset="50px" className={classes.footer_wrapper2}>
        <div className={classes.footer_innerwrapper1} >
        <h3 className={classes.footer_heading}>Social media</h3>
          <a  href="https://www.instagram.com/bake._.n_take/" >
             <img src={logo} alt="logo"/>
          </a>
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
