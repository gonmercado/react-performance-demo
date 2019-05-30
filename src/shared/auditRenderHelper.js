import { INCREMENT_RENDER_COUNT, REMOVE_RECENT } from '../App';

export const callDispatchOnRender = (dispatch, keyName, description, number) => {
  console.log(`${ number } -  ${ description }`)
  dispatch({ type: INCREMENT_RENDER_COUNT, keyName, number });
  setTimeout(() => {
    dispatch({ type: REMOVE_RECENT, keyName, number })
  }, 500);
};
