import { combineReducers } from 'redux';
import { sliderReducer } from '../ProjectShowcase/reducers';

export default combineReducers({
  animal: sliderReducer('animal'),
  cars: sliderReducer('cars'),
  planets: sliderReducer('planets')
});