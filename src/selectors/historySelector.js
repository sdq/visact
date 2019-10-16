import { createSelector } from 'reselect'

const specHistory = state => state.visReducer.specHistory;
const actionHistory = state => state.visReducer.actionHistory;
const specIndex = state => state.visReducer.specIndex;

export const getCurrentSpec = createSelector(
    specHistory,
    specIndex,
    (specHistory, specIndex) => specHistory[specIndex]
)

export const getCurrentHistory = createSelector(
    specHistory,
    specIndex,
    (specHistory, specIndex) => specHistory.slice(0,specIndex+1)
)

export const getCurrentActionHistory = createSelector(
    actionHistory,
    specIndex,
    (actionHistory, specIndex) => actionHistory.slice(0,specIndex+1)
)

export const isUndoDisable = createSelector(
    specIndex,
    (specIndex) => {
        return specIndex === 0
    }
)

export const isRedoDisable = createSelector(
    specHistory,
    specIndex,
    (specHistory, specIndex) => {
        return specIndex === specHistory.length-1
    }
)
