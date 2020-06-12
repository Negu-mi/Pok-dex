import React, { Component } from 'react'
import styled from 'styled-components';
// import spinner from '../Pokemon/spinner.gif';

const Sprite = styled.img`
    width: 5em;
    height: 5em;
    `;

export default class PokemonCard extends Component {
    state = {
        name: '',
        imageurl: '',
        pokemonindex: '',
        imageloading: true,
        tomanyrequests: false
    };

    componentDidMount() {
        const { name, url } = this.props;
        const pokemonindex = url.split('/')[url.split('/').length - 2];
        const imageurl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonindex}.png?raw=true`;

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
                    <h2 className="card-header"> {this.state.pokemonindex}</h2>
                    <Sprite
                        className="card-img-top rounded mx-auto mt-2"
                        onLoad={() => this.setState({ imageloading: false })}
                        onError={() => this.setState({ tomanyrequests: true })}
                        src={this.state.imageurl} />
                    <div className="card-body mx-auto">
                        <h3 className="card-title">
                            {this.state.name
                                .toLowerCase()
                                .split(' ')
                                .map(
                                    letter => letter.charAt(0).toUpperCase() + letter.substring(1)
                                )
                                .join(' ')
                            }</h3>
                    </div>
                </div>
            </div>
        );
    }
}
