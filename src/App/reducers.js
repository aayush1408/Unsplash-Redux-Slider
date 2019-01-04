import { combineReducers } from 'redux';
import { imagesFetch } from '../ProjectShowcase/reducers';

export default combineReducers({
  images: imagesFetch
});