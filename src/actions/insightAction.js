import * as ActionType from '../constants/ActionType'

export const bookmark = () => ({
    type: ActionType.BOOKMARK,
})

export const save = (spec) => ({
    type: ActionType.SAVE,
    spec
})
