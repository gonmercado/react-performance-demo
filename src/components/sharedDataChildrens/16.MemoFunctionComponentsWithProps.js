import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CounterIncrementor from '../shared/CounterIncrementor';
import HighlightChildren from '../shared/highlightChildren';
import { callDispatchOnRender } from '../../shared/auditRenderHelper';
import ComponentTitlePanel from '../shared/componentTitlePanel';
import { childrenComponentsMeta } from '../../shared/componentsMetaData';

const MemoFunctionComponentsWithProps = ({ parentProp, renderCountsDispatch }) => {
  const [ count, setCounter ] = useState(0);
  const [ hiddenCount, setHiddenCounter ] = useState(0);

  const keyName = 'comp16';
  const number = 16;
  const { description } = childrenComponentsMeta.find(el => el.keyName === keyName);

  callDispatchOnRender(renderCountsDispatch, keyName, description, number);
  return (
    <div className={ 'children' }>
      <ComponentTitlePanel title={ description } number={ number }/>
      <div className={ 'button-container'}>
        <CounterIncrementor onCounterIncrement={ () => setCounter( count + 1) } count={ count } name={ 'count' }/>
        <CounterIncrementor onCounterIncrement={ () => setHiddenCounter( hiddenCount + 1) } name={ 'hiddenCount' }/>
      </div>
      <div><p>{`Parent - ${ parentProp }`}</p></div>
      <HighlightChildren keyName={ keyName } />
    </div>
  );
};

MemoFunctionComponentsWithProps.propTypes = {
  parentProp: PropTypes.number.isRequired
};

export default React.memo(MemoFunctionComponentsWithProps);
