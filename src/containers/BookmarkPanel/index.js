import { connect } from 'react-redux';
import BookmarkPanel from './BookmarkPanel';
import { getCurrentSpec } from '../../selectors/historySelector';
import { getCurrentData } from '../../selectors/dataSelector';
import { bookmarks } from '../../selectors/visSelector';
import * as visActions from '../../actions/visAction';
import * as insightActions from '../../actions/insightAction';

const mapStateToProps = state => {
    return {
        currentSpec: getCurrentSpec(state),
        currentData: getCurrentData(state),
        bookmarks: bookmarks(state),
    }
}

const mapDispatchToProps = dispatch => {
    return {
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
        bookmark: () => dispatch(insightActions.bookmark())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(BookmarkPanel)