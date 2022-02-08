import React from 'react';
import './App.css';
import Intro from './components/Intro';
import Routing from './Routing';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

function App(){
  return (
	<Router>
    <div className="App bg-body">
      <link href='https://fonts.googleapis.com/css?family=Sen' rel='stylesheet'/>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"/> 
      <header className="App-header">
		    <Routing/>
      </header>
    </div>
  </Router>
  );
}

export default App;
