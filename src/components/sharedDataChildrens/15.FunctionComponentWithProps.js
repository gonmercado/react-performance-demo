import React from 'react';
import PropTypes from 'prop-types';
import { callDispatchOnRender } from '../../shared/auditRenderHelper';
import { childrenComponentsMeta } from '../../shared/componentsMetaData';

const FunctionComponentWithProps = ({ parentProp, renderCountsDispatch }) => {
  const keyName = 'comp15';
  const { number, description } = childrenComponentsMeta.find(el => el.keyName === keyName);

  callDispatchOnRender(renderCountsDispatch, keyName, description, number);
  return (
    <div><p>{`Parent - ${ parentProp }`}</p></div>
  );
};

FunctionComponentWithProps.propTypes = {
  parentProp: PropTypes.number.isRequired
};

export default FunctionComponentWithProps;
