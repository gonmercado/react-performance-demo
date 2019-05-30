import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import CounterIncrementor from '../shared/CounterIncrementor';
import HighlightChildren from '../shared/highlightChildren';
import { callDispatchOnRender } from '../../shared/auditRenderHelper';
import ComponentTitlePanel from '../shared/componentTitlePanel';
import { displayComponentWithPropsMeta } from '../../shared/componentsMetaData';

const MemoFunctionComponentsWithPropsAndHooks = ({ parentProp, renderCountsDispatch }) => {
  const [ count, setCounter ] = useState(0);
  const [ hiddenCount, setHiddenCounter ] = useState(0);

  const keyName = 'comp17';
  const number = 17;
  const { description } = displayComponentWithPropsMeta.find(el => el.keyName === keyName);

  callDispatchOnRender(renderCountsDispatch, keyName, description, number);
  const renderCounters = useMemo( () =>
      <div className={ 'children' }>
        <ComponentTitlePanel title={ description } number={ number }/>
        <div className={ 'button-container'}>
          <CounterIncrementor onCounterIncrement={ () => setCounter( count + 1) } count={ count } name={ 'count' }/>
          <CounterIncrementor onCounterIncrement={ () => setHiddenCounter( hiddenCount + 1) } name={ 'hiddenCount' }/>
        </div>
        <div><p>{`Parent - ${ parentProp }`}</p></div>
        <HighlightChildren keyName={ keyName } />
      </div>,
    [ count, parentProp ] //eslint-disable-line
  );

  return renderCounters;
};

MemoFunctionComponentsWithPropsAndHooks.propTypes = {
  parentProp: PropTypes.number.isRequired
};

export default React.memo(MemoFunctionComponentsWithPropsAndHooks);
