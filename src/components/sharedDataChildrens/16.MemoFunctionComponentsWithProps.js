import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CounterIncrementor from '../shared/CounterIncrementor';
import HighlightChildren from '../shared/highlightChildren';
import { callDispatchOnRender } from '../../shared/auditRenderHelper';

const MemoFunctionComponentsWithProps = ({ parentProp, renderCountsDispatch }) => {
  const [ counter, setCounter ] = useState(0);
  const [ hiddenCounter, setHiddenCounter ] = useState(0);

  const keyName = 'comp16';
  const description = '16 - Memo function component with props';

  callDispatchOnRender(renderCountsDispatch, keyName, description);
  return (
    <div className={ 'children' }>
      <h3>{ description }</h3>
      <CounterIncrementor onCounterIncrement={ () => setCounter( counter + 1) } counter={ counter } name={ 'counter' }/>
      <CounterIncrementor onCounterIncrement={ () => setHiddenCounter( hiddenCounter + 1) } name={ 'hiddenCounter' }/>
      <div><p>{`Parent Counter - ${ parentProp }`}</p></div>
      <HighlightChildren keyName={ keyName } />
    </div>
  );
};

MemoFunctionComponentsWithProps.propTypes = {
  parentProp: PropTypes.number.isRequired
};

export default React.memo(MemoFunctionComponentsWithProps);
