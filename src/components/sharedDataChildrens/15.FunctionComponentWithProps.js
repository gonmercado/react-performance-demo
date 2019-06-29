import React from 'react';
import PropTypes from 'prop-types';
import { callDispatchOnRender } from '../../shared/auditRenderHelper';

const FunctionComponentWithProps = ({ parentProp, renderCountsDispatch }) => {
  const keyName = 'comp15';

  // This line is the only thing that wouldn't be on a component, it's to audit the render.
  // The renderCountDispatch never change so it never cause an unwanted render
  callDispatchOnRender(renderCountsDispatch, keyName);
  return (
    <p>{`Parent counter - ${ parentProp }`}</p>
  );
};

FunctionComponentWithProps.propTypes = {
  parentProp: PropTypes.number.isRequired
};

export default FunctionComponentWithProps;
