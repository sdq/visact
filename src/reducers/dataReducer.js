import * as ActionType from '../constants/ActionType';
import cars from '../datasets/cars';
import carsSchema from '../datasets/carsSchema';

const initialState = {
    dataIndex: 0,
    dataList: [cars],
    fieldsList: [carsSchema],
}

export default (state = initialState, action) => {
    var fields = [];
    var field;
    switch (action.type) {

    case ActionType.UPLOAD_DATA:
        // upload csvdata
        // TODO: process field type
        for (field in action.csvfile[0]) fields.push(field);
        const newState1 = {
            dataIndex: 0,
            dataList: [action.csvfile],
            fieldsList: [fields],
        }
        return newState1

    case ActionType.CHANGE_DATA:
        // change to new csvdata
        // TODO: change data
        for (field in action.csvfile[0]) fields.push(field);
        const newFieldsList = state.fieldsList.slice();
        newFieldsList.push(fields);
        const newState2 = Object.assign({},state);
        newState2.dataList.push(action.csvfile);
        newState2.fieldsList = newFieldsList;
        newState2.dataIndex += 1;
        return newState2

    default:
        return state
    }
}
