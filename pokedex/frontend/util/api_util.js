
export const fetchAllPokemon = () => (
  $.ajax({
    url: '/api/pokemon',
    method: 'GET'
  })
);

export const fetchOnePokemon = (id) => {
  return (
    $.ajax({
      url: `/api/pokemon/${id}`,
      method: 'GET'
    })
  );
};

export const createNewPokemon = (pokemon) => (
  $.ajax({
    url: 'api/pokemon',
    method: 'POST',
    data: {
      pokemon
    }
  })
);
