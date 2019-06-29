import React from 'react';
import PropTypes from 'prop-types';
import CounterIncrementor from '../shared/CounterIncrementor';
import { callDispatchOnRender } from '../../shared/auditRenderHelper';

class PureClassComponentWithProps extends React.PureComponent {
  state = {
    count: 0,
    hiddenCount: 0
  };
  keyName = 'comp12';

  handleIncrementCount = name => this.setState(oldState => ({ [name]: oldState[name] + 1 }));

  render() {
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

PureClassComponentWithProps.propTypes = {
  parentProp: PropTypes.number.isRequired
};

export default PureClassComponentWithProps;
