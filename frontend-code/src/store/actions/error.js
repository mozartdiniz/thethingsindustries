import * as actionTypes from './actionTypes';

export const addErrorMessage = (errorMessage) => ({
    type: actionTypes.ADD_ERROR_MESSAGE,
    errorMessage,
});

export const clearErrorMessages = () => ({
  type: actionTypes.CLEAR_ERROR_MESSAGES
});
