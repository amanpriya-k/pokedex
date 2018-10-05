
export const selectAllPokemon = (state) => {
  return Object.values(state.entities.pokemon);
};

export const selectAllItems = (state) => {
  return Object.values(state.entities.items);
};

export const selectPokemonItem = (state, id) => {
  return state.entities.items[id];
};

// export const selectOnePokemon = (state, id) => {
//   return state.entities.pokemon[id];
// };
