import { createSelector } from 'reselect'

const dataList = state => state.dataReducer.dataList;
const fieldsList = state => state.dataReducer.fieldsList;
const dataIndex = state => state.dataReducer.dataIndex;

export const getCurrentData = createSelector(
    dataList,
    dataIndex,
    (dataList, dataIndex) => {
        return {
            values: dataList[dataIndex]
        };
    }
)

export const getCurrentFields = createSelector(
    fieldsList,
    dataIndex,
    (fieldsList, dataIndex) => fieldsList[dataIndex]
)