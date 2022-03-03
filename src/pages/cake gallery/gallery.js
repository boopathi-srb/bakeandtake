import React from 'react'
import classes from './gallery.module.css'
import AOS from 'aos';
import "aos/dist/aos.css"

function Gallery(props) {
  AOS.init({
    delay: 300,
    duration:800,
    offset:100
  });
  const cakeOptions=props.data.cakeOptions.map((item,pos)=>{
    return(
      <div className={classes.wrapper1}  >
        <div  data-aos="zoom-in" data-aos-once="true" className={classes.cakewrapper1}  >
         <img   key={pos} className={classes.productimage} src={item.imageSrc} alt={item.styleName}></img>
         <h1   key={pos}  >{item.styleName}</h1>
         <h3   key={pos}>Rate : {item.Rate}</h3>
        </div>
     </div>
    )
    })
  return (
    <div>
       <h1  className={classes.greeting} data-aos="zoom-in" data-aos-once="true">Cake gallery</h1>
      <div className={classes.cakeoptions}>
       
        {cakeOptions}
     </div>
    </div>
  )
}

export default Gallery