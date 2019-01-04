import { actionTypes } from '../actions';

const initialState = {
  imgData: [],
  currentImageIndex: 0
};

export const sliderReducer = namespace => (state = initialState, action) => {
  switch (action.type) {
    case `${actionTypes.IMAGES_FETCH}_${namespace}`:
      return { ...state, imgData: action.payload };
    case `${actionTypes.INCREMENT_INDEX}_${namespace}`:
      if (state.currentImageIndex >= 9) {
        return { ...state, currentImageIndex: 0 }
      }
      return { ...state, currentImageIndex: state.currentImageIndex + 1 }
    default:
      return state;
  }
}