import React from 'react';
import { callDispatchOnRender } from '../../shared/auditRenderHelper';

const FunctionComponent = ({ renderCountsDispatch }) => {
  const keyName = 'comp4';

  callDispatchOnRender(renderCountsDispatch, keyName);
  return (
    <div className={ 'children__content' }>Simple Functional Component</div>
  );
};

export default FunctionComponent;
