import React from 'react';
import PropTypes from 'prop-types';
import CounterIncrementor from '../shared/CounterIncrementor';
import { INCREMENT_RENDER_COUNT } from '../../App';

class ClassComponentWithStateAndProps extends React.Component {
  state = {
    counter: 0,
    hiddenCounter: 0
  };

  handleIncrementCount = name => this.setState(oldState => ({ [name]: oldState[name] + 1 }));

  render() {
    console.log('11 - Render - Class component with state and props');
    this.props.renderCountsDispatch({ type: INCREMENT_RENDER_COUNT, keyName: 'comp11'});
    const { counter } = this.state;

    return (
      <div>
        <h3>11 - Class component with state and props</h3>
        <CounterIncrementor onCounterIncrement={ this.handleIncrementCount } counter={ counter } name={ 'counter' }/>
        <CounterIncrementor onCounterIncrement={ this.handleIncrementCount } name={ 'hiddenCounter' }/>
        <div><p>{`Parent Counter - ${ this.props.parentProp }`}</p></div>
      </div>
    );
  }
}

ClassComponentWithStateAndProps.propTypes = {
  parentProp: PropTypes.number.isRequired
}

export default ClassComponentWithStateAndProps;
