import React, { Component } from 'react'

export default class PokemonCard extends Component {
    state ={
        name:'',
        imageurl:'',
        pokemonindex:''
    }
    render() {
        const name = this.props.name;
        const imageurl = this.props.url;

        return (
            <div className='col-md-3 col-sm-6 mb-5'>
                <div className='card'>
                    <div className='card-header'>
                        <h1>{name}</h1>
                    </div>
                </div>
            </div>
        );
    }
}
