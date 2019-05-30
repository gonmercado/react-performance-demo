import React from 'react';
import CounterIncrementor from '../shared/CounterIncrementor';
import HighlightChildren from '../shared/highlightChildren';
import { callDispatchOnRender } from '../../shared/auditRenderHelper';

class ClassComponentWithShouldUpdate extends React.Component {
  state = {
    counter: 0,
    hiddenCounter: 0
  };
  keyName = 'comp3';
  description = '3 - Class component with should update'

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return (nextState.counter !== this.state.counter);
  }

  handleIncrementCount = name => this.setState(oldState => ({ [name]: oldState[name] + 1 }));

  render() {
    callDispatchOnRender(this.props.renderCountsDispatch, this.keyName, this.description);
    const { counter } = this.state;

    return (
      <div className={ 'children' }>
        <h3>{ this.description }</h3>
        <CounterIncrementor onCounterIncrement={ this.handleIncrementCount } counter={ counter } name={ 'counter' }/>
        <CounterIncrementor onCounterIncrement={ this.handleIncrementCount } name={ 'hiddenCounter' }/>
        <HighlightChildren keyName={ this.keyName } />
      </div>
    );
  }
}

export default ClassComponentWithShouldUpdate;
