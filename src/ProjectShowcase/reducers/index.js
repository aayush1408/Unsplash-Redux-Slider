import { actionTypes } from '../actions';

const initialState = {
  imgData: [],
  currentImageIndex: 0
};

export function imagesFetch(state = initialState, action) {
  switch (action.type) {
    case actionTypes.IMAGES_FETCH:
      return { ...state, imgData: action.payload };
    case actionTypes.INCREMENT_INDEX:
      if (state.currentImageIndex >= 9) {
        return { ...state, currentImageIndex: 0 }
      }
      return { ...state, currentImageIndex: state.currentImageIndex + 1 }
    default:
      return state;
  }
}