import * as ActionType from '../constants/ActionType'

const initialState = {
    isSidebarDisplayed: true,
}

export default (state = initialState, action) => {
    switch (action.type) {

    case ActionType.DISPLAY_SIDEBAR:
        const newState = {
            isSidebarDisplayed: action.isSidebarDisplayed
        };
        return newState

    default:
        return state
    }
}
