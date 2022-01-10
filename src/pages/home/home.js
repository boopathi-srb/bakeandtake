import React from 'react'
import flyer from '../../Bake&Take-home.png';
// import ProductData from '../../data';
import classes from './home.module.css';



const Home=(props)=> {
  const cakeOptions=props.data.cakeOptions.map((item,pos)=>{
    const classArr=[classes.productimage]
    return(
      <div className={classes.cakewrapper}>
     
      <div className={classes.cakepreview}>
        <img key={pos} className={classArr.join(' ')} src={item.imageSrc} alt={item.styleName}></img>
      </div>
      <div className={classes.cakename}>
        <h1 >{item.styleName}</h1>
      </div>
    
    </div>

    )
    })
  return (
    <div>
      <div>
        <img className={classes.flyer} src={flyer} alt='BnT-flyer'></img>
      </div>
      <div>
        <h1 className={classes.greeting}>Home Baked!</h1>
      </div>
      <div >
        {cakeOptions}
      </div>
      </div>
     
  );

}
  
export default Home
