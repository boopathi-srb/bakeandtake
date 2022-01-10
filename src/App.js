

import Topbar from './components/topbar/topbar';

import classes from './App.module.css'
import Home from './pages/home/home';
import ProductData from './data';
import { Component } from 'react';

class App extends Component {
  state={
    productData: ProductData,
  }
  render(){
  return (
    <div className={classes.App}>
      
        <Topbar/>
        <Home data={this.state.productData}/>
        

    
    </div>
  );
  
}
}

export default App;
