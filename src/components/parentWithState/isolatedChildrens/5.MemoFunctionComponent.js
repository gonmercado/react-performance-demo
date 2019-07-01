import React from 'react';
import { callDispatchOnRender } from '../../../sharedHelpers/auditRenderHelper';

const MemoFunctionComponent = ({ renderCountsDispatch }) => {
  const keyName = 'comp5';

  // This line is the only thing that wouldn't be on a component, it's to audit the render.
  // The renderCountDispatch never change so it never cause an unwanted render
  callDispatchOnRender(renderCountsDispatch, keyName);
  return (
    <div className={ 'children__content'}>Simple Memoized Functional Component</div>
  );
};

export default React.memo(MemoFunctionComponent);
