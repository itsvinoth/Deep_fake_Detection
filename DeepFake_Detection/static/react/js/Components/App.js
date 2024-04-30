import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Components/Home/Home';
import Detect from './Components/Detect/Detect';
import Navbar from './Components/Navbar/Navbar';
import BackgroundImage from './Assets/bgimage.jpg';

import React from 'react';

function MyFunc(vars){
  return vars
}

function App() {
  return (
    <React.Fragment>
    <div className="App" style={{backgroundImage: `url(${BackgroundImage})`,  backgroundSize: "cover"}}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/Detect' component={Detect}></Route>
          
        </Switch>
        
      </Router>
      
    </div>
    {/* <Footer1 /> */}
    </React.Fragment>
  );
}

export default App;
