

import Topbar from './components/topbar/topbar';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Routes} from 'react-router-dom';
import classes from './App.module.css'
import Home from './pages/home/home';
import ProductData from './data';
import { Component } from 'react';
import Footer from './components/footer/footer';
import About from './pages/About/About';
import Contact  from './pages/Contact/Contact';
import Order from './pages/Order/order';
import Orderplaced from './pages/Orderplaced/orderplaced';
import Scroll from './components/scroll/scroll';
import Gallery from './pages/cake gallery/gallery';
// import AOS from 'aos';
class App extends Component {
  
  state={
    productData: ProductData,
  }
  //  AOS.init();
  render(){
  return (
    <div className={classes.App}>
      <Router>
      <header>
        <Topbar/>
      </header>
      <div className={classes.body}>
      <Routes>
         
         <Route path="/" element={<Home data={this.state.productData}/>} exact></Route>
         <Route path="/Gallery" element={<Gallery data={this.state.productData}/>} exact></Route>
         <Route path="/About" element={ <About/>} exact></Route>
         <Route path="/Contact" element={ <Contact/>} exact></Route>
         <Route path="/Order" element={ <Order/>} exact></Route>
         <Route path="/orderplaced" element={ <Orderplaced/>} exact></Route>
         
       </Routes>
       <Scroll/>
      </div>
      <footer className={classes.footer}>
         <Footer/>
      </footer>
        
      </Router>
        
       
       
        

    
    </div>
  );
  
}
}

export default App;
