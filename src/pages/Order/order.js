import React from 'react';
import classes from './order.module.css'

function Order() {

  return <div className={classes.Order}>
      <div className={classes.order_wrapper}>
        <div className={classes.Contact_rightside}>
          <h1 className={classes.Contact_heading}>Order here!</h1>
          <p className={classes.content}>
         Fill the form below to order
          </p>
        </div>
        </div>
  </div>;
}

export default Order;
