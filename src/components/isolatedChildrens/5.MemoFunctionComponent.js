import React from 'react';
import HighlightChildren from '../shared/highlightChildren';
import { callDispatchOnRender } from '../../shared/auditRenderHelper';
import ComponentTitlePanel from '../shared/componentTitlePanel';

const MemoFunctionComponent = ({ renderCountsDispatch }) => {
  const keyName = 'comp5';
  const number = 5;
  const description = 'Memo function without state';

  callDispatchOnRender(renderCountsDispatch, keyName, description, number);
  return (
    <div className={ 'children' }>
      <ComponentTitlePanel title={ description } number={ number }/>
      <HighlightChildren keyName={ keyName } />
    </div>
  );
};

export default React.memo(MemoFunctionComponent);
