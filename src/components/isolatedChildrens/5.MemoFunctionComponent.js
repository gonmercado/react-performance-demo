import React from 'react';
import HighlightChildren from '../shared/highlightChildren';
import { callDispatchOnRender } from '../../shared/auditRenderHelper';
import ComponentTitlePanel from '../shared/componentTitlePanel';
import { childrenComponentsMeta } from '../../shared/componentsMetaData';

const MemoFunctionComponent = ({ renderCountsDispatch }) => {
  const keyName = 'comp5';
  const { number, description } = childrenComponentsMeta.find(el => el.keyName === keyName);

  callDispatchOnRender(renderCountsDispatch, keyName, description, number);
  return (
    <div className={ 'children' }>
      <ComponentTitlePanel title={ description } number={ number }/>
      <HighlightChildren keyName={ keyName } />
    </div>
  );
};

export default React.memo(MemoFunctionComponent);
