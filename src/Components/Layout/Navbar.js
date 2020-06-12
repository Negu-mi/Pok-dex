import React, { Component } from 'react'
import styled from 'styled-components';

export default class Navbar extends Component {
    render() {
        return (
            <div>
               <nav className="navbar navbar-expand-md navbar-light fixed-top">
               <a href="" className="navbar-band col-sm-3 col-md-2 mr-0 align-items-center">Pokédex</a> 
               </nav>
            </div>
        );
    }
}
