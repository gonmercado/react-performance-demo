import React from 'react';
import PropTypes from 'prop-types';
import { callDispatchOnRender } from '../../shared/auditRenderHelper';

const FunctionComponentWithProps = ({ parentProp, renderCountsDispatch }) => {
  const keyName = 'comp15';

  callDispatchOnRender(renderCountsDispatch, keyName);
  return (
    <p>{`Parent counter - ${ parentProp }`}</p>
  );
};

FunctionComponentWithProps.propTypes = {
  parentProp: PropTypes.number.isRequired
};

export default FunctionComponentWithProps;
