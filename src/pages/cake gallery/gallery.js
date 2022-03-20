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
        <figure  data-aos="zoom-in" data-aos-once="true" className={classes.cakewrapper1}  >
         <img   key={pos} className={classes.productimage} src={item.imageSrc} alt={item.styleName}></img>
         <figcaption   key={pos}  >{item.styleName}</figcaption>
         <h3   key={pos}>Rate : {item.Rate}</h3>
         <a href="/order">Order</a>
        </figure>
     </div>
    )
    })
  return (
    <div className={classes.Gallery}>
       <h1  className={classes.greeting} data-aos="zoom-in" data-aos-once="true">Cake gallery</h1>
      <div className={classes.cakeoptions}>
       
        {cakeOptions}
     </div>
    </div>
  )
}

export default Gallery