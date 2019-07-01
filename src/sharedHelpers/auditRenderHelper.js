import { INCREMENT_RENDER_COUNT, REMOVE_RECENT } from '../App';
import { childrenComponentsMeta } from './componentsMetaData';

export const callDispatchOnRender = (dispatch, keyName, hardCodedDescription, hardCodedNumber) => {
  const componentMeta = childrenComponentsMeta.find(el => el.keyName === keyName);
  const description = hardCodedDescription || componentMeta ? componentMeta.description : '';
  const number = hardCodedNumber || componentMeta ? componentMeta.number : '';
  console.log(`${ number } -  ${ description }`);
  dispatch({ type: INCREMENT_RENDER_COUNT, keyName, number, description });
  setTimeout(() => {
    dispatch({ type: REMOVE_RECENT, keyName, number })
  }, 500);
};
