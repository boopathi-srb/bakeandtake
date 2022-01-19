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
      <div className={classes.cakewrapper}>
        <div className={classes.cakepreview}>
          <img key={pos} className={classArr.join(' ')} src={item.imageSrc} alt={item.styleName}></img>
        </div>
        <div className={classes.cakename}>
         <h1 >{item.styleName}</h1>
        </div>
     </div>

    )
    }else{
      return(
        <div className={classes.cakewrapper}>
        <div className={classes.cakename}>
         <h1 >{item.styleName}</h1>
        </div>
        <div className={classes.cakepreview}>
          <img key={pos} className={classArr.join(' ')} src={item.imageSrc} alt={item.styleName}></img>
        </div>
     </div>
      )
     
    }
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
