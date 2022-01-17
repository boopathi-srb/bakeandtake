

import Topbar from './components/topbar/topbar';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Routes} from 'react-router-dom';
import classes from './App.module.css'
import Home from '../src/pages/Home/Home';
import ProductData from './data';
import { Component } from 'react';
import Footer from './components/footer/footer';
import About from './pages/About/About';

class App extends Component {
  state={
    productData: ProductData,
  }
  render(){
  return (
    <div className={classes.App}>
      <Router>
      <header>
        <Topbar/>
      </header>
      <body>
      <Routes>
         
         <Route path="/" element={<Home data={this.state.productData}/>} exact></Route>
         <Route path="/About" element={ <About/>} exact></Route>
         
       </Routes>
      </body>
      <footer className={classes.footer}>
         <Footer/>
      </footer>
        
      </Router>
        
       
       
        

    
    </div>
  );
  
}
}

export default App;
