import { RECEIVE_ALL_POKEMON, RECEIVE_ONE_POKEMON } from '../actions/pokemon_actions';
import {merge} from 'lodash';

const pokemonReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      return merge({}, action.pokemon, state);
      // return action.pokemon;
    case RECEIVE_ONE_POKEMON:
      let newPokemon = {[action.payload.pokemon.id]: action.payload.pokemon};
      let merged =  merge({}, state, newPokemon);
      // console.log('state: ', state);
      // console.log('merged: ', merged);
      return merged;
    default:
      return state;
  }
};

export default pokemonReducer;
