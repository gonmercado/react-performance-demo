import React from 'react';
import PropTypes from 'prop-types';
import CounterIncrementor from '../shared/CounterIncrementor';
import { callDispatchOnRender } from '../../../sharedHelpers/auditRenderHelper';

class ClassComponentWithStateAndProps extends React.Component {
  state = {
    count: 0,
    hiddenCount: 0
  };
  keyName = 'comp11';

  handleIncrementCount = name => this.setState(oldState => ({ [name]: oldState[name] + 1 }));

  render() {
    // This line is the only thing that wouldn't be on a component, it's to audit the render.
    // The renderCountDispatch never change so it never cause an unwanted render
    callDispatchOnRender(this.props.renderCountsDispatch, this.keyName);
    const { count } = this.state;

    return (
      <>
        <div className={ 'button-container'}>
          <CounterIncrementor onCounterIncrement={ this.handleIncrementCount } count={ count } name={ 'count' }/>
          <CounterIncrementor onCounterIncrement={ this.handleIncrementCount } name={ 'hiddenCount' }/>
        </div>
        <p>{`Parent counter - ${ this.props.parentProp }`}</p>
      </>
    );
  }
}

ClassComponentWithStateAndProps.propTypes = {
  parentProp: PropTypes.number.isRequired
}

export default ClassComponentWithStateAndProps;
