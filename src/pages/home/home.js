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
          Vannila<br/>
          Chocolate<br/>
          Blackforest<br/> whiteforest<br/> Butterscotch<br/> Red Velvet<br/> Choco Truffle<br/> Gulab jamun<br/> Pineapple<br/> Rosemilk<br/> Rasamalai<br/> Fresh fruit gateaux<br/>
          Orange creamsicle<br/> Cup cakes<br/> Theme cakes<br/> <strong>Cookies!</strong>
        </p>
      </div>
      </div>
     
  );

}
  
export default Home
