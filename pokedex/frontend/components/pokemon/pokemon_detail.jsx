import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import ItemDetailContainer from './item_detail_container';
import { Link } from 'react-router-dom';


class PokemonDetail extends React.Component {

  constructor(props) {
    super(props);
    // pokemon = {};
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.requestOnePokemon(id);
  }

  componentWillReceiveProps(newProps) {
    const { pokemon } = this.props;

    if (pokemon) {
      if (pokemon.id !== parseInt(newProps.match.params.id)) {
        this.props.requestOnePokemon(newProps.match.params.id);
      }
    }
  }

  render() {
    // const id = this.props.match.params.id;
    const { pokemon, items } = this.props;
    if (!pokemon || !pokemon.moves) {
      return null;
    }

    return(
      <div className="pokemon-detail">
        <img className="poke-image" src={pokemon.image_url}></img>
        <h2>{pokemon.name}</h2>
        <h3>Type: {pokemon.poke_type}</h3>
        <h3>Attack: {pokemon.attack}</h3>
        <h3>Defense: {pokemon.defense}</h3>
        <h3>Moves: {pokemon.moves.join(", ")}</h3>
        <h3>Items</h3>


      <div className="item-container">
        {items.map(item => {
          return (<Link key={item.id} to={`/pokemon/${pokemon.id}/items/${item.id}`}>
            <img className="item" src={item.image_url}></img>
          </Link>);
        }
        )}
      </div>


        <Route path="/pokemon/:id/items/:itemId" component={ItemDetailContainer} />
      </div>
    );
  }

}

export default PokemonDetail;
