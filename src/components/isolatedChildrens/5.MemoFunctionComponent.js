import React from 'react';
import { callDispatchOnRender } from '../../shared/auditRenderHelper';

const MemoFunctionComponent = ({ renderCountsDispatch }) => {
  const keyName = 'comp5';

  callDispatchOnRender(renderCountsDispatch, keyName);
  return (
    <div>Simple Memoized Functional Component</div>
  );
};

export default React.memo(MemoFunctionComponent);
