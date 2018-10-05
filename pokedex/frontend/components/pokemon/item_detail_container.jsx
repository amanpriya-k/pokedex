import {connect} from 'react-redux';
import {selectPokemonItem} from './../../reducers/selectors';
import ItemDetail from './item_detail';

const mapStateToProps = (state, ownProps) => ({
    id: ownProps.match.params.itemId,
    item: selectPokemonItem(state, ownProps.match.params.itemId)
});

export default connect(mapStateToProps, null)(ItemDetail);
