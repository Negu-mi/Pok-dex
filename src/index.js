import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Pokedex from './Pokedex';
import * as serviceWorker from './serviceWorker';

// function tick(){
//   ReactDOM.render(<React.StrictMode><App date={new Date()} /></React.StrictMode>, document.getElementById('root'));
// }

// setInterval(tick,1000);
ReactDOM.render(<React.StrictMode><Pokedex /></React.StrictMode>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
