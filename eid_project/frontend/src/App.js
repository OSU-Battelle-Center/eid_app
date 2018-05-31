import React, { Component } from 'react';
// import {Route, Switch, BrowserRouter} from 'react-router-dom';
import MapComp from "./components/MapComp";
import Basemap from "./components/Basemap";
import Nonforest from "./components/Nonforest";

// import NotFound from "./components/NotFound";
//import logo from './logo.svg';
//import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }
//
// export default App;

class App extends Component {
  render() {

  return (
    // <BrowserRouter>
    // <Switch>
    //   <Route exact path="/" component={MapComp} />
    //   <Route component={NotFound} />
    // </Switch>
    // </BrowserRouter>
      <div className="App">
        <Basemap />
      </div>
  );
  }
}

export default App;
