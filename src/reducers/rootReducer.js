import { combineReducers } from 'redux';
import uiReducer from './uiReducer';
import dataReducer from './dataReducer';
import visReducer from './visReducer';
export default combineReducers({
    uiReducer,
    dataReducer,
    visReducer,
});