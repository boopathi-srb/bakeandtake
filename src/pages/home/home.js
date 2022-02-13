import React from 'react'
import flyer from '../../Bake&Take-home.png';
import classes from './home.module.css';
import AOS from 'aos';


const Home=(props)=> {
  AOS.init({
    delay: 500
  });
  const offerings=props.data.offerings.map((item,pos)=>{
    return(
      <h5 data-aos="zoom-in-up" data-aos-once="true" key={pos}  >{item.offerings}</h5>
    )
  });
  const cakeOptions=props.data.cakeOptions.map((item,pos)=>{
    const classArr=[classes.productimage]
    if (pos===0 || pos%2===0
      ) {
    return(
      <div  className={classes.wrapper1}>
        <div className={classes.cakewrapper1}>
         <div className={classes.cakepreview}>
            <img  data-aos="zoom-in-up" data-aos-once="true" key={pos} className={classArr.join(' ')} src={item.imageSrc} alt={item.styleName}></img>
         </div>
        </div>
       
        <div   className={classes.cakename}>
         <h1  data-aos="zoom-in-up" data-aos-once="true" key={pos}  >{item.styleName}</h1>
         <h3  data-aos="zoom-in-up" data-aos-once="true" key={pos}>Rate : {item.Rate}</h3>
        </div>
     </div>

    )
    }else{
      return(
        <div  className={classes.wrapper2}>
        <div className={classes.cakename}>
         <h1  data-aos="zoom-in-up" data-aos-once="true" key={pos}>{item.styleName}</h1>
         <h3  data-aos="zoom-in-up" data-aos-once="true" key={pos}>Rate : {item.Rate}</h3>
        </div>
        <div className={classes.cakewrapper2}>
        <div className={classes.cakepreview}>
          <img  data-aos="zoom-in-up" data-aos-once="true" key={pos} className={classArr.join(' ')} src={item.imageSrc} alt={item.styleName}></img>
        </div>
        </div>
        
     </div>
      )
     
    }
    
    })
   
  return (
    <div className={classes.Home}>
      <div data-aos="zoom-in-up" data-aos-once="true" >
        <img className={classes.flyer} src={flyer} alt='BnT-flyer'></img>
      </div>
      <div  data-aos="zoom-in-up" data-aos-once="true" className={classes.greetingwrapper}>
        <h1 className={classes.greeting}>Home Baked!</h1>
      </div>
      <div className={classes.cakeoptions}>
        {cakeOptions}
      </div>
      <div   className={classes.offerings_wrapper}>
        <h1 data-aos="zoom-in-up" data-aos-once="true" className={classes.greeting}>Our offerings</h1>
        <div className={classes.typography}>
          {offerings}
        </div>
      </div>
      </div>
     
  );

}
  
export default Home
