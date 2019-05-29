import React from 'react';
import CounterIncrementor from '../shared/CounterIncrementor';
import { INCREMENT_RENDER_COUNT } from '../../App';

class ClassComponentWithShouldUpdate extends React.Component {
  state = {
    counter: 0,
    hiddenCounter: 0
  };

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return (nextState.counter !== this.state.counter);
  }

  handleIncrementCount = name => this.setState(oldState => ({ [name]: oldState[name] + 1 }));

  render() {
    console.log('3 - Render - Class component with should update');
    this.props.renderCountsDispatch({ type: INCREMENT_RENDER_COUNT, keyName: 'comp3'});
    const { counter } = this.state;

    return (
      <div>
        <h3>3 - Class component with should update</h3>
        <CounterIncrementor onCounterIncrement={ this.handleIncrementCount } counter={ counter } name={ 'counter' }/>
        <CounterIncrementor onCounterIncrement={ this.handleIncrementCount } name={ 'hiddenCounter' }/>
      </div>
    );
  }
}

export default ClassComponentWithShouldUpdate;
