import React from 'react';
import PropTypes from 'prop-types';
import CounterIncrementor from '../shared/CounterIncrementor';
import { callDispatchOnRender } from '../../shared/auditRenderHelper';
import { childrenComponentsMeta } from '../../shared/componentsMetaData';

class ClassComponentWithPropsAndShouldUpdate extends React.Component {
  state = {
    count: 0,
    hiddenCounter: 0
  };
  keyName = 'comp13';
  childrenMeta = childrenComponentsMeta.find(el => el.keyName === this.keyName);

  handleIncrementCount = name => this.setState(oldState => ({ [name]: oldState[name] + 1 }));

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    if (nextState.count !== this.state.count) return true;
    if (nextProps.parentProp !== this.props.parentProp) return true;
    return false
  }

  render() {
    const { number, description } = this.childrenMeta;
    callDispatchOnRender(this.props.renderCountsDispatch, this.keyName, description, number);
    const { count } = this.state;

    return (
      <>
        <div className={ 'button-container'}>
          <CounterIncrementor onCounterIncrement={ this.handleIncrementCount } count={ count } name={ 'count' }/>
          <CounterIncrementor onCounterIncrement={ this.handleIncrementCount } name={ 'hiddenCount' }/>
        </div>
        <div><p>{`Parent - ${ this.props.parentProp }`}</p></div>
      </>
    );
  }
}

ClassComponentWithPropsAndShouldUpdate.propTypes = {
  parentProp: PropTypes.number.isRequired
}

export default ClassComponentWithPropsAndShouldUpdate;
