import {connect} from 'react-redux';
import {requestOnePokemon} from './../../actions/pokemon_actions';
import PokemonDetail from './pokemon_detail';
import {selectAllItems} from './../../reducers/selectors';
import {withRouter} from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
    // pokemon: (id) => state.entities.pokemon[id],
    pokemon: state.entities.pokemon[ownProps.match.params.id],
    items: selectAllItems(state)
});

const mapDispatchToProps = (dispatch) => ({
  requestOnePokemon: (id) => dispatch(requestOnePokemon(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps)(PokemonDetail);
