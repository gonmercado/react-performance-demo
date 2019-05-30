import React from 'react';
import HighlightChildren from '../shared/highlightChildren';
import { callDispatchOnRender } from '../../shared/auditRenderHelper';

const FunctionComponent = ({ renderCountsDispatch }) => {
  const keyName = 'comp4';
  const description = '4 - Function component without state';

  callDispatchOnRender(renderCountsDispatch, keyName, description);
  return (
    <div className={ 'children' }>
      <h3>{ description }</h3>
      <HighlightChildren keyName={ keyName } />
    </div>
  );
};

export default FunctionComponent;
