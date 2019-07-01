import React from 'react';
import PropTypes from 'prop-types';

const CounterIncrementor = ({ name, count, onCounterIncrement }) => {

  return (
    <div className={ 'counter-incrementer' }>
      <button onClick={ () => onCounterIncrement(name) }>{ `Incr ${ name }` }</button><p>{ count }</p>
    </div>
  );
};

CounterIncrementor.propTypes = {
  name: PropTypes.string.isRequired,
  count: PropTypes.number,
  onCounterIncrement: PropTypes.func.isRequired
};

export default CounterIncrementor;
