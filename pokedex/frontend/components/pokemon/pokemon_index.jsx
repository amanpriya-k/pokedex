import React from 'react';

class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    const imgSize = {
      width: '100px',
      height: '100px'
    };
    return (
      <ul>
        {this.props.pokemon.map(
          pokemon => (
            <li class="poke-styling" key={pokemon.id}>
              <h2>{pokemon.name}</h2>
              <img src={pokemon.image_url}></img>

            </li>
          )
        )}
      </ul>
    );
  }
}

export default PokemonIndex;
