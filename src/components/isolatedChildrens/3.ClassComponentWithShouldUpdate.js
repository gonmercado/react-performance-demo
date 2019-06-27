import React from 'react';
import CounterIncrementor from '../shared/CounterIncrementor';
import { callDispatchOnRender } from '../../shared/auditRenderHelper';

class ClassComponentWithShouldUpdate extends React.Component {
  state = {
    count: 0,
    hiddenCount: 0
  };
  keyName = 'comp3';
  number = 3;

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return (nextState.count !== this.state.count);
  }

  handleIncrementCount = name => this.setState(oldState => ({ [name]: oldState[name] + 1 }));

  render() {
    callDispatchOnRender(this.props.renderCountsDispatch, this.keyName);
    const { count } = this.state;

    return (
      <div className={ 'button-container'}>
        <CounterIncrementor onCounterIncrement={ this.handleIncrementCount } count={ count } name={ 'count' }/>
        <CounterIncrementor onCounterIncrement={ this.handleIncrementCount } name={ 'hiddenCount' }/>
      </div>
    );
  }
}

export default ClassComponentWithShouldUpdate;
