

import Topbar from './components/topbar/topbar';

import classes from './App.module.css'
import Home from './pages/home/home';

function App() {
  return (
    <div className={classes.App}>
      
        <Topbar/>
        <Home/>
        

    
    </div>
  );
}

export default App;
