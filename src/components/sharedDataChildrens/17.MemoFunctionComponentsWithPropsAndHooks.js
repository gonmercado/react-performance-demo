import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import CounterIncrementor from '../shared/CounterIncrementor';
import { INCREMENT_RENDER_COUNT } from '../../App';

const MemoFunctionComponentsWithPropsAndHooks = ({ parentProp, renderCountsDispatch }) => {
  const [ counter, setCounter ] = useState(0);
  const [ hiddenCounter, setHiddenCounter ] = useState(0);

  console.log('17 - Memo function component with props and hooks');
  renderCountsDispatch({ type: INCREMENT_RENDER_COUNT, keyName: 'comp17'});
  const renderCounters = useMemo( () =>
      <div>
        <h3>17 - Memo function component with props and hooks</h3>
        <CounterIncrementor onCounterIncrement={ () => setCounter( counter + 1) } counter={ counter } name={ 'counter' }/>
        <CounterIncrementor onCounterIncrement={ () => setHiddenCounter( hiddenCounter + 1) } name={ 'hiddenCounter' }/>
        <div><p>{`Parent Counter - ${ parentProp }`}</p></div>
      </div>,
    [ counter, parentProp ]
  );

  return renderCounters;
};

MemoFunctionComponentsWithPropsAndHooks.propTypes = {
  parentProp: PropTypes.number.isRequired
};

export default React.memo(MemoFunctionComponentsWithPropsAndHooks);
