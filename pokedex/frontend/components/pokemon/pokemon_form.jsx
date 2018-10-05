import React from 'react';
import { connect} from 'react-redux';
import {createNewPokemon} from './../../actions/pokemon_actions';

export class PokemonForm extends React.Component {
  constructor(props) {
    super(props);
    // this.state = { name: '', image_url: '', poke_type: '', attack: 0, defense: 0, moves: [] };
    this.createPokemon = this.createPokemon.bind(this);
  }

  createPokemon(e){
    e.preventDefault();
    let input = e.currentTarget.elements;
    let moves = [input[5].value, input[6].value];
    const newPokemon = { name: input[0].value,
                    image_url: input[1].value,
                    poke_type: input[2].value,
                    attack: input[3].value,
                    defense: input[4].value,
                    moves: moves };
    this.props.createNewPokemon(newPokemon);
    // debugger;
  }

  render() {
    const types = [
      'fire',
      'electric',
      'normal',
      'ghost',
      'psychic',
      'water',
      'bug',
      'dragon',
      'grass',
      'fighting',
      'ice',
      'flying',
      'poison',
      'ground',
      'rock',
      'steel'
    ];
    return(
      <div>
        <form onSubmit={(e) => this.createPokemon(e)}>

          <input type='text' placeholder='Name'/>
          <input type='text' placeholder='Image Url'/>
          <select>
            <option disabled selected>Type</option>
            {types.map(
              (type) => (
                <option key={type} value={type}>{type}</option>
              )
            )}
          </select>
          <input type='number' placeholder='Attack'/>
          <input type='number' placeholder='Defense'/>
          <input type='text' placeholder='Move 1'/>
          <input type='text' placeholder='Move 2'/>

          <input type='submit' value="submit"></input>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  createNewPokemon: (p) => dispatch(createNewPokemon(p))
});

export const formComponent = connect(null, mapDispatchToProps)(PokemonForm);
