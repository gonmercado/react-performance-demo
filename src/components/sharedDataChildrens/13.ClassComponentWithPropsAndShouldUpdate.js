import React from 'react';
import PropTypes from 'prop-types';
import CounterIncrementor from '../shared/CounterIncrementor';
import { INCREMENT_RENDER_COUNT } from '../../App';

class ClassComponentWithPropsAndShouldUpdate extends React.Component {
  state = {
    counter: 0,
    hiddenCounter: 0
  };

  handleIncrementCount = name => this.setState(oldState => ({ [name]: oldState[name] + 1 }));

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    if (nextState.counter !== this.state.counter) return true;
    if (nextProps.parentProp !== this.props.parentProp) return true;
    return false
  }

  render() {
    console.log('13 - Render - Class component with props and shouldUpdate');
    this.props.renderCountsDispatch({ type: INCREMENT_RENDER_COUNT, keyName: 'comp13'});
    const { counter } = this.state;

    return (
      <div>
        <h3>13 - Class component with props and shouldUpdate</h3>
        <CounterIncrementor onCounterIncrement={ this.handleIncrementCount } counter={ counter } name={ 'counter' }/>
        <CounterIncrementor onCounterIncrement={ this.handleIncrementCount } name={ 'hiddenCounter' }/>
        <div><p>{`Parent Counter - ${ this.props.parentProp }`}</p></div>
      </div>
    );
  }
}

ClassComponentWithPropsAndShouldUpdate.propTypes = {
  parentProp: PropTypes.number.isRequired
}

export default ClassComponentWithPropsAndShouldUpdate;
