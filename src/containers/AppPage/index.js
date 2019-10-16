import { connect } from 'react-redux';
import AppPage from './AppPage';

const mapStateToProps = state => {
    return {
        isSidebarDisplayed: state.uiReducer.isSidebarDisplayed,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AppPage)