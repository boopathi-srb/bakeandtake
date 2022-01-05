import React from 'react'
import flyer from '../../Bake&Take-home.png';
import classes from './home.module.css'

const Home = () => {
  return (
    <div>
      <div>
        <img className={classes.flyer} src={flyer} alt='BnT-flyer'></img>
      </div>
      <div>
        <h1 className={classes.greeting}>Home Baked!</h1>
      </div>
    </div>
  )
}
  
export default Home
