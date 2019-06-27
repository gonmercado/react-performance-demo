import React from 'react';
import CounterIncrementor from '../shared/CounterIncrementor';
import { callDispatchOnRender } from '../../shared/auditRenderHelper';
import { childrenComponentsMeta } from '../../shared/componentsMetaData';

class ClassComponentWithState extends React.Component {
  state = {
    count: 0,
    hiddenCount: 0
  };
  keyName = 'comp1';
  childrenMeta = childrenComponentsMeta.find(el => el.keyName === this.keyName);

  handleIncrementCount = name => this.setState(oldState => ({ [name]: oldState[name] + 1 }));

  render() {
    const { number, description } = this.childrenMeta;
    callDispatchOnRender(this.props.renderCountsDispatch, this.keyName, description, number);
    const { count } = this.state;

    return (
      <div className={ 'button-container'}>
        <CounterIncrementor onCounterIncrement={ this.handleIncrementCount } count={ count } name={ 'count' }/>
        <CounterIncrementor onCounterIncrement={ this.handleIncrementCount } name={ 'hiddenCount' }/>
      </div>
    );
  }
}

export default ClassComponentWithState;
