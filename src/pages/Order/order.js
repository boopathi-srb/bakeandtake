import React from 'react';
// import classes from './order.module.css'
import  './order.css';

import Orderplaced from '../Orderplaced/orderplaced'

window.onload=function(){
  var form = document.getElementById('sheetdb-form');
  form.addEventListener("submit", e => {
  
    e.preventDefault();
    fetch(form.action, {
        method : "POST",
        body: new FormData(document.getElementById("sheetdb-form")),
    }).then(
        response => response.json()
    ).then(() => {
      // you can put any JS code here
      window.open( "", "");

    });
  
  });
}



const Order=(props)=> {
  
  const openPopupview = document.querySelectorAll('[data-popup-target]')
 const overlay = document.getElementById('overlay')

 openPopupview.forEach(button=>{
   button.addEventListener('click', ()=>{
     const popup=document.querySelector(button.dataset.popupTarget)
     openPopup(popup)
   })
 })
 const openPopup=(popup)=>{
   if (popup == null)
   return
   popup.classList.add('active')
   overlay.classList.add('active')
 }
  return <div className='Order'>
      <div className='order_wrapper'>
        <div className='Contact_rightside'>
          <h1 className='Contact_heading'>Order here!</h1>
          <p className='content'>
         Fill the form below to order
          </p>
         

        <form action="https://sheetdb.io/api/v1/dbno1om97ktt4" method="post" id="sheetdb-form" className='form'  autoComplete="on">
          <div>
            <label for="Name">Name</label>
            <input type="text" placeholder='Enter your Full name' name="data[Name]" required />
          </div>
          <div>
            <label for="Email">Email</label>
            <input type="email" placeholder='Enter your Mail-Id' name="data[Email]" required/>
          </div>
          <div>
            <label for="Number">Contact Number</label>
            <input type="text" minLength="10" maxLength="10" pattern="[0-9]{10}" placeholder='Enter your Contact number' name="data[Number]" required />
          </div>
          <div>
           <label for="Cake flavour">Cake flavour</label>
            <select className='selection' name="data[Cake flavour]" required>
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
          <label for="Required theme">Required theme<br/>(IF SELECTED THEME CAKE)</label>
            <input type="text" maxLength="10" placeholder="Enter the theme you wish" name="data[Required theme]"></input>
          </div>
          <div>
          <label for="Theme link">Sample picture of the theme<br/>(IF SELECTED THEME CAKE)</label>
            <input type="text" maxLength="100" placeholder="Enter the link to the sample pic" name="data[Theme link]"></input>
          </div>
          <div>
            <label for="Quantity">Quantity</label>
            <select className='selection'  name="data[Quantity]" required>
            <option disabled="disabled" selected>Pick the quantity</option>
             <option>2kg</option>
             <option>1.5kg</option>
             <option>1kg</option>
             <option>0.5kg</option>
            </select>
          </div>
          <div>
            <label for="Address">Address</label>
            <textarea type="text" rows="6" cols="50" placeholder="Enter your correct address" size="30" name="data[Address]" required/>
          </div>
          <div>
            <label for="Delivery due">Date and time of delivery</label>
            <input type="datetime-local" placeholder="Enter the delivery due time" name="data[Delivery due]" required/>
          </div>
          <div>
            <button data-popup-target="#popup" type='submit' >Order</button>
          </div>
        </form>
        {/* <div className="active"> */}
         <div className='popup' id="popup">
           <Orderplaced/>   
         </div>
         <div  className='overlay' id="overlay"></div>

        {/* </div> */}
       
        </div>
        </div>
  </div>;
}

export default Order;
