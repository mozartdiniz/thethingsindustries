import * as actionTypes from './actionTypes';

import { addErrorMessage, clearErrorMessages } from './error';

export const saveNumber = (number) => ({
    type: actionTypes.SAVE_NEW_NUMBER,
    number,
});

export const requestNewNumber = () => {
    return async (dispatch) => {
      try {
        const response = await fetch('incrementNumber');
        dispatch(saveNumber(await response.text()));
        dispatch(clearErrorMessages());
      } catch (e) {
        dispatch(addErrorMessage({
          code: e.code,
          text: e.message,
        }));
      }
    }
};
