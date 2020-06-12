import React, { Component } from 'react'
import './App.css';
import Navbar from './Components/Layout/Navbar';    
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './Components/Layout/Dashboard'; 

class Pokedex extends Component {
    render(){
        return(
            <div className="Pokedex">
                <Navbar />
                <div className="container">
                <Dashboard />
                </div>
            </div>
        );
    }
}

export default Pokedex;
