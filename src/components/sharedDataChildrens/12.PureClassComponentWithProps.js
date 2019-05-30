import React from 'react';
import PropTypes from 'prop-types';
import CounterIncrementor from '../shared/CounterIncrementor';
import HighlightChildren from '../shared/highlightChildren';
import { callDispatchOnRender } from '../../shared/auditRenderHelper';

class PureClassComponentWithProps extends React.PureComponent {
  state = {
    counter: 0,
    hiddenCounter: 0
  };
  keyName = 'comp12';
  description = '12 - Pure class component with props';

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

PureClassComponentWithProps.propTypes = {
  parentProp: PropTypes.number.isRequired
};

export default PureClassComponentWithProps;
