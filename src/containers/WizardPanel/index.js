import { connect } from 'react-redux';
import * as dataActions from '../../actions/dataAction';
import * as visActions from '../../actions/visAction';
import WizardPanel from './WizardPanel';
import { getCurrentData, getCurrentFields } from '../../selectors/dataSelector';
import { getCurrentSpec } from '../../selectors/historySelector';
import { isSlotAvailable, getSlots, getFunctions, marktype, isSortable } from '../../selectors/visSelector';

const mapStateToProps = state => {
    return {
        currentData: getCurrentData(state),
        currentSpec: getCurrentSpec(state),
        currentFields: getCurrentFields(state),
        marktype: marktype(state),
        isSlotAvailable: isSlotAvailable(state),
        slots: getSlots(state),
        functions: getFunctions(state),
        isSortable: isSortable(state),
    }
}

const mapDispatchToProps = dispatch => {
    return {
        // data
        uploadFile: (file) => dispatch(dataActions.upload(file)),
        changeFile: (file) => dispatch(dataActions.change(file)),
        // vis
        changeMark: (marktype) => dispatch(visActions.changeMark(marktype)),
        encoding: (channel, field, isEncoded) => {
            if (isEncoded) {
                return dispatch(visActions.modifyEncoding(channel, field))
            } else {
                return dispatch(visActions.encoding(channel, field))
            }
        },
        removeEncoding: (channel, field) => dispatch(visActions.removeEncoding(channel, field)),
        bin: (axis) => dispatch(visActions.bin(axis)),
        min: (axis) => dispatch(visActions.min(axis)),
        max: (axis) => dispatch(visActions.max(axis)),
        mean: (axis) => dispatch(visActions.mean(axis)),
        median: (axis) => dispatch(visActions.median(axis)),
        sum: (axis) => dispatch(visActions.sum(axis)),
        removeFunction: (axis) => dispatch(visActions.removeFunction(axis)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(WizardPanel)
