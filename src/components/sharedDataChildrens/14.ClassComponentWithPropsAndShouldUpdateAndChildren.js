import React from 'react';
import PropTypes from 'prop-types';
import CounterIncrementor from '../shared/CounterIncrementor';
import AnotherChildren from './anotherChildren/anotherChildren';
import { INCREMENT_RENDER_COUNT } from '../../App';

class ClassComponentWithPropsAndShouldUpdateAndChildren extends React.Component {
  state = {
    counter: 0,
    hiddenCounter: 0
  };

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    if (nextProps.parentProp !== this.props.parentProp) return true;
    if (nextState.counter !== this.state.counter) return true;
    return false
  }


  handleIncrementCount = name => this.setState(oldState => ({ [name]: oldState[name] + 1 }));

  render() {
    console.log('14 - Render - Class component with state and props');
    this.props.renderCountsDispatch({ type: INCREMENT_RENDER_COUNT, keyName: 'comp14'});
    const { counter } = this.state;

    return (
      <div>
        <h3>14 - Class component with state and props</h3>
        <CounterIncrementor onCounterIncrement={ this.handleIncrementCount } counter={ counter } name={ 'counter' }/>
        <CounterIncrementor onCounterIncrement={ this.handleIncrementCount } name={ 'hiddenCounter' }/>
        <AnotherChildren grandParentProp={ this.props.parentProp } />
      </div>
    );
  }
}

ClassComponentWithPropsAndShouldUpdateAndChildren.propTypes = {
  parentProp: PropTypes.number.isRequired
}

export default ClassComponentWithPropsAndShouldUpdateAndChildren;
