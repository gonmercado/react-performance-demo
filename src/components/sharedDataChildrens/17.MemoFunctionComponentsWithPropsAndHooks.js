import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import CounterIncrementor from '../shared/CounterIncrementor';
import HighlightChildren from '../shared/highlightChildren';
import { callDispatchOnRender } from '../../shared/auditRenderHelper';

const MemoFunctionComponentsWithPropsAndHooks = ({ parentProp, renderCountsDispatch }) => {
  const [ counter, setCounter ] = useState(0);
  const [ hiddenCounter, setHiddenCounter ] = useState(0);

  const keyName = 'comp17';
  const description = '17 - Memo function component with props and hooks';

  callDispatchOnRender(renderCountsDispatch, keyName, description);
  const renderCounters = useMemo( () =>
      <div className={ 'children' }>
        <h3>{ description }</h3>
        <CounterIncrementor onCounterIncrement={ () => setCounter( counter + 1) } counter={ counter } name={ 'counter' }/>
        <CounterIncrementor onCounterIncrement={ () => setHiddenCounter( hiddenCounter + 1) } name={ 'hiddenCounter' }/>
        <div><p>{`Parent Counter - ${ parentProp }`}</p></div>
        <HighlightChildren keyName={ keyName } />
      </div>,
    [ counter, parentProp ] //eslint-disable-line
  );

  return renderCounters;
};

MemoFunctionComponentsWithPropsAndHooks.propTypes = {
  parentProp: PropTypes.number.isRequired
};

export default React.memo(MemoFunctionComponentsWithPropsAndHooks);
