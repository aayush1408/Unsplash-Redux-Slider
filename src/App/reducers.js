import { combineReducers } from 'redux';
import { sliderReducer } from '../ProjectShowcase/reducers';
import { mobileReducer } from '../CheckMobile/reducers';

export default combineReducers({
  animal: sliderReducer('animal'),
  anime: sliderReducer('anime'),
  isMobile: mobileReducer
});