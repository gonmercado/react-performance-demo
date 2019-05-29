import React from 'react';
import { INCREMENT_RENDER_COUNT } from '../../App';

const MemoFunctionComponent = ({ renderCountsDispatch }) => {
  console.log('5 - Memo function component without state');
  renderCountsDispatch({ type: INCREMENT_RENDER_COUNT, keyName: 'comp5'});
  return (
    <div>
      <h3>5 - Memo function component without state</h3>
    </div>
  );
};

export default React.memo(MemoFunctionComponent);
