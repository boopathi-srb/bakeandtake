import React from 'react';
import classes from '../footer/footer.module.css'
import CallIcon from '../footer/Call Icon.png'

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.rightside}>
        <h4 className={classes.footer_heading}>Useful links</h4>
       <div className={classes.footer_links} >
         <a href="/">Home</a>
         <a href="/About">About</a>
         <a href="/Contact">Contact</a>
       </div>
       <div className={classes.leftside}>
         <h4 className={classes.footer_heading}>To order</h4>
         <img className={classes.CallIcon} src={CallIcon} alt='Callicon'/>
         <p>
            +91 80727 51851
         </p>
       </div>
      
      </div>
    </div>
  )
}

export default Footer
