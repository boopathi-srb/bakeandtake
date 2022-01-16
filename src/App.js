

import Topbar from './components/topbar/topbar';

import classes from './App.module.css'
import Home from './pages/home/home';
import ProductData from './data';
import { Component } from 'react';
import Footer from './components/footer/footer';

class App extends Component {
  state={
    productData: ProductData,
  }
  render(){
  return (
    <div className={classes.App}>
      
        <Topbar/>
        <Home data={this.state.productData}/>
       <Footer/>
        

    
    </div>
  );
  
}
}

export default App;
