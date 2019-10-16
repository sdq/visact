import * as ActionType from '../constants/ActionType';
import ChannelType from '../constants/ChannelType';

const originSpec = {
    "mark": "point",
    "encoding": {}
}

const initialState = {
    specIndex: 0,
    specHistory: [JSON.stringify(originSpec)],
    actionHistory: [{
        "type": "none",
        "description": "origin state",
    }],
    bookmarks: [],
}

export default (state = initialState, action) => {
    const newSpec = JSON.parse(state.specHistory[state.specIndex]);
    const newState = Object.assign({},state);
    let newSpecHistory = [];
    let newActionHistory = [];
    let newBookmarks = [];
    switch (action.type) {
    
        // Vis
        case ActionType.ENCODING:
        case ActionType.MODIFY_ENCODING:
            // state
            newSpecHistory = newState.specHistory.slice(0,newState.specIndex+1);
            //console.log(newSpecHistory);
            if (action.channel in newSpec["encoding"]) {
                newSpec["encoding"][action.channel]["field"] = action.field.name;
                newSpec["encoding"][action.channel]["type"] = action.field.type;
            }
            else {
                newSpec["encoding"][action.channel] = {};
                newSpec["encoding"][action.channel]["field"] = action.field.name;
                newSpec["encoding"][action.channel]["type"] = action.field.type;
            };
            newSpecHistory.push(JSON.stringify(newSpec));
            newState.specHistory = newSpecHistory
            // action
            newActionHistory = newState.actionHistory.slice();
            if (action.type === ActionType.ENCODING) {
                newActionHistory.push({
                    "type": ActionType.ENCODING,
                    "channel": action.channel,
                    "field": action.field,
                    "description": "add field "+action.channel,
                });
            } else {
                newActionHistory.push({
                    "type": ActionType.MODIFY_ENCODING,
                    "channel": action.channel,
                    "field": action.field,
                    "description": "modify field "+action.channel,
                });
            }
            newState.actionHistory = newActionHistory;
            newState.specIndex ++;
            return newState

        case ActionType.REMOVE_ENCODING:
            // state
            newSpecHistory = newState.specHistory.slice(0,newState.specIndex+1);
            //console.log(newSpecHistory);
            if (action.channel in newSpec["encoding"]) {
                delete newSpec["encoding"][action.channel].field;
                delete newSpec["encoding"][action.channel].type;
            }
            newSpecHistory.push(JSON.stringify(newSpec));
            newState.specHistory = newSpecHistory
            // action
            newActionHistory = newState.actionHistory.slice();
            newActionHistory.push({
                "type": ActionType.REMOVE_ENCODING,
                "channel": action.channel,
                "field": action.field,
                "description": "remove field "+action.channel,
            });
            newState.actionHistory = newActionHistory;
            newState.specIndex ++;
            return newState

        case ActionType.CHANGE_MARK:
            // state
            newSpec["mark"] = action.marktype;
            newSpecHistory = newState.specHistory.slice(0,newState.specIndex+1);
            newSpecHistory.push(JSON.stringify(newSpec));
            newState.specHistory = newSpecHistory;
            // action
            newActionHistory = newState.actionHistory.slice();
            newActionHistory.push({
                "type": "Change Mark",
                "mark": action.marktype,
                "description": "change mark to "+action.marktype,
            });
            newState.actionHistory = newActionHistory;
            newState.specIndex ++;
            return newState

        case ActionType.BIN:
            // state
            newSpecHistory = newState.specHistory.slice(0,newState.specIndex+1);
            if (action.axis in newSpec["encoding"]) {
                delete newSpec["encoding"][action.axis]["aggregate"];
                newSpec["encoding"][action.axis]["bin"] = {};
            };
            newSpecHistory.push(JSON.stringify(newSpec));
            newState.specHistory = newSpecHistory
            // action
            newActionHistory = newState.actionHistory.slice();
            newActionHistory.push({
                "type": ActionType.BIN,
                "axis": action.axis,
                "description": "add bin in "+action.axis,
            });
            newState.actionHistory = newActionHistory;
            newState.specIndex ++;
            return newState
        
        case ActionType.MIN:
        case ActionType.MAX:
        case ActionType.MEAN:
        case ActionType.MEDIAN:
        case ActionType.SUM:
            // state
            newSpecHistory = newState.specHistory.slice(0,newState.specIndex+1);
            if (action.axis in newSpec["encoding"]) {
                delete newSpec["encoding"][action.axis]["bin"];
                newSpec["encoding"][action.axis]["aggregate"] = action.type;
            };
            newSpecHistory.push(JSON.stringify(newSpec));
            newState.specHistory = newSpecHistory
            // action
            newActionHistory = newState.actionHistory.slice();
            newActionHistory.push({
                "type": action.type,
                "axis": action.axis,
                "description": "add aggregation in "+action.axis,
            });
            newState.actionHistory = newActionHistory;
            newState.specIndex ++;
            return newState

        case ActionType.REMOVE_FUNCTION:
            // state
            newSpecHistory = newState.specHistory.slice(0,newState.specIndex+1);
            if (action.axis in newSpec["encoding"]) {
                delete newSpec["encoding"][action.axis]["bin"];
                delete newSpec["encoding"][action.axis]["aggregate"];
            };
            newSpecHistory.push(JSON.stringify(newSpec));
            newState.specHistory = newSpecHistory
            // action
            newActionHistory = newState.actionHistory.slice();
            newActionHistory.push({
                "type": ActionType.REMOVE_FUNCTION,
                "axis": action.axis,
                "description": "remove aggregate in "+action.axis,
            });
            newState.actionHistory = newActionHistory;
            newState.specIndex ++;
            return newState

        case ActionType.SORT:
            // state
            newSpecHistory = newState.specHistory.slice(0,newState.specIndex+1);
            delete newSpec["encoding"][ChannelType.X]["sort"];
            delete newSpec["encoding"][ChannelType.Y]["sort"];
            newSpec["encoding"][action.axis]["sort"] = {};
            if (action.axis === ChannelType.X) {
                newSpec["encoding"][ChannelType.X]["sort"]["field"] = newSpec["encoding"][ChannelType.Y]["field"];
                newSpec["encoding"][ChannelType.X]["sort"]["op"] = newSpec["encoding"][ChannelType.Y]["aggregate"];
            } else {
                newSpec["encoding"][ChannelType.Y]["sort"]["field"] = newSpec["encoding"][ChannelType.X]["field"];
                newSpec["encoding"][ChannelType.Y]["sort"]["op"] = newSpec["encoding"][ChannelType.X]["aggregate"];
            }
            newSpec["encoding"][action.axis]["sort"]["order"] = action.order;
            newSpecHistory.push(JSON.stringify(newSpec));
            newState.specHistory = newSpecHistory
            // action
            newActionHistory = newState.actionHistory.slice();
            newActionHistory.push({
                "type": ActionType.SORT,
                "axis": action.axis,
                "order": action.order,
                "description": "sort in "+action.axis,
            });
            newState.actionHistory = newActionHistory;
            newState.specIndex ++;
            return newState

        case ActionType.UNSORT:
            // state
            newSpecHistory = newState.specHistory.slice(0,newState.specIndex+1);
            delete newSpec["encoding"][action.axis]["sort"];
            newSpecHistory.push(JSON.stringify(newSpec));
            newState.specHistory = newSpecHistory
            // action
            newActionHistory = newState.actionHistory.slice();
            newActionHistory.push({
                "type": ActionType.UNSORT,
                "axis": action.axis,
                "description": "unsort in "+action.axis,
            });
            newState.actionHistory = newActionHistory;
            newState.specIndex ++;
            return newState
        
        // Meta
        case ActionType.UNDO:
            if (state.specIndex === 0) {
                return state
            }
            else {
                const newState = Object.assign({},state);
                newState.specIndex --;
                return newState
            }
        case ActionType.REDO:
            if (state.specIndex === state.specHistory.length-1) {
                return state
            }
            else {
                const newState = Object.assign({},state);
                newState.specIndex ++;
                return newState
            }
        case ActionType.BOOKMARK:
            newBookmarks = newState.bookmarks.slice();
            newBookmarks.push(JSON.parse(state.specHistory[state.specIndex]));
            newState.bookmarks = newBookmarks;
            return newState;
        default:
            return state
        }
}
