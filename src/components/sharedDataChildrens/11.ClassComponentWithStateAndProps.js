import React from 'react';
import PropTypes from 'prop-types';
import CounterIncrementor from '../shared/CounterIncrementor';
import HighlightChildren from '../shared/highlightChildren';
import { callDispatchOnRender } from '../../shared/auditRenderHelper';

class ClassComponentWithStateAndProps extends React.Component {
  state = {
    counter: 0,
    hiddenCounter: 0
  };
  keyName = 'comp11';
  description = '11 - Class component with state and props';

  handleIncrementCount = name => this.setState(oldState => ({ [name]: oldState[name] + 1 }));

  render() {
    callDispatchOnRender(this.props.renderCountsDispatch, this.keyName, this.description);
    const { counter } = this.state;

    return (
      <div className={ 'children' }>
        <h3>{ this.description }</h3>
        <CounterIncrementor onCounterIncrement={ this.handleIncrementCount } counter={ counter } name={ 'counter' }/>
        <CounterIncrementor onCounterIncrement={ this.handleIncrementCount } name={ 'hiddenCounter' }/>
        <div><p>{`Parent Counter - ${ this.props.parentProp }`}</p></div>
        <HighlightChildren keyName={ this.keyName } />
      </div>
    );
  }
}

ClassComponentWithStateAndProps.propTypes = {
  parentProp: PropTypes.number.isRequired
}

export default ClassComponentWithStateAndProps;
