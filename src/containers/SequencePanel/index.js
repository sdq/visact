import { connect } from 'react-redux';
import SequencePanel from './SequencePanel';
import * as metaActions from '../../actions/metaAction';
import { isUndoDisable, isRedoDisable, getCurrentHistory, getCurrentActionHistory } from '../../selectors/historySelector';
import { getCurrentData } from '../../selectors/dataSelector';

const mapStateToProps = state => {
    return {
        currentData: getCurrentData(state),
        specHistory: getCurrentHistory(state),
        actionHistory: getCurrentActionHistory(state),
        isUndoDisable: isUndoDisable(state),
        isRedoDisable: isRedoDisable(state),
    }
}

const mapDispatchToProps = dispatch => {
    return {
        // meta
        undo: () => dispatch(metaActions.undo()),
        redo: () => dispatch(metaActions.redo()),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SequencePanel)
