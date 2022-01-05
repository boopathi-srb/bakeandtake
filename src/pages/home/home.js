import React from 'react'
import flyer from '../../Bake&Take-home.png';
import classes from './home.module.css';
import item from '../../data'

const Home = (props) => {
  
  
  return (
    <div>
      <div>
        <img className={classes.flyer} src={flyer} alt='BnT-flyer'></img>
      </div>
      <div>
        <h1 className={classes.greeting}>Home Baked!</h1>
      </div>
      {/* <div>
        <img src={item.imageSrc} alt={item.styleName}></img>
        <h4>{item.styleName}</h4>
      </div> */}
    </div>
  )
}
  
export default Home
