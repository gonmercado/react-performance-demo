import React from 'react';
import PropTypes from 'prop-types';

const CounterIncrementor = ({ name, counter, onCounterIncrement }) => {

  return (
    <div>
      <button onClick={ () => onCounterIncrement(name) }>{ `Increment ${ name }` }</button><p>{ counter }</p>
    </div>
  );
};

CounterIncrementor.propTypes = {
  name: PropTypes.string.isRequired,
  counter: PropTypes.number,
  onCounterIncrement: PropTypes.func.isRequired
};

export default CounterIncrementor;
