import React from 'react';
import PropTypes from 'prop-types';
import { INCREMENT_RENDER_COUNT } from '../../App';

const FunctionComponentWithProps = ({ parentProp, renderCountsDispatch }) => {
  console.log('15 - Function component with props');
  renderCountsDispatch({ type: INCREMENT_RENDER_COUNT, keyName: 'comp15'});
  return (
    <div>
      <h3>15 - Function component with props</h3>
      <div><p>{`Parent Counter - ${ parentProp }`}</p></div>
    </div>
  );
};

FunctionComponentWithProps.propTypes = {
  parentProp: PropTypes.number.isRequired
};

export default FunctionComponentWithProps;
