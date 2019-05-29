import React from 'react';
import { INCREMENT_RENDER_COUNT } from '../../App';

const FunctionComponent = ({ renderCountsDispatch }) => {
  console.log('4 - Function component without state');
  renderCountsDispatch({ type: INCREMENT_RENDER_COUNT, keyName: 'comp4'});
  return (
    <div>
      <h3>4 - Function component without state</h3>
    </div>
  );
};

export default FunctionComponent;
