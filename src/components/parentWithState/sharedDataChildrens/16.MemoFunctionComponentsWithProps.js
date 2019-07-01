import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CounterIncrementor from '../shared/CounterIncrementor';
import { callDispatchOnRender } from '../../../sharedHelpers/auditRenderHelper';

const MemoFunctionComponentsWithProps = ({ parentProp, renderCountsDispatch }) => {
  const [ count, setCounter ] = useState(0);
  const [ hiddenCount, setHiddenCounter ] = useState(0);

  const keyName = 'comp16';

  // This line is the only thing that wouldn't be on a component, it's to audit the render.
  // The renderCountDispatch never change so it never cause an unwanted render
  callDispatchOnRender(renderCountsDispatch, keyName);
  return (
    <>
      <div className={ 'button-container'}>
        <CounterIncrementor onCounterIncrement={ () => setCounter( count + 1) } count={ count } name={ 'count' }/>
        <CounterIncrementor onCounterIncrement={ () => setHiddenCounter( hiddenCount + 1) } name={ 'hiddenCount' }/>
      </div>
      <p>{`Parent counter - ${ parentProp }`}</p>
    </>
  );
};

MemoFunctionComponentsWithProps.propTypes = {
  parentProp: PropTypes.number.isRequired
};

export default React.memo(MemoFunctionComponentsWithProps);
