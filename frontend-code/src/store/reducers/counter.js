import * as actionTypes from '../actions/actionTypes';

const initialState = {
    number: 0,
    loading: false
};

const saveNumber = (state, action) => ({
    ...state,
    number: action.number,
});

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.SAVE_NEW_NUMBER: return saveNumber(state, action);
        default: return state;
    }
}

export default reducer;
