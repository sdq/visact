import * as ActionType from '../constants/ActionType'

export const undo = () => ({
    type: ActionType.UNDO
})

export const redo = () => ({
    type: ActionType.REDO
})

export const revisit = (index) => ({
    type: ActionType.REVISIT,
    index
})

export const reset = () => ({
    type: ActionType.RESET
})