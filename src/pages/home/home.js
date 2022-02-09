import React from 'react'
import flyer from '../../Bake&Take-home.png';
import classes from './home.module.css';
import AOS from 'aos';


const Home=(props)=> {
  AOS.init();
  const cakeOptions=props.data.cakeOptions.map((item,pos)=>{
    const classArr=[classes.productimage]
    console.log(pos);
    if (pos===0 || pos%2===0
      ) {
    return(
      <div className={classes.wrapper1}>
        <div className={classes.cakewrapper1}>
         <div  className={classes.cakepreview}>
            <img  data-aos="zoom-in-up" data-aos-once="true"key={pos} className={classArr.join(' ')} src={item.imageSrc} alt={item.styleName}></img>
         </div>
        </div>
       
        <div  className={classes.cakename}>
         <h1 data-aos="zoom-in-up" data-aos-once="true">{item.styleName}</h1>
         <h3 data-aos="zoom-in-up" data-aos-once="true">Rate : {item.Rate}</h3>
        </div>
     </div>

    )
    }else{
      return(
        <div className={classes.wrapper2}>
        <div className={classes.cakename}>
         <h1 data-aos="zoom-in-up" data-aos-once="true">{item.styleName}</h1>
         <h3 data-aos="zoom-in-up" data-aos-once="true">Rate : {item.Rate}</h3>
        </div>
        <div  className={classes.cakewrapper2}>
        <div  className={classes.cakepreview}>
          <img data-aos="zoom-in-up" data-aos-once="true" key={pos} className={classArr.join(' ')} src={item.imageSrc} alt={item.styleName}></img>
        </div>
        </div>
        
     </div>
      )
     
    }
    })
  return (
    <div className={classes.Home}>
      <div data-aos="zoom-in-up" data-aos-once="true">
        <img className={classes.flyer} src={flyer} alt='BnT-flyer'></img>
      </div>
      <div  data-aos="zoom-in-up"data-aos-once="true" className={classes.greetingwrapper}>
        <h1 className={classes.greeting}>Home Baked!</h1>
      </div>
      <div >
        {cakeOptions}
      </div>
      <div   className={classes.offerings_wrapper}>
        <h1 data-aos="zoom-in-up"data-aos-once="true" className={classes.greeting}>Our offerings</h1>
        <p className={classes.typography}>
          <h5 data-aos="zoom-in-up"data-aos-once="true" >Vannila</h5>
          <h5 data-aos="zoom-in-up"data-aos-once="true" > Chocolate</h5>
          <h5 data-aos="zoom-in-up"data-aos-once="true" >Blackforest</h5>
          <h5 data-aos="zoom-in-up"data-aos-once="true" >Whiteforest</h5>
          <h5 data-aos="zoom-in-up"data-aos-once="true" >Butterscotch</h5>
          <h5 data-aos="zoom-in-up"data-aos-once="true" >Red Velvet</h5>
          <h5 data-aos="zoom-in-up" data-aos-once="true">Choco Truffle</h5>
          <h5 data-aos="zoom-in-up" data-aos-once="true">Pineapple</h5>
          <h5 data-aos="zoom-in-up" data-aos-once="true">Rosemilk</h5>
          <h5 data-aos="zoom-in-up" data-aos-once="true">Rasamalai</h5>
          <h5 data-aos="zoom-in-up" data-aos-once="true">Fresh fruit gateaux</h5>
          <h5 data-aos="zoom-in-up" data-aos-once="true">Orange creamsicle</h5>
          <h5 data-aos="zoom-in-up" data-aos-once="true">Cup cakes</h5>
          <h5 data-aos="zoom-in-up" data-aos-once="true">Theme cakes</h5>

           <h5 data-aos="zoom-in-up"data-aos-once="true" >Cookies!</h5>
          
        
        </p>
      </div>
      </div>
     
  );

}
  
export default Home
