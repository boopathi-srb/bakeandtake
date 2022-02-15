import React from 'react';
import classes from './order.module.css'


const Order=(props)=> {

 
  return <div className={classes.Order}>
      <div className={classes.order_wrapper}>
        <div className={classes.Contact_rightside}>
          <h1 className={classes.Contact_heading}>Order here!</h1>
          <p className={classes.content}>
         Fill the form below to order
          </p>
         

        <form className={classes.form}  autocomplete="on">
          <div>
            <label>Name</label>
            <input type="text" placeholder='Enter your name' required />
          </div>
          <div>
            <label>Email</label>
            <input type="email" placeholder='Enter your Mail-Id' required/>
          </div>
          <div>
            <label>Contact Number</label>
            <input type="text" minLength="10" maxLength="10" pattern="[0-9]{10}" placeholder='Enter your Contact number'required />
          </div>
          <div>
           <label>Cake flavour</label>
            <select className={classes.selection} required>
              <option disabled="disabled" selected>Pick your choice!</option>
              <option>Black forest</option>
              <option>White forest</option>
              <option>Butterscotch</option>
              <option>Red Velvet</option>
              <option>vannila</option>
              <option>Chocolate</option>
              <option>Choco Truffle</option>
              <option>Pineapple</option>
              <option>Rosemilk</option>
              <option>Rasamalai</option>
              <option>Fresh fruit gateaux</option>
              <option>Gulabjamun</option>
              <option>Orange Creamsicle</option>
              <option>Cup Cakes</option>
              <option>Theme Cakes</option>
              <option>Cookies</option>
            </select>
          </div>
          <div>
          <label>Required theme</label>
            <input type="text" maxLength="10" placeholder="Enter the theme you wish"></input>
          </div>
          <div>
            <label>Upload a sample pic of your theme(IF AVAILABLE) </label>
            <input type="file"></input>
          </div>
          <div>
            <label>Quantity</label>
            <select className={classes.selection} required>
            <option disabled="disabled" selected>Pick the quantity</option>
             <option>2kg</option>
             <option>1.5kg</option>
             <option>1kg</option>
             <option>0.5kg</option>
            </select>
          </div>
          <div>
            <label>Address</label>
            <textarea type="text" rows="6" cols="50" placeholder="Enter your correct address" size="30" required/>
          </div>
          <div>
            <label>Date and time of delivery</label>
            <input type="datetime-local" placeholder="Enter the delivery due time" required/>
          </div>
          <div>
            <button color="blue" type='submit'>Order</button>
          </div>
        </form>
        </div>
        </div>
  </div>;
}

export default Order;
