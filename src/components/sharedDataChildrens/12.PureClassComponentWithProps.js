import React from 'react';
import PropTypes from 'prop-types';
import CounterIncrementor from '../shared/CounterIncrementor';
import { INCREMENT_RENDER_COUNT } from '../../App';

class PureClassComponentWithProps extends React.PureComponent {
  state = {
    counter: 0,
    hiddenCounter: 0
  };

  handleIncrementCount = name => this.setState(oldState => ({ [name]: oldState[name] + 1 }));

  render() {
    console.log('12 - Render - Pure class component with props');
    this.props.renderCountsDispatch({ type: INCREMENT_RENDER_COUNT, keyName: 'comp12'});
    const { counter } = this.state;

    return (
      <div>
        <h3>12 - Pure class component with props</h3>
        <CounterIncrementor onCounterIncrement={ this.handleIncrementCount } counter={ counter } name={ 'counter' }/>
        <CounterIncrementor onCounterIncrement={ this.handleIncrementCount } name={ 'hiddenCounter' }/>
        <div><p>{`Parent Counter - ${ this.props.parentProp }`}</p></div>
      </div>
    );
  }
}

PureClassComponentWithProps.propTypes = {
  parentProp: PropTypes.number.isRequired
};

export default PureClassComponentWithProps;
