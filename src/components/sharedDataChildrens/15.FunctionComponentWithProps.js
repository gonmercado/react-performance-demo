import React from 'react';
import PropTypes from 'prop-types';
import HighlightChildren from '../shared/highlightChildren';
import { callDispatchOnRender } from '../../shared/auditRenderHelper';

const FunctionComponentWithProps = ({ parentProp, renderCountsDispatch }) => {
  const keyName = 'comp15';
  const description = '15 - Function component with props';

  callDispatchOnRender(renderCountsDispatch, keyName, description);
  return (
    <div className={ 'children' }>
      <h3>{ description }</h3>
      <div><p>{`Parent Counter - ${ parentProp }`}</p></div>
      <HighlightChildren keyName={ keyName } />
    </div>
  );
};

FunctionComponentWithProps.propTypes = {
  parentProp: PropTypes.number.isRequired
};

export default FunctionComponentWithProps;
