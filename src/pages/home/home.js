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
            <img  data-aos="zoom-in-up" key={pos} className={classArr.join(' ')} src={item.imageSrc} alt={item.styleName}></img>
         </div>
        </div>
       
        <div  className={classes.cakename}>
         <h1 data-aos="zoom-in-up">{item.styleName}</h1>
         <h3 data-aos="zoom-in-up">Rate : {item.Rate}</h3>
        </div>
     </div>

    )
    }else{
      return(
        <div className={classes.wrapper2}>
        <div className={classes.cakename}>
         <h1 data-aos="zoom-in-up">{item.styleName}</h1>
         <h3 data-aos="zoom-in-up">Rate : {item.Rate}</h3>
        </div>
        <div  className={classes.cakewrapper2}>
        <div  className={classes.cakepreview}>
          <img data-aos="zoom-in-up" key={pos} className={classArr.join(' ')} src={item.imageSrc} alt={item.styleName}></img>
        </div>
        </div>
        
     </div>
      )
     
    }
    })
  return (
    <div className={classes.Home}>
      <div data-aos="zoom-in-up">
        <img className={classes.flyer} src={flyer} alt='BnT-flyer'></img>
      </div>
      <div  data-aos="zoom-in-up" className={classes.greetingwrapper}>
        <h1 className={classes.greeting}>Home Baked!</h1>
      </div>
      <div >
        {cakeOptions}
      </div>
      <div   className={classes.offerings_wrapper}>
        <h1 data-aos="zoom-in-up" className={classes.greeting}>Our offerings</h1>
        <p className={classes.typography}>
          <h5 data-aos="zoom-in-up" >Vannila</h5>
          <h5 data-aos="zoom-in-up" > Chocolate</h5>
          <h5 data-aos="zoom-in-up" >Blackforest</h5>
          <h5 data-aos="zoom-in-up" >Whiteforest</h5>
          <h5 data-aos="zoom-in-up" >Butterscotch</h5>
          <h5 data-aos="zoom-in-up" >Red Velvet</h5>
          <h5 data-aos="zoom-in-up" >Choco Truffle</h5>
          <h5 data-aos="zoom-in-up" >Pineapple</h5>
          <h5 data-aos="zoom-in-up" >Rosemilk</h5>
          <h5 data-aos="zoom-in-up" >Rasamalai</h5>
          <h5 data-aos="zoom-in-up" >Fresh fruit gateaux</h5>
          <h5 data-aos="zoom-in-up" >Orange creamsicle</h5>
          <h5 data-aos="zoom-in-up" >Cup cakes</h5>
          <h5 data-aos="zoom-in-up" >Theme cakes</h5>

           <h5 data-aos="zoom-in-up" >Cookies!</h5>
          
        
        </p>
      </div>
      </div>
     
  );

}
  
export default Home
