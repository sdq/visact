import * as ActionType from '../constants/ActionType'

export const encoding = (channel, field) => ({
    type: ActionType.ENCODING,
    channel,
    field
})

export const modifyEncoding = (channel, field) => ({
    type: ActionType.MODIFY_ENCODING,
    channel,
    field
})

export const removeEncoding = (channel, field) => ({
    type: ActionType.REMOVE_ENCODING,
    channel,
    field
})

export const changeMark = (marktype) => ({
    type: ActionType.CHANGE_MARK,
    marktype
})

export const bin = (axis) => ({
    type: ActionType.BIN,
    axis
})

export const min = (axis) => ({
    type: ActionType.MIN,
    axis
})

export const max = (axis) => ({
    type: ActionType.MAX,
    axis
})

export const mean = (axis) => ({
    type: ActionType.MEAN,
    axis
})

export const median = (axis) => ({
    type: ActionType.MEDIAN,
    axis
})

export const sum = (axis) => ({
    type: ActionType.SUM,
    axis
})

export const removeFunction = (axis) => ({
    type: ActionType.REMOVE_FUNCTION,
    axis
})

export const sort = (axis, order) => ({
    type: ActionType.SUM,
    axis,
    order
})

export const unsort = (axis) => ({
    type: ActionType.SUM,
    axis
})
