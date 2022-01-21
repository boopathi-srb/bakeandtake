import React from 'react'
import flyer from '../../Bake&Take-home.png';
import classes from './home.module.css';



const Home=(props)=> {
  const cakeOptions=props.data.cakeOptions.map((item,pos)=>{
    const classArr=[classes.productimage]
    console.log(pos);
    if (pos===0 || pos%2===0
      ) {
    return(
      <div className={classes.wrapper1}>
        <div className={classes.cakewrapper1}>
         <div className={classes.cakepreview}>
            <img key={pos} className={classArr.join(' ')} src={item.imageSrc} alt={item.styleName}></img>
         </div>
        </div>
       
        <div className={classes.cakename}>
         <h1 >{item.styleName}</h1>
        </div>
     </div>

    )
    }else{
      return(
        <div className={classes.wrapper2}>
        <div className={classes.cakename}>
         <h1 >{item.styleName}</h1>
        </div>
        <div className={classes.cakewrapper2}>
        <div className={classes.cakepreview}>
          <img key={pos} className={classArr.join(' ')} src={item.imageSrc} alt={item.styleName}></img>
        </div>
        </div>
        
     </div>
      )
     
    }
    })
  return (
    <div className={classes.Home}>
      <div>
        <img className={classes.flyer} src={flyer} alt='BnT-flyer'></img>
      </div>
      <div className={classes.greetingwrapper}>
        <h1 className={classes.greeting}>Home Baked!</h1>
      </div>
      <div >
        {cakeOptions}
      </div>
      <div className={classes.offerings_wrapper}>
        <h1 className={classes.greeting}>Our offerings</h1>
        <p className={classes.typography}>
          Vannila<br/>
          Chocolate<br/>
          Blackforest<br/> whiteforest<br/> Choco Truffle<br/> Gulab jamun<br/> Rasamalai<br/> Fresh fruit gateaux<br/>
          Orange creamsicle<br/> Cup cakes<br/> Theme cakes
        </p>
      </div>
      </div>
     
  );

}
  
export default Home
