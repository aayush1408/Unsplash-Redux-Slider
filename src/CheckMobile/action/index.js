export const actionTypes = {
  WINDOW_RESIZE: 'WINDOW_RESIZE',
};

export const reSize = (p) => ({
  type: actionTypes.WINDOW_RESIZE,
  payload: p
});