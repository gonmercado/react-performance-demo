import React from 'react';
import CounterIncrementor from '../shared/CounterIncrementor';
import { INCREMENT_RENDER_COUNT } from '../../App';

class PureClassComponentWithState extends React.PureComponent {
  state = {
    counter: 0,
    hiddenCounter: 0
  };

  handleIncrementCount = name => this.setState(oldState => ({ [name]: oldState[name] + 1 }));

  render() {
    console.log('2 - Render - Pure class component with state');
    this.props.renderCountsDispatch({ type: INCREMENT_RENDER_COUNT, keyName: 'comp2'});
    const { counter } = this.state;

    return (
      <div>
        <h3>2 - Pure class component with state</h3>
        <CounterIncrementor onCounterIncrement={ this.handleIncrementCount } counter={ counter } name={ 'counter' }/>
        <CounterIncrementor onCounterIncrement={ this.handleIncrementCount } name={ 'hiddenCounter' }/>
      </div>
    );
  }
}

export default PureClassComponentWithState;
