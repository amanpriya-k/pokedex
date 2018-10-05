import React from 'react';
import PokemonIndexItem from './pokemon_index_item';
import PokemonDetailContainer from './pokemon_detail_container';
import { HashRouter, Route } from 'react-router-dom';
import {formComponent} from './pokemon_form';
import {createNewPokemon } from './../../actions/pokemon_actions';

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
        <Route path='/pokemon/:id' component={PokemonDetailContainer} />
        <Route exact path='/' component={formComponent}/>
        {this.props.pokemon.map(
          pokemon => (
            <PokemonIndexItem key={pokemon.id} pokemon={pokemon} />
          )
        )}
      </ul>
    );
  }
}

export default PokemonIndex;
