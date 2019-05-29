import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CounterIncrementor from '../shared/CounterIncrementor';
import { INCREMENT_RENDER_COUNT } from '../../App';

const MemoFunctionComponentsWithProps = ({ parentProp, renderCountsDispatch }) => {
  const [ counter, setCounter ] = useState(0);
  const [ hiddenCounter, setHiddenCounter ] = useState(0);

  console.log('16 - Memo function component with props');
  renderCountsDispatch({ type: INCREMENT_RENDER_COUNT, keyName: 'comp16'});
  return (
    <div>
      <h3>16 - Memo function component with props</h3>
      <CounterIncrementor onCounterIncrement={ () => setCounter( counter + 1) } counter={ counter } name={ 'counter' }/>
      <CounterIncrementor onCounterIncrement={ () => setHiddenCounter( hiddenCounter + 1) } name={ 'hiddenCounter' }/>
      <div><p>{`Parent Counter - ${ parentProp }`}</p></div>
    </div>
  );
};

MemoFunctionComponentsWithProps.propTypes = {
  parentProp: PropTypes.number.isRequired
};

export default React.memo(MemoFunctionComponentsWithProps);
