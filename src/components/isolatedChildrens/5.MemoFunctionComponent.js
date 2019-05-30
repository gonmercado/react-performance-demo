import React from 'react';
import HighlightChildren from '../shared/highlightChildren';
import { callDispatchOnRender } from '../../shared/auditRenderHelper';

const MemoFunctionComponent = ({ renderCountsDispatch }) => {
  const keyName = 'comp5';
  const description = '5 - Memo function component without state';

  callDispatchOnRender(renderCountsDispatch, keyName, description);
  return (
    <div className={ 'children' }>
      <h3>{ description }</h3>
      <HighlightChildren keyName={ keyName } />
    </div>
  );
};

export default React.memo(MemoFunctionComponent);
