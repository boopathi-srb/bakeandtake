import React from "react";
import classes from './topbar.module.css';
import logo from "./Bake&Take.png";
// import About from "../../pages/About/About";

const Topbar =()=>{
  return(
    <div>
     <div className={classes.topbar}>
       <div>
       </div>
      <img  classname={classes.logo}src={logo} alt="logo"/>
      <div className={classes.rightside}>
       <input type="checkbox" id="toggle_button" className={classes.toggle_button}>
       </input>
       <nav className={classes.topbar_links} >
         <a href="/">Home</a>
         <a href="/Gallery">Gallery</a>
         <a href="/About">About</a>
         <a href="/Contact">Contact</a>
         <a href="/Order">Order</a>
       </nav>
       <label for="toggle_button" className={classes.toggle_button_label}>
         <span></span>
         <p>X</p>
       </label>
      </div>
     </div>
    </div>
  )
}
export default Topbar