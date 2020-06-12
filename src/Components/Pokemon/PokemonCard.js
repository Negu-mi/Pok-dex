import React, { Component } from 'react'

export default class PokemonCard extends Component {
    state ={
        name:'',
        imageurl:'',
        pokemonindex:''
    }

    componentDidMount() {
        const {name,url} = this.props;
        const pokemonindex = url.split('/')[url.split('/').lengh-2];
        const imageurl = `https://github.com/PokeAPI/sprits/blob/master/sprites/pokemon/${pokemonindex}.png?raw=true`

        this.setState({
            name,
            imageurl,
            pokemonindex
        });
    }

    render() {
        return (
            <div className="col-md-3 col-sm-5 mb-5">
                <div className="card">
                    <h1 className="card-header"> {this.state.pokemonindex}</h1>
                        <div className="card-body mx-auto"> 
                        <h2 className ="card-title">
                            {this.state.name
                            .toLowerCase()
                            .split('')
                            .map(
                                letter => letter.charAt(0).toUpperCase() + letter.substring(1)
                            )
                            .join('')
                            }</h2>
                        </div>
                </div>
            </div>
        );
    }
}
