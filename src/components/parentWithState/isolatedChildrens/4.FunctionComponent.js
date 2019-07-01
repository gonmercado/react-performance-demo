import React from 'react';
import { callDispatchOnRender } from '../../../sharedHelpers/auditRenderHelper';

const FunctionComponent = ({ renderCountsDispatch }) => {
  const keyName = 'comp4';

  // This line is the only thing that wouldn't be on a component, it's to audit the render.
  // The renderCountDispatch never change so it never cause an unwanted render
  callDispatchOnRender(renderCountsDispatch, keyName);
  return (
    <div className={ 'children__content' }>Simple Functional Component</div>
  );
};

export default FunctionComponent;
