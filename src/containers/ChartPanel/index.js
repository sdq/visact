import { connect } from 'react-redux';
import ChartPanel from './ChartPanel';
import * as uiActions from '../../actions/uiAction';
import * as metaActions from '../../actions/metaAction';
import { getCurrentSpec } from '../../selectors/historySelector';
import { getCurrentData } from '../../selectors/dataSelector';

const mapStateToProps = state => {
    return {
        isSidebarDisplayed: state.uiReducer.isSidebarDisplayed,
        currentSpec: getCurrentSpec(state),
        currentData: getCurrentData(state),
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggle: (isSidebarDisplayed) => dispatch(uiActions.displaySidebar(isSidebarDisplayed)),
        undo: () => dispatch(metaActions.undo()),
        redo: () => dispatch(metaActions.redo()),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ChartPanel)