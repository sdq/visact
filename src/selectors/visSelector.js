import { createSelector } from 'reselect';
import MarkType from '../constants/MarkType';
import * as ActionType from '../constants/ActionType';
import FieldType from '../constants/FieldType';

export const bookmarks = state => state.visReducer.bookmarks;
const specHistory = state => state.visReducer.specHistory;
const specIndex = state => state.visReducer.specIndex;

export const marktype = state => {
    var currentSpec = JSON.parse(state.visReducer.specHistory[state.visReducer.specIndex])
    return currentSpec["mark"]
};

export const isSlotAvailable = createSelector(
    marktype,
    (marktype) => {
        switch (marktype) {
            case MarkType.POINT:
                return {
                    x: true,
                    y: true,
                    color: true,
                    size: true,
                    shape: true,
                }
            case MarkType.BAR:
            case MarkType.TICK:
                return {
                    x: true,
                    y: true,
                    color: true,
                    size: true,
                    shape: false,
                }
            case MarkType.LINE:
            case MarkType.AREA:
                return {
                    x: true,
                    y: true,
                    color: true,
                    size: false,
                    shape: false,
                }
            default:
                return {
                    x: false,
                    y: false,
                    color: false,
                    size: false,
                    shape: false,
                }
        }
    }
)

export const getSlots = createSelector(
    specHistory,
    specIndex,
    (specHistory, specIndex) => {
        const slots = {
            x: {
                isEncoded: false,
                name: ""
            },
            y: {
                isEncoded: false,
                name: ""
            },
            color: {
                isEncoded: false,
                name: ""
            },
            size: {
                isEncoded: false,
                name: ""
            },
            shape: {
                isEncoded: false,
                name: ""
            },
        }
        const currentSpec = JSON.parse(specHistory[specIndex]);
        const encoding = currentSpec["encoding"];
        if ("x" in encoding && "field" in encoding["x"]) {
            slots.x.isEncoded = true;
            slots.x.name = encoding["x"]["field"];
        }
        if ("y" in encoding && "field" in encoding["y"]) {
            slots.y.isEncoded = true;
            slots.y.name = encoding["y"]["field"];
        }
        if ("color" in encoding && "field" in encoding["color"]) {
            slots.color.isEncoded = true;
            slots.color.name = encoding["color"]["field"];
        }
        if ("size" in encoding && "field" in encoding["size"]) {
            slots.size.isEncoded = true;
            slots.size.name = encoding["size"]["field"];
        }
        if ("shape" in encoding && "field" in encoding["shape"]) {
            slots.shape.isEncoded = true;
            slots.shape.name = encoding["shape"]["field"];
        }
        return slots;
    }
)

export const getFunctions = createSelector(
    specHistory,
    specIndex,
    (specHistory, specIndex) => {
        const functions = {
            x: ActionType.REMOVE_FUNCTION,
            y: ActionType.REMOVE_FUNCTION,
        }
        const currentSpec = JSON.parse(specHistory[specIndex]);
        const encoding = currentSpec["encoding"];
        if ("x" in encoding && ActionType.BIN in encoding["x"]) {
            functions.x = ActionType.BIN;
        }
        else if ("x" in encoding && "aggregate" in encoding["x"]) {
            functions.x = encoding.x.aggregate;
        }
        if ("y" in encoding && ActionType.BIN in encoding["y"]) {
            functions.y = ActionType.BIN;
        }
        else if ("y" in encoding && "aggregate" in encoding["y"]) {
            functions.y = encoding.y.aggregate;
        }
        return functions;
    }
)

export const isSortable = createSelector(
    specHistory,
    specIndex,
    (specHistory, specIndex) => {
        const isSortable = {
            x: false,
            y: false,
        }
        const currentSpec = JSON.parse(specHistory[specIndex]);
        const encoding = currentSpec["encoding"];
        if ("x" in encoding && "y" in encoding && encoding["x"]["type"] === FieldType.NOMINAL && "aggregate" in encoding["y"]) {
            isSortable.x = true;
        }
        if ("x" in encoding && "y" in encoding && encoding["y"]["type"] === FieldType.NOMINAL && "aggregate" in encoding["x"]) {
            isSortable.y = true;
        }
        return isSortable;
    }
)
