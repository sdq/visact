import * as ActionType from '../constants/ActionType'

export const displaySidebar = (isSidebarDisplayed) => ({
    type: ActionType.DISPLAY_SIDEBAR,
    isSidebarDisplayed
})
