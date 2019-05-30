import React from 'react';
import PropTypes from 'prop-types';
import CounterIncrementor from '../shared/CounterIncrementor';
import AnotherChildren from './anotherChildren/anotherChildren';
import HighlightChildren from '../shared/highlightChildren';
import { callDispatchOnRender } from '../../shared/auditRenderHelper';

class ClassComponentWithPropsAndShouldUpdateAndChildren extends React.Component {
  state = {
    counter: 0,
    hiddenCounter: 0
  };
  keyName = 'comp14';
  description = '14 - Class component with state and props';

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    if (nextProps.parentProp !== this.props.parentProp) return true;
    if (nextState.counter !== this.state.counter) return true;
    return false
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
        <AnotherChildren grandParentProp={ this.props.parentProp } />
        <HighlightChildren keyName={ this.keyName } />
      </div>
    );
  }
}

ClassComponentWithPropsAndShouldUpdateAndChildren.propTypes = {
  parentProp: PropTypes.number.isRequired
}

export default ClassComponentWithPropsAndShouldUpdateAndChildren;
