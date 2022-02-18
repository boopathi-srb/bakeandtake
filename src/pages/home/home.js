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
      <h5 d data-aos="zoom-in"data-aos-once="true" data-aos-offset="50px" key={pos}  >{item.offerings}</h5>
    )
  });
  const cakeOptions=props.data.cakeOptions.map((item,pos)=>{
    const classArr=[classes.productimage]
    if (pos===0 || pos%2===0
      ) {
    return(
      <div  data-aos="zoom-in"data-aos-once="true" data-aos-offset="50px" className={classes.wrapper1}>
        <div className={classes.cakewrapper1}>
         <div className={classes.cakepreview}>
            <img   key={pos} className={classArr.join(' ')} src={item.imageSrc} alt={item.styleName}></img>
         </div>
        </div>
       
        <div   className={classes.cakename}>
         <h1   key={pos}  >{item.styleName}</h1>
         <h3   key={pos}>Rate : {item.Rate}</h3>
        </div>
     </div>

    )
    }else{
      return(
        <div  data-aos="zoom-in"data-aos-once="true" data-aos-offset="50px" className={classes.wrapper2}>
        <div className={classes.cakename}>
         <h1  key={pos}>{item.styleName}</h1>
         <h3  key={pos}>Rate : {item.Rate}</h3>
        </div>
        <div className={classes.cakewrapper2}>
        <div className={classes.cakepreview}>
          <img   key={pos} className={classArr.join(' ')} src={item.imageSrc} alt={item.styleName}></img>
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
        <h1 className={classes.heading}>Home Baked<br/>&<br/>Eggless</h1>
        <p>Experience the unique taste of the home baked cakes..! </p>
      </div>
      <div className={classes.cakeoptions}>
        <div>
         <h1  data-aos="zoom-in"data-aos-once="true" data-aos-offset="50px" className={classes.greeting}>Cake gallery</h1>
        </div>
     
      {cakeOptions}
      </div>
      <div   className={classes.offerings_wrapper}>
        <h1  data-aos="zoom-in"data-aos-once="true" data-aos-offset="50px" className={classes.greeting}>Our offerings</h1>
        <div className={classes.typography}>
          {offerings}
        </div>
      </div>
      </div>
     
  );

}
  
export default Home
