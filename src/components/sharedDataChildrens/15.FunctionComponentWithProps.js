import React from 'react';
import PropTypes from 'prop-types';
import HighlightChildren from '../shared/highlightChildren';
import { callDispatchOnRender } from '../../shared/auditRenderHelper';
import ComponentTitlePanel from '../shared/componentTitlePanel';
import { displayComponentWithPropsMeta } from '../../shared/componentsMetaData';

const FunctionComponentWithProps = ({ parentProp, renderCountsDispatch }) => {
  const keyName = 'comp15';
  const number = 15;
  const { description } = displayComponentWithPropsMeta.find(el => el.keyName === keyName);

  callDispatchOnRender(renderCountsDispatch, keyName, description, number);
  return (
    <div className={ 'children' }>
      <ComponentTitlePanel title={ description } number={ number }/>
      <div><p>{`Parent - ${ parentProp }`}</p></div>
      <HighlightChildren keyName={ keyName } />
    </div>
  );
};

FunctionComponentWithProps.propTypes = {
  parentProp: PropTypes.number.isRequired
};

export default FunctionComponentWithProps;
