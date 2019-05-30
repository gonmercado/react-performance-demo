import React from 'react';
import CounterIncrementor from '../shared/CounterIncrementor';
import HighlightChildren from '../shared/highlightChildren';
import { callDispatchOnRender } from '../../shared/auditRenderHelper';
import ComponentTitlePanel from '../shared/componentTitlePanel';

class ClassComponentWithShouldUpdate extends React.Component {
  state = {
    count: 0,
    hiddenCount: 0
  };
  keyName = 'comp3';
  number = 3;
  description = 'Class with should update'

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return (nextState.count !== this.state.count);
  }

  handleIncrementCount = name => this.setState(oldState => ({ [name]: oldState[name] + 1 }));

  render() {
    callDispatchOnRender(this.props.renderCountsDispatch, this.keyName, this.description, this.number);
    const { count } = this.state;

    return (
      <div className={ 'children' }>
        <ComponentTitlePanel title={ this.description } number={ this.number }/>
        <div className={ 'button-container'}>
          <CounterIncrementor onCounterIncrement={ this.handleIncrementCount } count={ count } name={ 'count' }/>
          <CounterIncrementor onCounterIncrement={ this.handleIncrementCount } name={ 'hiddenCount' }/>
        </div>
        <HighlightChildren keyName={ this.keyName } />
      </div>
    );
  }
}

export default ClassComponentWithShouldUpdate;