import React from 'react';
import { Link } from 'react-router-dom';

const PokemonIndexItem = (props) => {
  const url = '/pokemon/' + props.pokemon.id;
  return (
    <li className="poke-styling">
      <Link to={url}>
        <h2>{props.pokemon.name}</h2>
        <img src={props.pokemon.image_url}></img>
      </Link>
    </li>
  );
};

export default PokemonIndexItem;
