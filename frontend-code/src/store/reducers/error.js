import * as actionTypes from '../actions/actionTypes';

const initialState = {
    errorMessages: []
};

const addErrorMessage = (state, action) => ({
  errorMessages: state.errorMessages.concat([action.errorMessage]),
});

const clearErrorMessages = (state, action) => ({
  errorMessages: [],
});

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.ADD_ERROR_MESSAGE: return addErrorMessage(state, action);
        case actionTypes.CLEAR_ERROR_MESSAGES: return clearErrorMessages(state, action);
        default: return state;
    }
}

export default reducer;
