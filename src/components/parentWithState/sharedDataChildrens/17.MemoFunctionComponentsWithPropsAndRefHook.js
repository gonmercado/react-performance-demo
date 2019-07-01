import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import CounterIncrementor from '../shared/CounterIncrementor';
import { callDispatchOnRender } from '../../../sharedHelpers/auditRenderHelper';

const MemoFunctionComponentsWithPropsAndHooks = ({ parentProp, renderCountsDispatch }) => {
  const [ count, setCounter ] = useState(0);
  const hiddenCounter = useRef(0);

  const keyName = 'comp17';

  const hiddenCounterIncrement = () => hiddenCounter.current += 1;

  useEffect(() => {
    // This line is the only thing that wouldn't be on a component, it's to audit the render.
    // The renderCountDispatch never change so it never cause an unwanted render
    callDispatchOnRender(renderCountsDispatch, keyName);
  });

  return (
    <>
      <div className={ 'button-container'}>
        <CounterIncrementor onCounterIncrement={ () => setCounter( count + 1) } count={ count } name={ 'count' }/>
        <CounterIncrementor onCounterIncrement={ hiddenCounterIncrement } name={ 'hidden-count' } />
      </div>
      <p>{`Parent counter - ${ parentProp }`}</p>
    </>
  );
};

MemoFunctionComponentsWithPropsAndHooks.propTypes = {
  parentProp: PropTypes.number.isRequired
};

export default React.memo(MemoFunctionComponentsWithPropsAndHooks);
