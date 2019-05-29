import React from 'react';
import CounterIncrementor from '../shared/CounterIncrementor';
import { INCREMENT_RENDER_COUNT } from '../../App';

class ClassComponentWithState extends React.Component {
  state = {
    counter: 0,
    counterHidden: 0
  };

  handleIncrementCount = name => this.setState(oldState => ({ [name]: oldState[name] + 1 }));

  render() {
    console.log('1 - Render - Class component with state');
    this.props.renderCountsDispatch({ type: INCREMENT_RENDER_COUNT, keyName: 'comp1'});
    const { counter } = this.state;

    return (
      <div>
        <h3>1 - Class component with state</h3>
        <CounterIncrementor onCounterIncrement={ this.handleIncrementCount } counter={ counter } name={ 'counter' }/>
        <CounterIncrementor onCounterIncrement={ this.handleIncrementCount } name={ 'hiddenCounter' }/>
      </div>
    );
  }
}

export default ClassComponentWithState;
