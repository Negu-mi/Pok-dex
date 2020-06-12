import React from 'react';
import './App.css';
import Click from './Click';
import Change from './Change';

function App(props) {

  function handle(c){
    c.preventDefault();
    console.log('The link was click');
  }

  return (
    <div>
      <Click message="Click button pls" />
      <p>Time : {props.date.toLocaleTimeString()}</p>
      <a href="#" onClick={handle}>Click</a>
      <Change />
    </div>
  );
}
 
export default App;
