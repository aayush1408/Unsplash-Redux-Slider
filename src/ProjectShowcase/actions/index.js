import { CLIENT_SECRET } from '../../config/keys';
import axios from 'axios';

export const actionTypes = {
  IMAGES_FETCH: 'IMAGES_FETCH',
  INCREMENT_INDEX: 'INCREMENT_INDEX'
};

export const startInterval = () => (dispatch) => {
  setInterval(() => {
    dispatch({
      type: actionTypes.INCREMENT_INDEX
    })
  }, 3000);
};

export const imagesFetch = (query) => async (dispatch) => {
  try {
    const imgs = await axios.get(`https://api.unsplash.com/search/photos?client_id=${CLIENT_SECRET}&query=${query}`);
    dispatch({
      type: actionTypes.IMAGES_FETCH,
      payload: imgs.data.results
    });
    dispatch(startInterval())
  }
  catch (error) {
    console.log(error);
  }
};