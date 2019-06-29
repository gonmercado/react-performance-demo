import React from 'react';
import CounterIncrementor from '../shared/CounterIncrementor';
import { callDispatchOnRender } from '../../shared/auditRenderHelper';

class ClassComponentWithShouldUpdate extends React.Component {
  state = {
    count: 0,
    hiddenCount: 0
  };
  keyName = 'comp3';

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return (nextState.count !== this.state.count);
  }

  handleIncrementCount = name => this.setState(oldState => ({ [name]: oldState[name] + 1 }));

  render() {
    // This line is the only thing that wouldn't be on a component, it's to audit the render.
    // The renderCountDispatch never change so it never cause an unwanted render
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
