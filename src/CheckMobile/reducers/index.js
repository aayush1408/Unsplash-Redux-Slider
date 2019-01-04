import { actionTypes } from '../action';

const initialState = {
  isMobile: false
};


export const mobileReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.WINDOW_RESIZE:
      return { ...state, isMobile: action.payload };
    default:
      return state;
  }
}