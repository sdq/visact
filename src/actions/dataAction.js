import * as ActionType from '../constants/ActionType'

export const upload = (csvfile) => ({
    type: ActionType.UPLOAD_DATA,
    csvfile
})

export const change = (csvfile) => ({
    type: ActionType.CHANGE_DATA,
    csvfile
})
