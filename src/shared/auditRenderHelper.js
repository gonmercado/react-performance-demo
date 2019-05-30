import { INCREMENT_RENDER_COUNT, REMOVE_RECENT } from '../App';

export const callDispatchOnRender = (dispatch, keyName, description) => {
  console.log(description)
  dispatch({ type: INCREMENT_RENDER_COUNT, keyName });
  setTimeout(() => {
    dispatch({ type: REMOVE_RECENT, keyName })
  }, 300);
};
