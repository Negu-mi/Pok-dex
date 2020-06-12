import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <div>
               <nav className="navbar navbar-expand-md navbar-light fixed-top">
               <a href="http://localhost:3000/" className="navbar-band col-sm-3 col-md-2 mr-0 align-items-center">Pokédex</a> 
               </nav>
            </div>
        );
    }
}
